export type Locale = "pt" | "en";

export const DEFAULT_LOCALE: Locale = "pt";

export function isLocale(value: string | undefined): value is Locale {
  return value === "pt" || value === "en";
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
