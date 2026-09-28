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
  {
    title: "Vidora",
    slug: "vidora",
    category: "Full Stack / Microsserviços",
    featured: true,
    shortDescription:
      "Plataforma Full Stack para descoberta, pesquisa e gerenciamento de vídeos, construída com arquitetura de microsserviços.",
    fullDescription:
      "Aplicação Full Stack estruturada em microsserviços, com API Gateway como ponto único de entrada e serviços independentes responsáveis por autenticação, vídeos e favoritos. O projeto demonstra separação de responsabilidades, integração com API externa, persistência isolada, comunicação entre serviços e testes automatizados.",
    image: "/images/projects/vidora.svg",
    technologies: [
      "TypeScript",
      "Express 5",
      "PostgreSQL 15",
      "Docker",
      "Docker Compose",
      "Jest",
      "ts-jest",
      "REST",
      "JSON",
      "Vite",
      "YouTube Data API v3",
      "Swagger / OpenAPI",
      "pg",
      "cors",
      "dotenv",
    ],
    githubUrl: "https://github.com/emffor/vidora",
    context:
      "Construir uma aplicação Full Stack capaz de autenticar usuários, consumir uma API externa de vídeos e manter favoritos individuais, mantendo responsabilidades e persistência isoladas entre diferentes serviços.",
    solution:
      "Frontend em Vite e TypeScript comunicando-se por HTTP/REST em JSON exclusivamente com o API Gateway, que atua como ponto único de entrada e encaminha as requisições aos serviços internos: Auth Service para registro, login e autenticação com Bearer; Video Service para pesquisa e consulta de vídeos com integração à YouTube Data API v3 e normalização das respostas externas; Favorites Service para adicionar, remover, listar e verificar favoritos com persistência independente. Chamadas entre serviços com timeout configurado e dois bancos PostgreSQL separados, um por serviço com estado.",
    technicalChallenges: [
      "Isolar responsabilidades e persistência entre serviços mantendo a comunicação distribuída compreensível.",
      "Integrar a YouTube Data API v3 normalizando respostas externas para o contrato interno da aplicação.",
      "Propagar autenticação Bearer do gateway aos serviços internos com timeout nas chamadas.",
      "Manter dois bancos PostgreSQL independentes, um para autenticação e outro para favoritos.",
      "Cobrir fluxos distribuídos com testes automatizados usando Jest e ts-jest.",
    ],
    technicalHighlights: [
      "Arquitetura de microsserviços com API Gateway como ponto único de entrada.",
      "TypeScript strict em todos os serviços e no frontend.",
      "Comunicação HTTP/REST em JSON com timeout entre serviços.",
      "Integração com YouTube Data API v3 com normalização via Adapter.",
      "PostgreSQL isolado por serviço: vidora_auth e vidora_favoritos.",
      "Autenticação JWT com Bearer em todas as rotas protegidas.",
      "Testes automatizados com Jest e ts-jest.",
      "Ambiente completo em Docker Compose e documentação com Swagger/OpenAPI.",
      "Padrões Repository, Service, Controller, Factory e Adapter no backend.",
    ],
    decisions: [
      {
        title: "Microsserviços",
        benefit:
          "Isolamento de responsabilidades e possibilidade de evolução independente.",
        cost: "Maior complexidade operacional e comunicação distribuída.",
      },
      {
        title: "REST",
        benefit: "Comunicação simples e explícita.",
        cost: "Acoplamento temporal entre serviços.",
      },
      {
        title: "Banco por serviço",
        benefit: "Isolamento de dados.",
        cost: "Maior complexidade operacional.",
      },
      {
        title: "Express",
        benefit: "Controle explícito e arquitetura leve.",
        cost: "Mais configuração manual.",
      },
    ],
    authNote:
      "A autenticação implementa JWT manualmente com HMAC-SHA256 e Base64Url, e as senhas utilizam SHA-256 com salt aleatório. Essa implementação tem finalidade de estudo do mecanismo e não é recomendada para produção, onde seriam preferíveis soluções consolidadas e algoritmos adequados para hashing de senha, como Argon2 ou bcrypt, além de bibliotecas mantidas para JWT.",
    myRole:
      "Desenvolvimento Full Stack do projeto: definição da arquitetura, desenvolvimento do frontend, dos serviços backend, do API Gateway, da comunicação entre serviços, da autenticação, da persistência, da integração com API externa, dos testes, do ambiente Docker e da documentação da API.",
    screenshots: [],
    architecture: {
      layers: [
        {
          label: "Frontend (Vite + TypeScript)",
          description: "Descoberta, pesquisa e gerenciamento de vídeos",
        },
        {
          label: "HTTP / REST",
          description: "Comunicação em JSON com o ponto único de entrada",
        },
        {
          label: "API Gateway :3000",
          description: "Ponto único de entrada, encaminha aos serviços internos",
        },
      ],
      services: [
        {
          name: "Auth Service :3001",
          description: "Registro, login, consulta de usuário e autenticação",
          dependency: "PostgreSQL vidora_auth",
        },
        {
          name: "Video Service :3002",
          description: "Pesquisa, consulta e normalização de vídeos",
          dependency: "YouTube Data API v3",
        },
        {
          name: "Favorites Service :3003",
          description: "Adicionar, remover, listar e verificar favoritos",
          dependency: "PostgreSQL vidora_favoritos",
        },
      ],
      infrastructureTitle: "Docker Compose",
      infrastructureServices: [
        "Frontend",
        "API Gateway",
        "Auth Service",
        "Video Service",
        "Favorites Service",
        "PostgreSQL",
      ],
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
