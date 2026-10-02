import { NavItem } from "@/types/navigation";

export const NAVIGATION_ITEMS: readonly NavItem[] = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Tecnologias", href: "/#tecnologias" },
  { label: "Contato", href: "/#contato" },
  { label: "Currículo", href: "/curriculo" },
] as const;
