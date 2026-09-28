import { NavItem } from "@/types/navigation";

export const NAVIGATION_ITEMS: readonly NavItem[] = [
  { label: "Início", href: "/#inicio" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Tecnologias", href: "/#tecnologias" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
] as const;
