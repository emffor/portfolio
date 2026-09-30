import { SkillArea } from "@/types/profile";

export const SKILL_AREAS: readonly SkillArea[] = [
  {
    title: "Backend & APIs",
    icon: "laravel",
    description:
      "Desenvolvimento de APIs REST, regras de negócio e modernização de legado com Laravel/PHP, Node.js e Python.",
    items: [
      "Laravel",
      "PHP 8.2+",
      "Node.js",
      "TypeScript",
      "Python",
      "REST APIs",
    ],
    evidence: {
      label: "API e integrações no Investidor",
      href: "/projetos/investidor#solucao",
    },
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
    evidence: {
      label: "Migração de dados na READI",
      href: "/projetos/consolidacao-arquitetural#contexto",
    },
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
    evidence: {
      label: "Decisões na modernização da READI",
      href: "/projetos/consolidacao-arquitetural#decisoes",
    },
  },
  {
    title: "Frontend & Interfaces",
    icon: "react",
    description:
      "Dashboards operacionais, mapas em canvas interativo e SPAs responsivas com ecossistema React.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 Canvas",
    ],
    evidence: {
      label: "Mapa de pátio no Rastro Florestal",
      href: "/projetos/rastro-florestal#telas",
    },
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
    evidence: {
      label: "Automações na experiência profissional",
      href: "/#experiencia",
    },
  },
] as const;
