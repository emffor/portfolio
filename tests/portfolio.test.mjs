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

try {
  process.loadEnvFile?.();
} catch {
}

const storageUrlEnv =
  process.env.NEXT_PUBLIC_STORAGE_URL ?? process.env.AWS_ENDPOINT ?? "";
const storageBucketEnv =
  process.env.NEXT_PUBLIC_STORAGE_BUCKET ?? process.env.AWS_BUCKET ?? "";
const storageBase = storageUrlEnv.replace(/\/+$/, "");
const storageBucket = storageBucketEnv.replace(/^\/+|\/+$/g, "");
const storagePrefix = storageBase || storageBucket
  ? `${storageBase}${storageBucket ? `/${storageBucket}` : ""}/`
  : "";

before(async () => {
  const portProbe = createServer();
  portProbe.listen(0, "127.0.0.1");
  await once(portProbe, "listening");
  const { port } = portProbe.address();
  await new Promise((resolve) => portProbe.close(resolve));
  baseUrl = `http://127.0.0.1:${port}`;

  server = spawn(process.execPath, [
    require.resolve("next/dist/bin/next"), "start", "--hostname", "127.0.0.1", "--port", String(port),
  ], { env: { ...process.env, NODE_ENV: "production" }, stdio: ["ignore", "ignore", "pipe"] });
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

test("a home prioriza três cases e mantém os demais projetos acessíveis", async () => {
  const html = markup(await getPage("/"));
  for (const slug of ["rastro-florestal", "investidor", "consolidacao-arquitetural", "nexo", "vidora"]) {
    assert.ok(html.includes(`href="/projetos/${slug}"`), `Case ausente: ${slug}`);
  }
  const featuredSectionStart = html.indexOf('<section id="projetos"');
  const featuredSectionEnd = html.indexOf("</section>", featuredSectionStart);
  const featuredSection = html.slice(featuredSectionStart, featuredSectionEnd);
  const featuredOrder = [
    "rastro-florestal",
    "consolidacao-arquitetural",
    "investidor",
  ].map((slug) => featuredSection.indexOf(`href="/projetos/${slug}"`));
  assert.ok(featuredOrder.every((index) => index >= 0));
  assert.deepEqual(featuredOrder, [...featuredOrder].sort((a, b) => a - b));
  assert.equal([...featuredSection.matchAll(/<article\b/g)].length, 3);
  const additionalSectionStart = html.indexOf('<section id="projetos-adicionais"');
  const additionalSection = html.slice(additionalSectionStart, html.indexOf("</section>", additionalSectionStart));
  for (const slug of ["nexo", "vidora", "bruna-e-eloan"]) {
    assert.ok(!featuredSection.includes(`href="/projetos/${slug}"`));
    assert.ok(additionalSection.includes(`href="/projetos/${slug}"`));
  }
  assert.ok(additionalSectionStart > html.indexOf("</section>", featuredSectionStart));
  const experienceSectionStart = html.indexOf('id="experiencia"');
  assert.ok(additionalSectionStart < experienceSectionStart);
  assert.ok(html.includes('href="/projetos/bruna-e-eloan"'));
  assert.ok(html.includes('href="https://brunaeeloan.emfsystems.com.br/"'));
  assert.ok(html.includes('href="https://github.com/emffor/projeto_casamento_web"'));
  assert.ok(html.includes('href="https://rastro.emfsystems.com.br/"'));
  assert.ok(html.includes('href="https://nexo.emfsystems.com.br"'));
  assert.ok(!html.includes('href="https://github.com/emffor/task-markdown"'));
  assert.ok(html.includes("Ver publicação no LinkedIn"));
  assert.match(html, /<a\b(?=[^>]*href="https:\/\/www\.linkedin\.com\/posts\/eloanferreira_destaquetech-gratidaeto-inovaaexaeto-activity-7275562861198790656-ngqM\?utm_source=share&amp;utm_medium=member_desktop&amp;rcm=ACoAAC1Jm_sBcLwJPBGBts8leF2NMZAPHQY_uR8")(?=[^>]*target="_blank")[^>]*>Ver publicação no LinkedIn<\/a>/);
  assert.ok(html.includes("Acessar aplicação"));
  assert.ok(html.includes('href="/#contato"'));
  assert.match(html, /href="mailto:[^"]+"/);
  for (const id of ["inicio", "sobre", "projetos", "experiencia", "tecnologias", "contato"]) {
    assert.ok(html.includes(`id="${id}"`), `Âncora ausente: ${id}`);
  }
});

test("o currículo está nos menus desktop e mobile de todas as páginas principais", async () => {
  for (const route of ["/", "/curriculo", "/projetos/consolidacao-arquitetural"]) {
    const html = markup(await getPage(route));
    const header = html.slice(html.indexOf("<header"), html.indexOf("</header>"));
    for (const label of ["Navegação Principal", "Navegação móvel"]) {
      const nav = header.match(new RegExp(`<nav\\b[^>]*aria-label="${label}"[^>]*>([\\s\\S]*?)<\\/nav>`));
      assert.ok(nav, `Menu ausente: ${route} ${label}`);
      assert.ok(nav[1].includes('href="/curriculo"'), `Currículo ausente: ${route} ${label}`);
    }
    if (route === "/curriculo") {
      assert.match(header, /<a\b(?=[^>]*href="\/curriculo")(?=[^>]*aria-current="page")[^>]*>/);
    }
  }
});

test("os cards informam como acessar as demonstrações sem abrir o case", async () => {
  const html = markup(await getPage("/"));
  for (const [slug, instruction] of [
    ["rastro-florestal", "Como acessar a demonstração"],
    ["investidor", "Para acessar a demonstração, abra a aplicação e informe o código de teste"],
  ]) {
    const start = html.indexOf(`<article aria-labelledby="project-${slug}"`);
    assert.ok(start >= 0);
    const card = html.slice(start, html.indexOf("</article>", start));
    assert.ok(card.includes(instruction), `Orientação ausente no card: ${slug}`);
  }
});

test("o case Investidor usa a aplicação pública sem expor GitHub", async () => {
  const html = markup(await getPage("/projetos/investidor"));
  const caseContent = html.slice(html.indexOf("<main"), html.indexOf("</main>"));
  assert.ok(html.includes('href="https://investidor.emfsystems.com.br"'));
  assert.ok(html.includes("Acessar aplicação"));
  assert.ok(html.includes("Código-fonte privado. Projeto autoral."));
  assert.doesNotMatch(caseContent, /github|ver no github/i);
  const expectedImageParam = encodeURIComponent(`${storagePrefix}projects/investidor/valuation-empresa.png`);
  assert.ok(
    caseContent.includes('valuation-empresa.png') &&
    caseContent.includes(`src="/_next/image?url=${expectedImageParam}`)
  );
  assert.ok(caseContent.includes("Automação de fluxos autenticados com Chromium/Puppeteer"));
  for (const technology of ["Node.js", "Puppeteer", "Chromium"]) {
    assert.ok(caseContent.includes(technology), `Tecnologia ausente na stack: ${technology}`);
  }
  const galleryStart = caseContent.indexOf('<section aria-label="Telas e capturas do projeto"');
  const galleryDialogStart = caseContent.indexOf("<dialog", galleryStart);
  const gallery = caseContent.slice(galleryStart, galleryDialogStart);
  assert.equal([...gallery.matchAll(/<figure\b/g)].length, 6);
  assert.ok(gallery.includes("valuation-empresa.png"));
});

test("as páginas do sitemap têm metadados, landmarks e links internos válidos", async () => {
  const sitemap = await getPage("/sitemap.xml");
  const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
  assert.ok(routes.includes("/projetos/consolidacao-arquitetural"));
  assert.ok(routes.includes("/projetos/bruna-e-eloan"));
  assert.ok(routes.includes("/projetos/investidor"));

  for (const route of routes) {
    const html = markup(await getPage(route));
    const expectedLang = route === "/en" || route.startsWith("/en/") ? "en" : "pt-BR";
    assert.equal([...html.matchAll(/<main\b/g)].length, 1, `Landmark main: ${route}`);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `Título h1: ${route}`);
    assert.match(html, new RegExp(`<html[^>]*lang="${expectedLang}"`));
    assert.match(html, /<meta name="description" content="[^"]+"/);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    assert.ok(canonical, `Canonical ausente: ${route}`);
    assert.equal(new URL(canonical[1]).pathname, route);

    for (const [, href] of html.matchAll(/<a\b[^>]*href="([/#][^"]*)"/g)) {
      const target = new URL(href, `${baseUrl}${route}`);
      if (target.pathname.endsWith(".pdf")) {
        const response = await fetch(target, { method: "HEAD" });
        assert.equal(response.status, 200, `PDF indisponível: ${href}`);
        assert.match(response.headers.get("content-type"), /^application\/pdf/);
        continue;
      }
      const destination = markup(await getPage(target.pathname));
      if (target.hash) {
        assert.ok(destination.includes(`id="${target.hash.slice(1)}"`), `Âncora quebrada: ${route} → ${href}`);
      }
    }
  }
});

