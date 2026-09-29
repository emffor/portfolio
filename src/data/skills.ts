import { SkillArea } from "@/types/profile";

export const SKILL_AREAS: readonly SkillArea[] = [
  {
    title: "Backend & APIs",
    icon: "laravel",
    description:
      "Desenvolvimento de APIs REST, regras de negócio e modernização de legado com Laravel/PHP, Node.js e Python.",
    items: [
      "Laravel 11",
      "PHP 8.2+",
      "Node.js",
      "TypeScript",
      "Python",
      "REST APIs",
    ],
  },
  {
    title: "Dados & Infraestrutura",
    icon: "database",
    description:
      "Modelagem relacional, unificação e migração de bases heterogêneas, Docker e deploys em nuvem.",
    items: [
      "PostgreSQL",
      "SQL Server",
      "Redis",
      "Docker",
      "AWS",
      "CI/CD",
    ],
  },
  {
    title: "Arquitetura & Qualidade",
    icon: "architecture",
    description:
      "Monólito modular, microsserviços distribuídos, SOLID, Clean Code e testes de regressão.",
    items: [
      "Monólito Modular",
      "Microsserviços",
      "SOLID & Clean Code",
      "Design Patterns",
      "Code Review",
      "Testes Automatizados",
    ],
  },
  {
    title: "Frontend & Interfaces",
    icon: "react",
    description:
      "Dashboards operacionais, mapas em canvas interativo e SPAs responsivas com ecossistema React.",
    items: [
      "React 19",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 Canvas",
    ],
  },
  {
    title: "IA & Automações",
    icon: "ai",
    description:
      "Automação de rotinas corporativas e integração de APIs de LLMs e AI Agents em fluxos de backend.",
    items: [
      "AI Agents",
      "APIs de LLMs",
      "Automação de Portais",
      "Python Scripting",
    ],
  },
] as const;
