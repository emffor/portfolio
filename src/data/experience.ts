import { Experience } from "@/types/experience";

export const EXPERIENCES: readonly Experience[] = [
  {
    company: "READI",
    role: "Desenvolvedor Full Stack",
    period: "Nov/2022 – Atual",
    location: "Fortaleza/CE",
    featured: true,
    recognition: "Destaque do Ano · 2024 e 2025",
    description:
      "Atuação na evolução arquitetural e modernização de uma plataforma de alta complexidade, do backend à infraestrutura, automações e integrações com IA.",
    responsibilities: [
      "Unificação de 11 microsserviços e 11 bancos de dados em uma única base, otimizando a arquitetura e os custos de infraestrutura com Laravel, Docker, SQL Server e PostgreSQL.",
      "Migração de sistema legado de Node.js para Laravel/PHP, com reestruturação de fluxos e regras de negócio essenciais.",
      "Code Review e padronização arquitetural com SOLID, Clean Code e Design Patterns.",
      "Desenvolvimento de aplicações web com React e Next.js integradas às APIs REST da plataforma.",
      "Automações em Node.js e Python para autenticação, consultas e validações em portais públicos, reduzindo em aproximadamente 40% o tempo gasto em processos manuais.",
      "Evolução da infraestrutura e automação de build e deploy com AWS, Docker e CI/CD; integração de APIs de LLMs e AI Agents ao backend.",
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
  },
  {
    company: "Nestec",
    role: "Desenvolvedor Full Stack",
    period: "Jan/2022 – Jun/2022",
    location: "Fortaleza/CE",
    description: "Atuação em solução relacionada ao CREA-CE.",
    responsibilities: [
      "Implementação de mapeamento geográfico dinâmico utilizando Google Maps API.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Docker",
      "Google Maps API",
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
