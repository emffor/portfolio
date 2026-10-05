import type { NavItem } from "@/types/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

export function getNavigationItems(locale: Locale = "pt"): readonly NavItem[] {
  return getDictionary(locale).nav;
}