test("o currículo é acessível pela home, indexável e completo no HTML do servidor", async () => {
  const home = markup(await getPage("/"));
  assert.ok(home.includes('href="/curriculo"'));
  const sitemap = await getPage("/sitemap.xml");
  assert.ok([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].some(([, url]) => new URL(url).pathname === "/curriculo"));

  const html = markup(await getPage("/curriculo"));
  assert.ok(html.includes("Baixar / Imprimir PDF"));
  for (const section of ["Resumo profissional", "Competências técnicas", "Experiência profissional", "Projetos selecionados", "Formação e idiomas"]) {
    assert.ok(html.includes(section), `Seção ausente no currículo: ${section}`);
  }
  for (const company of ["READI", "Velty", "Nestec", "SN Representação", "Data Business"]) {
    assert.ok(html.includes(company), `Experiência ausente no currículo: ${company}`);
  }
  assert.match(html, /href="mailto:[^"]+"/);
  assert.match(html, /href="tel:\+55\d+"/);
  assert.ok(html.includes("Fortaleza/CE"));
  assert.ok(html.includes("Experiência como referência técnica em projetos de alta complexidade"));
  assert.ok(html.includes("Automatizei 100% dos processos comerciais e operacionais"));
  for (const skill of ["NestJS", "React Native", "MySQL", "Generative AI"]) {
    assert.ok(html.includes(skill), `Competência do PDF ausente na página: ${skill}`);
  }
  assert.ok(html.replaceAll("<!-- -->", "").includes("Inglês: Intermediário B1"));
  assert.doesNotMatch(html, /madeireira@email\.com|123123/);
});

