import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createRequire } from "node:module";
import { createServer } from "node:net";
import { setTimeout as delay } from "node:timers/promises";
import { after, before, test } from "node:test";
import { runInNewContext } from "node:vm";

const require = createRequire(import.meta.url);
let server;
let baseUrl;
const pages = new Map();

before(async () => {
  const portProbe = createServer();
  portProbe.listen(0, "127.0.0.1");
  await once(portProbe, "listening");
  const { port } = portProbe.address();
  await new Promise((resolve) => portProbe.close(resolve));
  baseUrl = `http://127.0.0.1:${port}`;

  server = spawn(process.execPath, [
    require.resolve("next/dist/bin/next"), "start", "--hostname", "127.0.0.1", "--port", String(port),
  ], { stdio: ["ignore", "ignore", "pipe"] });
  let errors = "";
  server.stderr.on("data", (chunk) => { errors += chunk; });

  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) throw new Error(`Servidor não iniciou: ${errors}`);
    try {
      const response = await fetch(baseUrl, { signal: AbortSignal.timeout(2_000) });
      if (response.ok) {
        pages.set("/", await response.text());
        return;
      }
      await response.body?.cancel();
    } catch {
      // Aguarda a disponibilidade do servidor de produção.
    }
    await delay(200);
  }
  throw new Error(`Servidor indisponível. Execute pnpm build antes dos testes. ${errors}`);
});

after(async () => {
  if (server && server.exitCode === null) {
    const exited = once(server, "exit");
    server.kill("SIGTERM");
    await exited;
  }
});

async function getPage(path) {
  if (!pages.has(path)) {
    const response = await fetch(new URL(path, baseUrl));
    assert.equal(response.status, 200, `Rota indisponível: ${path}`);
    pages.set(path, await response.text());
  }
  return pages.get(path);
}

function markup(html) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
}

test("a home apresenta os três cases e os caminhos para contato", async () => {
  const html = markup(await getPage("/"));
  for (const slug of ["rastro-florestal", "consolidacao-arquitetural", "vidora"]) {
    assert.ok(html.includes(`href="/projetos/${slug}"`), `Case ausente: ${slug}`);
  }
  assert.ok(html.includes('href="/#contato"'));
  assert.match(html, /href="mailto:[^"]+"/);
  for (const id of ["inicio", "sobre", "projetos", "experiencia", "tecnologias", "contato"]) {
    assert.ok(html.includes(`id="${id}"`), `Âncora ausente: ${id}`);
  }
});

test("as páginas do sitemap têm metadados, landmarks e links internos válidos", async () => {
  const sitemap = await getPage("/sitemap.xml");
  const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
  assert.ok(routes.includes("/projetos/consolidacao-arquitetural"));

  for (const route of routes) {
    const html = markup(await getPage(route));
    assert.equal([...html.matchAll(/<main\b/g)].length, 1, `Landmark main: ${route}`);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `Título h1: ${route}`);
    assert.match(html, /<html[^>]*lang="pt-BR"/);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    assert.ok(canonical, `Canonical ausente: ${route}`);
    assert.equal(new URL(canonical[1]).pathname, route);

    for (const [, href] of html.matchAll(/<a\b[^>]*href="([/#][^"]*)"/g)) {
      const target = new URL(href, `${baseUrl}${route}`);
      const destination = markup(await getPage(target.pathname));
      if (target.hash) {
        assert.ok(destination.includes(`id="${target.hash.slice(1)}"`), `Âncora quebrada: ${route} → ${href}`);
      }
    }
  }
});

test("as imagens utilizadas nas páginas existem", async () => {
  const assets = new Set();
  const sitemap = await getPage("/sitemap.xml");
  const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
  for (const route of routes) {
    const html = await getPage(route);
    for (const [, src] of markup(html).matchAll(/<img\b[^>]*src="([^"]+)"/g)) {
      const url = new URL(src.replaceAll("&amp;", "&"), baseUrl);
      assets.add(url.searchParams.get("url") ?? url.pathname);
    }
  }
  assert.ok(assets.size > 0);
  for (const asset of assets) {
    const response = await fetch(new URL(asset, baseUrl), { method: "HEAD" });
    assert.equal(response.status, 200, `Imagem indisponível: ${asset}`);
    assert.match(response.headers.get("content-type"), /^image\//);
  }
});

test("o acesso à demonstração fica disponível antes do conteúdo longo", async () => {
  const html = markup(await getPage("/projetos/rastro-florestal"));
  const access = html.indexOf("Como acessar a demonstração");
  assert.ok(access > 0 && access < html.indexOf('id="contexto"'));
  assert.match(html, /<dialog\b/);
  assert.match(html, /aria-haspopup="dialog"/);
});

test("um slug inexistente retorna 404", async () => {
  const response = await fetch(`${baseUrl}/projetos/projeto-inexistente`);
  assert.equal(response.status, 404);
  await response.body?.cancel();
});

