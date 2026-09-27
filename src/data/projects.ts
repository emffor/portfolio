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
      "Plataforma SaaS multiempresa desenvolvida para centralizar a homologação, gestão de conformidade socioambiental e governança de risco em cadeias de suprimentos agropecuárias.",
    image: "/images/projects/laflora-agro.svg",
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
    context:
      "Empresas do setor agropecuário lidam com rigorosas exigências regulatórias e critérios socioambientais ao homologar fornecedores. Processos manuais ou descentralizados elevavam o tempo de aprovação e o risco de não conformidade.",
    solution:
      "Arquitetura de software multi-tenant com isolamento seguro de dados, fluxos automatizados de conferência documental, regras customizáveis de auditoria e painéis gerenciais focados em agilidade de tomada de decisão.",
    technicalChallenges: [
      "Isolamento rigoroso de dados multi-tenant mantendo performance em consultas complexas no PostgreSQL.",
      "Comunicação estruturada e tipada entre a API Laravel e a interface React com TypeScript.",
      "Auditoria transparente de alterações documentais e status de homologação de fornecedores.",
      "Padronização do ambiente de desenvolvimento e deploy conteinerizado com Docker.",
    ],
    myRole:
      "Planejamento da arquitetura técnica da aplicação, modelagem das entidades relacionais no PostgreSQL, desenvolvimento dos fluxos de negócio em Laravel e construção da experiência de usuário com React e TypeScript.",
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