test("download e impressão apontam para um PDF disponível com assinatura válida", async () => {
  const html = markup(await getPage("/curriculo"));
  const expectedHref = storagePrefix
    ? `${storagePrefix}documentos/EloanFerreira.pdf`
    : "/documentos/EloanFerreira.pdf";
  const escapedHref = expectedHref.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  assert.match(html, new RegExp(`<a\\b(?=[^>]*href="${escapedHref}")(?=[^>]*target="_blank")(?=[^>]*rel="noopener noreferrer")[^>]*>Baixar \\/ Imprimir PDF<\\/a>`));

  const fetchUrl = new URL(expectedHref, baseUrl);
  const response = await fetch(fetchUrl, { signal: AbortSignal.timeout(10_000) });
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /^application\/pdf/);
  const document = Buffer.from(await response.arrayBuffer());
  assert.equal(document.subarray(0, 5).toString(), "%PDF-");
});

test("os dados estruturados identificam o autor e a hierarquia de cada case", async () => {
  function schemas(html) {
    return [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
      .map(([, content]) => JSON.parse(content));
  }

  const [profile] = schemas(await getPage("/"));
  assert.equal(profile["@type"], "ProfilePage");
  assert.equal(profile.mainEntity["@type"], "Person");
  assert.equal(profile.mainEntity.name, "Eloan Ferreira");
  assert.ok(profile.mainEntity.sameAs.includes("https://github.com/emffor"));

  const sitemap = await getPage("/sitemap.xml");
  const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => new URL(url).pathname).filter((route) => route.startsWith("/projetos/"));
  for (const route of routes) {
    const [schema] = schemas(await getPage(route));
    const work = schema["@graph"].find((item) => item["@type"] === "CreativeWork");
    const breadcrumb = schema["@graph"].find((item) => item["@type"] === "BreadcrumbList");
    assert.equal(new URL(work.url).pathname, route);
    assert.equal(work.author["@id"], profile.mainEntity["@id"]);
    assert.equal(new URL(breadcrumb.itemListElement[1].item).pathname, route);
    assert.equal(breadcrumb.itemListElement[1].name, work.name);
  }
});

