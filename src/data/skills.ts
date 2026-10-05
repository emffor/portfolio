import { SkillArea } from "@/types/profile";

export const SKILL_AREAS: readonly SkillArea[] = [
  {
    title: "Backend & APIs",
    titleEn: "Backend & APIs",
    icon: "laravel",
    description:
      "Desenvolvimento de APIs REST, regras de negócio e modernização de legado com Laravel/PHP, Node.js e Python.",
    descriptionEn:
      "REST API development, business rules, and legacy modernization with Laravel/PHP, Node.js, and Python.",
    items: [
      "Laravel",
      "PHP 8.2+",
      "Node.js",
      "TypeScript",
      "Python",
      "REST APIs",
    ],
    itemsEn: ["Laravel", "PHP 8.2+", "Node.js", "TypeScript", "Python", "REST APIs"],
    evidence: {
      label: "API e integrações no Investidor",
      labelEn: "API and integrations in Investidor",
      href: "/projetos/investidor#solucao",
    },
  },
  {
    title: "Dados & Infraestrutura",
    titleEn: "Data & Infrastructure",
    icon: "database",
    description:
      "Modelagem relacional, unificação e migração de bases heterogêneas, Docker e deploys em nuvem.",
    descriptionEn:
      "Relational modeling, unification and migration of heterogeneous databases, Docker, and cloud deploys.",
    items: [
      "PostgreSQL",
      "SQL Server",
      "Redis",
      "Docker",
      "AWS",
      "CI/CD",
    ],
    itemsEn: ["PostgreSQL", "SQL Server", "Redis", "Docker", "AWS", "CI/CD"],
    evidence: {
      label: "Migração de dados na READI",
      labelEn: "Data migration at READI",
      href: "/projetos/consolidacao-arquitetural#contexto",
    },
  },
  {
    title: "Arquitetura & Qualidade",
    titleEn: "Architecture & Quality",
    icon: "architecture",
    description:
      "Monólito modular, microsserviços distribuídos, SOLID, Clean Code e testes de regressão.",
    descriptionEn:
      "Modular monolith, distributed microservices, SOLID, Clean Code, and regression testing.",
    items: [
      "Monólito Modular",
      "Microsserviços",
      "SOLID & Clean Code",
      "Design Patterns",
      "Code Review",
      "Testes Automatizados",
    ],
    itemsEn: ["Modular monolith", "Microservices", "SOLID & Clean Code", "Design Patterns", "Code Review", "Automated testing"],
    evidence: {
      label: "Decisões na modernização da READI",
      labelEn: "Decisions in the READI modernization",
      href: "/projetos/consolidacao-arquitetural#decisoes",
    },
  },
  {
    title: "Frontend & Interfaces",
    titleEn: "Frontend & Interfaces",
    icon: "react",
    description:
      "Dashboards operacionais, mapas em canvas interativo e SPAs responsivas com ecossistema React.",
    descriptionEn:
      "Operational dashboards, interactive canvas maps, and responsive SPAs with the React ecosystem.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 Canvas",
    ],
    itemsEn: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 Canvas"],
    evidence: {
      label: "Mapa de pátio no Rastro Florestal",
      labelEn: "Yard map in Rastro Florestal",
      href: "/projetos/rastro-florestal#telas",
    },
  },
  {
    title: "IA & Automações",
    titleEn: "AI & Automation",
    icon: "ai",
    description:
      "Automação de rotinas corporativas e integração de APIs de LLMs e AI Agents em fluxos de backend.",
    descriptionEn:
      "Corporate routine automation and integration of LLM and AI agent APIs into backend flows.",
    items: [
      "AI Agents",
      "APIs de LLMs",
      "Automação de Portais",
      "Python Scripting",
    ],
    itemsEn: ["AI Agents", "LLM APIs", "Portal automation", "Python scripting"],
    evidence: {
      label: "Automações na experiência profissional",
      labelEn: "Automations in professional experience",
      href: "/#experiencia",
    },
  },
] as const;
