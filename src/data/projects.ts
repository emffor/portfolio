import { Project } from "@/types/project";

export const PROJECTS: readonly Project[] = [
  {
    title: "LaFlora Agro",
    slug: "laflora-agro",
    category: "SaaS Multiempresa",
    featured: true,
    shortDescription:
      "Sistema SaaS multiempresa para homologação e gestão de fornecedores agropecuários.",
    fullDescription:
      "Plataforma SaaS multiempresa para homologação e gestão de fornecedores agropecuários, com fluxo de homologação por estados, categorização de fornecedores e governança de conformidade socioambiental em cadeias de suprimentos.",
    image: "/images/projects/laflora-agro.svg",
    technologies: [
      "Laravel 11",
      "PHP 8.3",
      "React",
      "TypeScript",
      "Material UI",
      "React Hook Form",
      "Yup",
      "React Router",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Nginx",
      "Laravel Sanctum",
      "Spatie Activitylog",
    ],
    context:
      "Empresas do setor agropecuário lidam com exigências regulatórias e critérios socioambientais ao homologar fornecedores. Processos manuais ou descentralizados elevam o tempo de aprovação e o risco de não conformidade.",
    solution:
      "Aplicação multi-tenant com isolamento de dados por empresa, fluxo de homologação de fornecedores com diferentes estados e categorização, conferência documental, regras de auditoria e painéis gerenciais para apoio à decisão.",
    technicalChallenges: [
      "Isolamento rigoroso de dados multiempresa mantendo performance em consultas relacionais no PostgreSQL.",
      "Modelagem do fluxo de homologação com diferentes estados e categorização de fornecedores.",
      "Comunicação tipada entre a REST API em Laravel e a interface em React com TypeScript.",
      "Auditoria de alterações documentais e de status com Spatie Activitylog.",
      "Autenticação da API com Laravel Sanctum e padronização do ambiente com Docker Compose.",
    ],
    myRole:
      "Planejamento da arquitetura técnica, modelagem das entidades relacionais no PostgreSQL, desenvolvimento dos fluxos de negócio e da REST API em Laravel e construção da interface em React com TypeScript, Material UI, React Hook Form e Yup.",
    screenshots: [],
    architecture: {
      layers: [
        {
          label: "React + TypeScript",
          description: "Interface SPA com Material UI, formulários e roteamento",
        },
        {
          label: "REST API",
          description: "Contrato HTTP tipado entre frontend e backend",
        },
        {
          label: "Laravel / PHP",
          description: "Regras de negócio, homologação e autenticação com Sanctum",
        },
        {
          label: "PostgreSQL",
          description: "Persistência relacional multiempresa com auditoria",
        },
      ],
      infrastructureTitle: "Docker Compose",
      infrastructureServices: ["Frontend", "PHP", "Nginx", "PostgreSQL"],
    },
  },
] as const;

export async function getFeaturedProjects(): Promise<Project[]> {
  return PROJECTS.filter((p) => p.featured);
}

export async function getAllProjects(): Promise<Project[]> {
  return [...PROJECTS];
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return PROJECTS.find((p) => p.slug === slug);
}