test("o Investidor informa o código público de teste sem exigir solicitação de acesso", async () => {
  const html = markup(await getPage("/projetos/investidor"));
  const accessNote = html.indexOf("Para acessar a demonstração, abra a aplicação e informe o código de teste 11111111.");
  assert.ok(accessNote >= 0 && accessNote < html.indexOf('id="contexto"'));
  assert.ok(html.includes("Demonstração online · acesso por código de teste"));
  assert.ok(html.includes('href="https://investidor.emfsystems.com.br"'));
  assert.doesNotMatch(html, /Solicitar demonstração|href="mailto:[^"]+\?subject=Demonstra/);
});

test("os cases adicionais retornam à seção correspondente sem entrar na navegação dos destaques", async () => {
  for (const slug of ["nexo", "vidora", "bruna-e-eloan"]) {
    const html = markup(await getPage(`/projetos/${slug}`));
    assert.ok(html.includes('href="/#projetos-adicionais"'));
    assert.doesNotMatch(html, /Case anterior|Próximo case/);
    if (slug !== "vidora") assert.ok(html.includes("Acessar aplicação"));
    if (slug === "nexo") assert.doesNotMatch(html, /Ver no GitHub/);
    else assert.ok(html.includes("Ver no GitHub"));
  }
});

test("o case Nexo expõe a demonstração sem CTA de GitHub", async () => {
  const html = markup(await getPage("/projetos/nexo"));
  assert.ok(html.includes('href="https://nexo.emfsystems.com.br"'));
  assert.ok(html.includes("Acessar aplicação"));
  assert.ok(html.includes("Código-fonte privado."));
  assert.doesNotMatch(html, /Ver no GitHub|github\.com\/emffor\/task-markdown/);
});

test("todos os cases apresentam atuação, entregas, stack e resumo com âncoras", async () => {
  const sitemap = await getPage("/sitemap.xml");
  const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => new URL(match[1]).pathname)
    .filter((path) => path.startsWith("/projetos/") || path.startsWith("/en/projetos/"));

  for (const route of routes) {
    const html = markup(await getPage(route));
    const roleLabel = route.startsWith("/en/") ? "My role" : "Minha atuação";
    const sectionIds = route.startsWith("/en/")
      ? ["summary", "role", "deliverables", "stack"]
      : ["resumo", "atuacao", "entregas", "stack"];
    for (const id of sectionIds) {
      assert.ok(html.includes(`id="${id}"`), `Seção ausente: ${route}#${id}`);
      assert.ok(html.includes(`href="#${id}"`), `Navegação ausente: ${route}#${id}`);
    }
    assert.ok(html.indexOf(roleLabel) > 0, `Atuação ausente: ${route}`);
    const carouselRole = route.startsWith("/en/") ? "carousel" : "carrossel";
    assert.ok(html.indexOf(roleLabel) < html.indexOf(`aria-roledescription="${carouselRole}"`));
    assert.match(html, /<figcaption\b/);
  }
});

