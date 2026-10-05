export type Locale = "pt" | "en";

export const DEFAULT_LOCALE: Locale = "pt";

export function isLocale(value: string | undefined): value is Locale {
  return value === "pt" || value === "en";
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
  if (href.startsWith("/en")) return href;
  if (href.startsWith("/")) return `/en${href}`;
  return href;
}