async function openHomeAssembly({ storage = new Map(), reducedMotion = false, pathname = "/", hash = "", storageError } = {}) {
  const html = await getPage("/");
  const script = html.match(/<script\b[^>]*id="home-assembly"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  assert.ok(script, "Inicialização da animação ausente no HTML do servidor");

  const attributes = new Map();
  const timers = new Map();
  const document = Object.assign(new EventTarget(), {
    readyState: "loading",
    documentElement: {
      setAttribute: (name, value) => attributes.set(name, value),
      removeAttribute: (name) => attributes.delete(name),
    },
  });
  const motion = Object.assign(new EventTarget(), { matches: reducedMotion });
  const window = Object.assign(new EventTarget(), {
    location: { pathname, hash },
    matchMedia: () => motion,
    setTimeout: (callback) => { timers.set(callback, callback); return callback; },
    clearTimeout: (id) => timers.delete(id),
  });
  runInNewContext(script, {
    document,
    window,
    sessionStorage: {
      getItem: (key) => {
        if (storageError === "read") throw new Error("Storage indisponível");
        return storage.get(key) ?? null;
      },
      setItem: (key, value) => {
        if (storageError === "write") throw new Error("Quota excedida");
        storage.set(key, value);
      },
    },
  });
  return { attributes, timers, document, window, motion, storage };
}

test("a montagem é habilitada antes da hydration somente uma vez por sessão", async () => {
  const first = await openHomeAssembly();
  assert.ok(first.attributes.has("data-home-assembly"));
  first.document.dispatchEvent(new Event("DOMContentLoaded"));
  assert.equal(first.timers.size, 1);
  for (const finish of first.timers.values()) finish();
  assert.equal(first.attributes.has("data-home-assembly"), false);
  assert.equal(first.timers.size, 0);

  const repeat = await openHomeAssembly({ storage: first.storage });
  assert.equal(repeat.attributes.has("data-home-assembly"), false);
  assert.equal(repeat.timers.size, 0);
  assert.ok((await openHomeAssembly()).attributes.has("data-home-assembly"), "Nova sessão deve animar");
});

test("movimento reduzido, storage bloqueado e links profundos mantêm conteúdo imediato", async () => {
  for (const options of [
    { reducedMotion: true },
    { storageError: "read" },
    { storageError: "write" },
    { pathname: "/projetos/vidora" },
    { hash: "#contato" },
  ]) {
    const page = await openHomeAssembly(options);
    assert.equal(page.attributes.has("data-home-assembly"), false, JSON.stringify(options));
    assert.equal(page.timers.size, 0);
  }
  assert.ok((await openHomeAssembly({ hash: "#inicio" })).attributes.has("data-home-assembly"));
});

test("interação, histórico e mudança de preferência encerram a montagem e limpam o fallback", async () => {
  for (const [target, event] of [
    ["document", "pointerdown"],
    ["document", "focusin"],
    ["window", "pagehide"],
    ["window", "popstate"],
    ["motion", "change"],
  ]) {
    const page = await openHomeAssembly();
    page.document.dispatchEvent(new Event("DOMContentLoaded"));
    page[target].dispatchEvent(new Event(event));
    assert.equal(page.attributes.has("data-home-assembly"), false, event);
    assert.equal(page.timers.size, 0, event);
  }
});

test("uma visita sem animação não impede a montagem após desativar movimento reduzido", async () => {
  for (const options of [{ reducedMotion: true }, { hash: "#contato" }]) {
    const skipped = await openHomeAssembly(options);
    assert.equal(skipped.storage.get("portfolio:home-assembly"), undefined);
    const eligible = await openHomeAssembly({ storage: skipped.storage });
    assert.ok(eligible.attributes.has("data-home-assembly"));
    assert.equal(eligible.storage.get("portfolio:home-assembly"), "seen");
    const repeat = await openHomeAssembly({ storage: eligible.storage });
    assert.equal(repeat.attributes.has("data-home-assembly"), false);
  }
});

test("o Hero permanece completo no HTML sem depender de JavaScript", async () => {
  const html = markup(await getPage("/"));
  assert.match(html, /<h1\b[^>]*><span class="hero-name">Eloan Ferreira<\/span><\/h1>/);
  assert.match(html, /<a\b[^>]*data-assembly="primary-cta"[^>]*>/);
  assert.match(html, /<html\b(?![^>]*data-home-assembly)[^>]*>/);
  assert.doesNotMatch(html, /<(?:header|h1|p|figcaption)\b[^>]*(?:inert|visibility:\s*hidden|opacity:\s*0)/);
});

test("o tema inicial é escuro e respeita uma preferência clara salva", async () => {
  const html = await getPage("/");
  assert.match(html, /<html\b[^>]*class="[^"]*\bdark\b[^"]*"/);
  assert.match(html, /if \(saved !== 'light'\)/);
  assert.doesNotMatch(html, /var prefersDark = window\.matchMedia/);
});