test("cada case tem prévia social própria em PNG disponível para compartilhamento", async () => {
  for (const localePrefix of ["", "/en"]) {
    for (const slug of ["rastro-florestal", "investidor", "consolidacao-arquitetural", "nexo", "vidora", "bruna-e-eloan"]) {
      const route = `${localePrefix}/projetos/${slug}`;
      const html = markup(await getPage(route));
      for (const property of ['property="og:image"', 'name="twitter:image"']) {
        const image = html.match(new RegExp(`<meta ${property} content="([^"]+)"`));
        assert.ok(image, `Prévia ausente: ${route} ${property}`);
        const imageUrl = new URL(image[1].replaceAll("&amp;", "&"));
        assert.ok(
          imageUrl.pathname.startsWith(`${route}/opengraph-image`),
          `Prévia inesperada: ${route} ${property} → ${imageUrl.pathname}`
        );
        const response = await fetch(new URL(imageUrl.pathname + imageUrl.search, baseUrl));
        assert.equal(response.status, 200);
        assert.match(response.headers.get("content-type"), /^image\/png/);
        const bytes = Buffer.from(await response.arrayBuffer());
        assert.equal(bytes.subarray(1, 4).toString(), "PNG");
        assert.equal(bytes.readUInt32BE(16), 1200);
        assert.equal(bytes.readUInt32BE(20), 630);
      }
    }
  }
});

test("as imagens utilizadas nas páginas existem e retornam conteúdo de imagem", async (t) => {
  const assets = new Set();
  const sitemap = await getPage("/sitemap.xml");
  const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
  for (const route of routes) {
    const html = await getPage(route);
    for (const [, src] of markup(html).matchAll(/<img\b[^>]*src="([^"]+)"/g)) {
      const url = new URL(src.replaceAll("&amp;", "&"), baseUrl);
      const target = url.searchParams.get("url") ?? (url.origin === new URL(baseUrl).origin ? url.pathname : url.href);
      assets.add(target);
    }
  }
  assert.ok(assets.size > 0);
  for (const asset of assets) {
    await t.test(`Imagem: ${new URL(asset, baseUrl).pathname}`, async () => {
      if (asset.startsWith("http://") || asset.startsWith("https://")) {
        if (storagePrefix) {
          assert.ok(
            asset.startsWith(storagePrefix),
            `Asset remoto fora do storage configurado: ${asset}`
          );
        }
        const relativePath = storagePrefix ? asset.slice(storagePrefix.length) : new URL(asset).pathname.replace(/^\/+/, "");
        assert.match(
          relativePath,
          /^(?:projects\/[a-z0-9-]+|profile)\/[a-zA-Z0-9._-]+\.(?:png|svg|webp|jpg|jpeg)$/,
          `Estrutura inválida de asset no bucket: ${asset}`
        );
      }
      const response = await fetch(new URL(asset, baseUrl), {
        method: "HEAD",
        signal: AbortSignal.timeout(10_000),
      });
      assert.equal(response.status, 200, `Imagem indisponível: ${asset}`);
      assert.match(response.headers.get("content-type") ?? "", /^image\//, `Conteúdo inválido: ${asset}`);
    });
  }
});

test("o acesso à demonstração fica disponível antes do conteúdo longo", async () => {
  const html = markup(await getPage("/projetos/rastro-florestal"));
  const access = html.indexOf("Como acessar a demonstração");
  assert.ok(access > 0 && access < html.indexOf('id="contexto"'));
  assert.match(html, /<dialog\b/);
  assert.match(html, /aria-haspopup="dialog"/);
});

