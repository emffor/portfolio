import { Experience } from "@/types/experience";

export const EXPERIENCES: readonly Experience[] = [
  {
    company: "READI",
    role: "Desenvolvedor Full Stack",
    roleEn: "Full Stack Developer",
    period: "Nov/2022 – Atual",
    periodEn: "Nov 2022 – Present",
    location: "Fortaleza/CE",
    featured: true,
    recognition: "Destaque do Ano · 2024 e 2025",
    recognitionEn: "Top Performer of the Year · 2024 and 2025",
    description:
      "Atuação na evolução e modernização de uma plataforma corporativa de alta complexidade, conectando decisões técnicas e arquitetura de backend à operação do produto.",
    descriptionEn:
      "Working on the evolution and modernization of a highly complex corporate platform, connecting backend technical and architecture decisions to product operations.",
    responsibilities: [
      "Consolidação de 11 microsserviços e 11 bancos de dados em uma única base, otimizando a arquitetura e os custos de infraestrutura com Laravel, Docker, SQL Server e PostgreSQL.",
      "Migração de sistema legado de Node.js para Laravel/PHP, com reestruturação de fluxos e regras de negócio essenciais.",
      "Automações em Node.js e Python para autenticação, consultas e validações em portais públicos, com redução de aproximadamente 40% do tempo gasto em processos manuais.",
      "Aplicações web com React e Next.js integradas às APIs REST da plataforma.",
      "Infraestrutura, build e deploy com AWS, Docker e CI/CD.",
      "Integração de APIs de LLMs e AI Agents ao backend.",
      "Code Review e padronização arquitetural com SOLID, Clean Code e Design Patterns.",
    ],
    responsibilitiesEn: [
      "Consolidation of 11 microservices and 11 databases into a single database, optimizing architecture and infrastructure costs with Laravel, Docker, SQL Server, and PostgreSQL.",
      "Migration of a legacy Node.js system to Laravel/PHP, restructuring essential business flows and rules.",
      "Node.js and Python automations for authentication, queries, and validations on public portals, cutting time spent on manual processes by roughly 40%.",
      "Web applications with React and Next.js integrated with the platform's REST APIs.",
      "Infrastructure, build, and deploy with AWS, Docker, and CI/CD.",
      "Integration of LLM and AI agent APIs into the backend.",
      "Code review and architectural standardization with SOLID, Clean Code, and Design Patterns.",
    ],
    resumeResponsibilities: [
      "Otimizei a arquitetura e custos de infraestrutura ao unificar 11 microsserviços e 11 bancos de dados em uma única base, utilizando Laravel, Docker, SQL Server e PostgreSQL.",
      "Aumentei a estabilidade e performance do backend migrando o sistema legado de Node.js para Laravel/PHP, reestruturando fluxos e regras de negócio essenciais.",
      "Elevei o padrão de qualidade técnica do time conduzindo revisões de PRs e padronização arquitetural com foco em SOLID, Clean Code e Design Patterns.",
      "Melhorei a experiência de uso e entrega de interfaces construindo novas aplicações web com React e Next.js, integradas às APIs REST da plataforma.",
      "Criei automações em Node.js e Python para autenticação, consultas e validações em portais públicos, reduzindo em cerca de 40% o tempo gasto em processos manuais.",
      "Atuo na evolução da infraestrutura e automação de build e deploy utilizando AWS, Docker e CI/CD.",
      "Otimizei a análise de dados e fluxos operacionais integrando APIs de LLMs e AI Agents diretamente ao backend da aplicação.",
    ],
    resumeResponsibilitiesEn: [
      "Optimized architecture and infrastructure costs by unifying 11 microservices and 11 databases into a single database, using Laravel, Docker, SQL Server, and PostgreSQL.",
      "Increased backend stability and performance by migrating the legacy Node.js system to Laravel/PHP, restructuring essential business flows and rules.",
      "Raised the team's technical quality bar by leading PR reviews and architectural standardization focused on SOLID, Clean Code, and Design Patterns.",
      "Improved UX and interface delivery by building new web applications with React and Next.js, integrated with the platform's REST APIs.",
      "Built Node.js and Python automations for authentication, queries, and validations on public portals, cutting time spent on manual processes by about 40%.",
      "Own infrastructure evolution and build/deploy automation using AWS, Docker, and CI/CD.",
      "Optimized data analysis and operational workflows by integrating LLM and AI agent APIs directly into the application's backend.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Node.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "SQL Server",
      "Docker",
      "AWS",
    ],
    relatedLinks: [
      {
        label: "Ver case da consolidação",
        labelEn: "See the consolidation case",
        url: "/projetos/consolidacao-arquitetural",
        type: "product",
      },
      {
        label: "READI",
        url: "https://readi.com.br/",
        type: "company",
      },
    ],
  },
  {
    company: "Velty",
    role: "Desenvolvedor Full Stack",
    roleEn: "Full Stack Developer",
    period: "Mai/2022 – Nov/2022",
    periodEn: "May 2022 – Nov 2022",
    location: "Natal/RN",
    description:
      "Desenvolvimento de painéis web e aplicativos mobile para clientes do setor de beleza.",
    descriptionEn:
      "Development of web dashboards and mobile apps for beauty-industry clients.",
    responsibilities: [
      "Integração de módulos de estoque, compras e controle financeiro.",
      "Evolução das aplicações e integração com serviços em Azure.",
    ],
    responsibilitiesEn: [
      "Integration of inventory, purchasing, and financial control modules.",
      "Application evolution and integration with Azure services.",
    ],
    resumeResponsibilities: [
      "Desenvolvi painéis web e aplicativos mobile para clientes do setor de beleza, utilizando React, React Native, Tailwind CSS e Azure.",
      "Centralizei a gestão de estoque, compras e controle financeiro por meio da integração de módulos críticos da plataforma.",
      "Atuei na evolução das aplicações e integração com serviços em Azure, garantindo suporte aos fluxos operacionais da plataforma.",
    ],
    resumeResponsibilitiesEn: [
      "Built web dashboards and mobile apps for beauty-industry clients using React, React Native, Tailwind CSS, and Azure.",
      "Centralized inventory, purchasing, and financial control management by integrating the platform's critical modules.",
      "Evolved the applications and integrated Azure services, supporting the platform's operational flows.",
    ],
    technologies: ["React", "React Native", "Tailwind CSS", "Azure"],
    relatedLinks: [
      {
        label: "Conhecer a empresa",
        labelEn: "Visit the company site",
        url: "https://velty.com.br/",
        type: "company",
      },
    ],
  },
  {
    company: "Nestec",
    role: "Desenvolvedor Full Stack",
    roleEn: "Full Stack Developer",
    period: "Jan/2022 – Jun/2022",
    periodEn: "Jan 2022 – Jun 2022",
    location: "Fortaleza/CE",
    description:
      "Atuação em uma solução para o CREA-CE envolvendo mapeamento geográfico dinâmico para apoiar processos de fiscalização.",
    descriptionEn:
      "Work on a solution for CREA-CE involving dynamic geographic mapping to support inspection processes.",
    responsibilities: [
      "Implementação de mapeamento geográfico dinâmico usando Google Maps API.",
    ],
    responsibilitiesEn: [
      "Implementation of dynamic geographic mapping using the Google Maps API.",
    ],
    resumeResponsibilities: [
      "Aprimorei a fiscalização e gestão de pedidos do CREA-CE implementando mapeamento geográfico dinâmico via Google Maps API, utilizando React Native, TypeScript, Node.js e Docker.",
    ],
    resumeResponsibilitiesEn: [
      "Improved CREA-CE inspection and order management by implementing dynamic geographic mapping via the Google Maps API, using React Native, TypeScript, Node.js, and Docker.",
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
    roleEn: "Full Stack Developer",
    period: "Abr/2021 – Mai/2022",
    periodEn: "Apr 2021 – May 2022",
    location: "Fortaleza/CE",
    description:
      "Desenvolvimento do zero de uma plataforma ERP web/mobile em tempo real.",
    descriptionEn:
      "Development from scratch of a real-time web/mobile ERP platform.",
    responsibilities: [
      "Automação dos processos comerciais e operacionais da empresa.",
    ],
    responsibilitiesEn: [
      "Automation of the company's commercial and operational processes.",
    ],
    resumeResponsibilities: [
      "Automatizei 100% dos processos comerciais e operacionais da empresa desenvolvendo do zero uma plataforma ERP web/mobile em tempo real com NestJS, React Native, PostgreSQL e AWS.",
    ],
    resumeResponsibilitiesEn: [
      "Automated 100% of the company's commercial and operational processes by developing a real-time web/mobile ERP platform from scratch with NestJS, React Native, PostgreSQL, and AWS.",
    ],
    technologies: ["NestJS", "React Native", "PostgreSQL", "AWS"],
  },
  {
    company: "Data Business",
    role: "Desenvolvedor Full Stack",
    roleEn: "Full Stack Developer",
    period: "Set/2019 – Dez/2019",
    periodEn: "Sep 2019 – Dec 2019",
    location: "Fortaleza/CE",
    description: "Atuação em sistemas legados.",
    descriptionEn: "Work on legacy systems.",
    responsibilities: [
      "Otimização de consultas SQL complexas em sistemas legados.",
      "Integração de APIs externas.",
    ],
    responsibilitiesEn: [
      "Optimization of complex SQL queries in legacy systems.",
      "External API integrations.",
    ],
    resumeResponsibilities: [
      "Melhorei o tempo de resposta e a estabilidade de sistemas legados otimizando consultas SQL complexas e integrando APIs externas via JavaScript e GeneXus.",
    ],
    resumeResponsibilitiesEn: [
      "Improved legacy systems response time and stability by optimizing complex SQL queries and integrating external APIs with JavaScript and GeneXus.",
    ],
    technologies: ["JavaScript", "GeneXus", "SQL"],
  },
] as const;

export async function getExperiences(): Promise<Experience[]> {
  return [...EXPERIENCES];
}
