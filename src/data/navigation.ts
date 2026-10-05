import { NavItem } from "@/types/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

export const NAVIGATION_ITEMS: readonly NavItem[] = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Tecnologias", href: "/#tecnologias" },
  { label: "Contato", href: "/#contato" },
  { label: "Currículo", href: "/curriculo" },
] as const;

export function getNavigationItems(locale: Locale = "pt"): readonly NavItem[] {
  if (locale === "pt") return NAVIGATION_ITEMS;
  return getDictionary("en").nav;
}