test("a versão em inglês usa o idioma, o chrome e os canônicos próprios", async () => {
  const home = markup(await getPage("/en"));
  assert.match(home, /<html[^>]*lang="en"/);
  assert.ok(home.includes('href="/en/curriculo"'));
  assert.ok(home.includes("Selected projects"));
  assert.ok(home.includes("Additional projects"));
  assert.ok(home.includes("Professional experience"));
  assert.ok(home.includes("Applied skills"));
  assert.ok(home.includes("aria-label=\"Primary navigation\""));
  assert.ok(home.includes("View projects"));
  assert.doesNotMatch(home, /Ver projetos/);
  assert.ok(home.includes('aria-label="View Portuguese version"'));
  for (const href of ["/en#about", "/en#projects", "/en#experience", "/en#technologies", "/en#contact"]) {
    assert.ok(home.includes(`href="${href}"`), `Âncora do menu EN ausente: ${href}`);
  }
  const ptHome = markup(await getPage("/"));
  assert.ok(ptHome.includes('aria-label="Ver versão em inglês"'));
  assert.ok(ptHome.includes('href="/en"'));
  const homeCanonical = home.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(homeCanonical);
  assert.equal(new URL(homeCanonical[1]).pathname, "/en");

  const resume = markup(await getPage("/en/curriculo"));
  assert.ok(resume.includes("Professional summary"));
  assert.ok(resume.includes("Backend engineering and production systems modernization."));
  assert.ok(resume.includes("Intermediate B1"));
  assert.doesNotMatch(resume, /Download \/ Print PDF|EloanFerreira\.pdf/);
  assert.ok(resume.includes("Education and languages"));
  const resumeCanonical = resume.match(/<link rel="canonical" href="([^"]+)"/);
  assert.equal(new URL(resumeCanonical[1]).pathname, "/en/curriculo");

  const nexo = markup(await getPage("/en/projetos/nexo"));
  assert.ok(nexo.includes("Back to projects"));
  assert.ok(nexo.includes("Case summary"));
  assert.ok(nexo.includes("Deliverables and evidence"));
  assert.doesNotMatch(nexo, /View on GitHub/);
  assert.ok(nexo.includes("Full-Stack Workspace"));
  assert.ok(nexo.includes("Live app available"));
  assert.ok(nexo.includes("ID-preserving transactional replacement"));
  assert.ok(nexo.includes("View live app"));
  assert.ok(nexo.includes('href="https://nexo.emfsystems.com.br"'));
  assert.doesNotMatch(nexo, /Voltar para projetos|Resumo do case/);
  const nexoCanonical = nexo.match(/<link rel="canonical" href="([^"]+)"/);
  assert.equal(new URL(nexoCanonical[1]).pathname, "/en/projetos/nexo");

  const sitemap = await getPage("/sitemap.xml");
  for (const route of ["/en", "/en/curriculo", "/en/projetos/nexo"]) {
    assert.ok(
      [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].some(
        ([, url]) => new URL(url).pathname === route
      ),
      `Rota EN ausente no sitemap: ${route}`
    );
  }

  const experienceEn = markup(await getPage("/en"));
  assert.ok(experienceEn.includes("Consolidation of 11 microservices and 11 databases"));
  assert.ok(experienceEn.includes("Top Performer of the Year"));
  assert.ok(experienceEn.includes("REST API development, business rules"));
  assert.doesNotMatch(experienceEn, /Consolidação de 11 microsserviços/);

  const investidorEn = markup(await getPage("/en/projetos/investidor"));
  assert.ok(investidorEn.includes("To access the demo, open the app and enter test code 11111111."));
  assert.ok(investidorEn.includes("Private source code. Authored project."));

  const vidoraEn = markup(await getPage("/en/projetos/vidora"));
  assert.ok(vidoraEn.includes("Note on authentication"));
  assert.ok(vidoraEn.includes("implements JWT by hand with HMAC-SHA256"));

  const rastroEn = markup(await getPage("/en/projetos/rastro-florestal"));
  assert.ok(rastroEn.includes("Multi-tenant SaaS"));
  assert.ok(rastroEn.includes("How to access the demo"));

  const englishRoutes = [
    "/en",
    "/en/curriculo",
    ...["rastro-florestal", "investidor", "consolidacao-arquitetural", "nexo", "vidora", "bruna-e-eloan"].map(
      (slug) => `/en/projetos/${slug}`
    ),
  ];
  const portugueseLeaks = /Apresentação inicial|Dados & Infraestrutura|Arquitetura & Qualidade|IA & Automações|Modernização da plataforma READI|Backend e modernização de sistemas em produção|Controles das imagens|Mostrar imagem anterior|Mostrar próxima imagem|Pausar rotação de imagens|Portfólio/;
  for (const route of englishRoutes) {
    const html = markup(await getPage(route));
    assert.doesNotMatch(html, portugueseLeaks, `Texto PT vazou em ${route}`);
    if (route !== "/en" && route !== "/en/curriculo") {
      assert.ok(html.includes('aria-roledescription="carousel"'), `Carrossel EN sem locale em ${route}`);
      assert.ok(html.includes('href="#context"'), `Âncora EN ausente em ${route}`);
    }
  }

  const readi = await getPage("/en/projetos/consolidacao-arquitetural");
  assert.ok(readi.includes("<title>READI platform modernization | Eloan Ferreira</title>"));
  assert.match(readi, /<meta property="og:title" content="READI platform modernization"/);
  assert.match(readi, /<meta name="twitter:title" content="READI platform modernization"/);
  const caseSchema = readi.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(caseSchema, "JSON-LD do case ausente");
  const structuredData = JSON.parse(caseSchema[1]);
  assert.equal(structuredData["@graph"][0].name, "READI platform modernization");
  assert.equal(structuredData["@graph"][1].itemListElement[0].name, "Portfolio");

  for (const route of englishRoutes) {
    const expectedPortuguesePath = route.replace(/^\/en(?=\/|$)/, "") || "/";
    const html = markup(await getPage(route));
    const toggle = [...html.matchAll(/<a\b[^>]*>/g)]
      .map(([anchor]) => anchor)
      .find((anchor) => anchor.includes('aria-label="View Portuguese version"'));
    assert.ok(toggle?.includes(`href="${expectedPortuguesePath}"`), `Alternância de idioma não preservou a página: ${route}`);
  }
});

