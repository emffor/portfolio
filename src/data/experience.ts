import { Experience } from "@/types/experience";

export const EXPERIENCES: readonly Experience[] = [
  {
    company: "READI",
    role: "Desenvolvedor Full Stack",
    period: "Nov/2022 – Atual",
    location: "Fortaleza/CE",
    featured: true,
    recognition: "Destaque do Ano · 2024 e 2025",
    recognitionLabel: "Reconhecimento",
    contextLabel: "Contexto",
    description:
      "Atuação na evolução e modernização de uma plataforma corporativa de alta complexidade.",
    impactLabel: "Impactos",
    responsibilities: [
      "Consolidação de 11 microsserviços e 11 bancos de dados em uma única base, otimizando a arquitetura e os custos de infraestrutura com Laravel, Docker, SQL Server e PostgreSQL.",
      "Migração de sistema legado de Node.js para Laravel/PHP, com reestruturação de fluxos e regras de negócio essenciais.",
      "Automações em Node.js e Python para autenticação, consultas e validações em portais públicos, com redução de aproximadamente 40% do tempo gasto em processos manuais.",
      "Aplicações web com React e Next.js integradas às APIs REST da plataforma.",
      "Infraestrutura, build e deploy com AWS, Docker e CI/CD.",
      "Integração de APIs de LLMs e AI Agents ao backend.",
      "Code Review e padronização arquitetural com SOLID, Clean Code e Design Patterns.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Node.js",
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "SQL Server",
      "PostgreSQL",
      "AWS",
      "Docker",
      "CI/CD",
      "REST APIs",
      "LLMs",
      "AI Agents",
    ],
    relatedLinks: [
      {
        label: "READI",
        url: "https://readi.com.br/",
        type: "product",
      },
      {
        label: "Medipay",
        type: "product",
      },
    ],
  },
  {
    company: "Velty",
    role: "Desenvolvedor Full Stack",
    period: "Mai/2022 – Nov/2022",
    location: "Natal/RN",
    description:
      "Desenvolvimento de painéis web e aplicativos mobile para clientes do setor de beleza.",
    responsibilities: [
      "Integração de módulos de estoque, compras e controle financeiro.",
      "Evolução das aplicações e integração com serviços em Azure.",
    ],
    technologies: ["React", "React Native", "Tailwind CSS", "Azure"],
    relatedLinks: [
      {
        label: "Conhecer a empresa",
        url: "https://velty.com.br/",
        type: "company",
      },
    ],
  },
  {
    company: "Nestec",
    role: "Desenvolvedor Full Stack",
    period: "Jan/2022 – Jun/2022",
    location: "Fortaleza/CE",
    description:
      "Atuação em uma solução para o CREA-CE envolvendo mapeamento geográfico dinâmico para apoiar processos de fiscalização.",
    responsibilities: [
      "Implementação de mapeamento geográfico dinâmico usando Google Maps API.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Docker",
      "Google Maps API",
    ],
    relatedLinks: [
      {
        label: "CREA-CE",
        url: "https://www.creace.org.br/",
        type: "client",
      },
    ],
  },
  {
    company: "SN Representação",
    role: "Desenvolvedor Full Stack",
    period: "Abr/2021 – Mai/2022",
    location: "Fortaleza/CE",
    description:
      "Desenvolvimento do zero de uma plataforma ERP web/mobile em tempo real.",
    responsibilities: [
      "Automação dos processos comerciais e operacionais da empresa.",
    ],
    technologies: ["NestJS", "React Native", "PostgreSQL", "AWS"],
  },
  {
    company: "Data Business",
    role: "Desenvolvedor Full Stack",
    period: "Set/2019 – Dez/2019",
    location: "Fortaleza/CE",
    description: "Atuação em sistemas legados.",
    responsibilities: [
      "Otimização de consultas SQL complexas em sistemas legados.",
      "Integração de APIs externas.",
    ],
    technologies: ["JavaScript", "GeneXus", "SQL"],
  },
] as const;

export async function getExperiences(): Promise<Experience[]> {
  return [...EXPERIENCES];
}
