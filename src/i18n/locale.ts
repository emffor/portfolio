export type Locale = "pt" | "en";

const ENGLISH_ANCHORS: Readonly<Record<string, string>> = {
  inicio: "intro",
  sobre: "about",
  projetos: "projects",
  "projetos-adicionais": "additional-projects",
  experiencia: "experience",
  tecnologias: "technologies",
  contato: "contact",
  resumo: "summary",
  "resumo-title": "summary-title",
  atuacao: "role",
  entregas: "deliverables",
  "entregas-title": "deliverables-title",
  contexto: "context",
  solucao: "solution",
  desafios: "challenges",
  arquitetura: "architecture",
  decisoes: "decisions",
  limites: "limits",
  telas: "screens",
};

export function localizedId(id: string, locale: Locale): string {
  return locale === "en" ? (ENGLISH_ANCHORS[id] ?? id) : id;
}

/**
 * Seleciona o texto no idioma ativo, com fallback para o português.
 */
export function tx(locale: Locale, pt: string, en?: string): string {
  if (locale === "en") return en ?? pt;
  return pt;
}

/**
 * Seleciona a lista no idioma ativo, com fallback para o português.
 */
export function txList(
  locale: Locale,
  pt: readonly string[],
  en?: readonly string[]
): readonly string[] {
  if (locale === "en") return en ?? pt;
  return pt;
}

/**
 * Prefixa rotas internas com /en quando o locale é inglês.
 * URLs externas e rotas já prefixadas passam intactas.
 */
export function localizedHref(href: string, locale: Locale): string {
  if (locale === "pt") return href;
  if (href.startsWith("http://") || href.startsWith("https://")) return href;

  const hashIndex = href.indexOf("#");
  const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const anchor = hashIndex === -1 ? undefined : href.slice(hashIndex + 1);
  const englishPath =
    path === "/en" || path.startsWith("/en/")
      ? path
      : path === "/" || path === ""
        ? "/en"
        : path.startsWith("/")
          ? `/en${path}`
          : path;

  return anchor
    ? `${englishPath}#${localizedId(anchor, locale)}`
    : englishPath;
}