test("um slug inexistente retorna 404", async () => {
  const response = await fetch(`${baseUrl}/projetos/projeto-inexistente`);
  assert.equal(response.status, 404);
  const html = markup(await response.text());
  assert.ok(html.includes("Este endereço não está no portfólio."));
  assert.ok(html.includes('href="/#projetos"'));
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
  for (const route of ["/", "/en"]) {
    const page = markup(await getPage(route));
    const hero = page.match(/<section id="(?:inicio|intro)"[\s\S]*?<\/section>/)?.[0];
    assert.ok(hero, `Hero ausente em ${route}`);
    assert.doesNotMatch(hero, /Aberto a oportunidades|Open to opportunities|data-assembly="badge"/);
  }
});

test("o tema inicial é claro e respeita uma preferência escura salva", async () => {
  const html = await getPage("/");
  assert.doesNotMatch(html, /<html\b[^>]*class="[^"]*\bdark\b[^"]*"/);
  assert.match(html, /if \(saved === 'dark'\)/);
  assert.doesNotMatch(html, /var prefersDark = window\.matchMedia/);
});

test("a preferência para ocultar o HUD da Netlify é aplicada no carregamento do site", async () => {
  const html = await getPage("/");
  assert.match(html, /id="hide-netlify-hud"/);
  assert.match(html, /localStorage\.setItem\('nl-hud:public:v1', 'hidden'\)/);
});
