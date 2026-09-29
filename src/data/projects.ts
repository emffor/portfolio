import { Project, ProjectKind } from "@/types/project";

export const PROJECT_KIND_LABELS: Record<ProjectKind, string> = {
  product: "Produto",
  "technical-study": "Estudo técnico",
};

const FEATURED_KIND_ORDER: Record<ProjectKind, number> = {
  product: 0,
  "technical-study": 1,
};

export function getProjectKindLabel(kind: ProjectKind): string {
  return PROJECT_KIND_LABELS[kind];
}

export const PROJECTS: readonly Project[] = [
  {
    title: "Vidora",
    slug: "vidora",
    kind: "technical-study",
    category: "Arquitetura distribuída",
    featured: true,
    shortDescription:
      "Estudo de arquitetura distribuída para pesquisa de vídeos e favoritos, com API Gateway e serviços independentes.",
    brief: [
      {
        label: "Problema",
        text: "Autenticar usuários, consultar vídeos em uma API externa e manter favoritos individuais, com responsabilidades e persistência isoladas.",
      },
      {
        label: "Decisão",
        text: "API Gateway como ponto único de entrada e serviços separados para autenticação, vídeos e favoritos.",
      },
      {
        label: "Trade-off",
        text: "Isolamento de responsabilidades em troca de maior complexidade operacional e comunicação distribuída.",
      },
      {
        label: "O que eu faria diferente",
        text: "Para produção, usar uma biblioteca JWT mantida e Argon2 ou bcrypt para hashing de senha, em vez da implementação manual feita para estudo.",
      },
    ],
    fullDescription:
      "Aplicação Full Stack estruturada em microsserviços, com API Gateway como ponto único de entrada e serviços independentes responsáveis por autenticação, vídeos e favoritos. O projeto demonstra separação de responsabilidades, integração com API externa, persistência isolada, comunicação entre serviços e testes automatizados.",
    image: "/assets/vidora.png",
    technologies: [
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Docker",
      "Jest",
      "Vite",
      "YouTube Data API",
      "OpenAPI",
    ],
    githubUrl: "https://github.com/emffor/vidora",
    context:
      "Construir uma aplicação Full Stack capaz de autenticar usuários, consumir uma API externa de vídeos e manter favoritos individuais, mantendo responsabilidades e persistência isoladas entre diferentes serviços.",
    solution:
      "Frontend SPA em Vanilla TypeScript (sem frameworks) comunicando-se por HTTP/REST em JSON exclusivamente com o API Gateway, com roteador client-side próprio (History API, rotas protegidas e 404), store reativa com padrão Observer e HttpClient centralizado (fetch nativo, AbortController, timeout e injeção de Bearer). O gateway atua como ponto único de entrada e encaminha as requisições aos serviços internos: Auth Service para registro, login e autenticação com Bearer; Video Service para pesquisa e consulta de vídeos com integração à YouTube Data API v3 e normalização das respostas externas; Favorites Service para adicionar, remover, listar e verificar favoritos com persistência independente. Chamadas entre serviços com timeout configurado e dois bancos PostgreSQL separados, um por serviço com estado.",
    technicalChallenges: [
      "Isolar responsabilidades e persistência entre serviços mantendo a comunicação distribuída compreensível.",
      "Integrar a YouTube Data API v3 normalizando respostas externas para o contrato interno da aplicação.",
      "Propagar autenticação Bearer do gateway aos serviços internos com timeout nas chamadas.",
      "Manter dois bancos PostgreSQL independentes, um para autenticação e outro para favoritos.",
      "Cobrir fluxos distribuídos com testes automatizados usando Jest e ts-jest.",
    ],
    technicalHighlights: [
      "Arquitetura de microsserviços com API Gateway como ponto único de entrada.",
      "TypeScript strict em todos os serviços e no frontend Vanilla (sem frameworks).",
      "Roteador SPA próprio com History API, rotas protegidas e tratamento de 404.",
      "Store reativa com padrão Observer e HttpClient centralizado com timeout.",
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
          label: "Frontend (Vite + Vanilla TypeScript)",
          description: "SPA sem frameworks, roteador próprio e store reativa",
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
  {
    title: "Rastro Florestal",
    slug: "rastro-florestal",
    kind: "product",
    category: "SaaS Multiempresa",
    featured: true,
    shortDescription:
      "SaaS multi-empresa para madeireiras com conformidade DOF/IBAMA, estoque duplo e mapa visual de pátio.",
    fullDescription:
      "SaaS multi-empresa para madeireiras e serrarias reguladas pelo IBAMA. Une conformidade legal do DOF (Documento de Origem Florestal) com operação real de pátio: controla saldo legal em m³ e estoque físico em peças ao mesmo tempo, com mapa visual do pátio, movimentações rastreáveis e relatórios para fiscalização.",
    image: "/assets/rastro-florestal.png",
    technologies: [
      "Laravel 11",
      "PHP 8.2",
      "PostgreSQL 16",
      "Redis 7",
      "React 19",
      "TypeScript",
      "Vite 7",
      "Tailwind CSS 4",
      "React-Konva",
      "Docker",
      "AWS S3",
      "PHPUnit 11",
    ],
    projectUrl: "https://rastrof.netlify.app/",
    context:
      "Empresas madeireiras tomavam multa por controlar o DOF em planilha, com o estoque legal desconectado do estoque físico e sem rastreabilidade pronta para fiscalização.",
    solution:
      "Backend em Laravel com controle de estoque duplo (legal em m³ x físico em peças), alocação DOF-lote, movimentações auditáveis e multi-tenancy por empresa. Frontend em React + TypeScript com dashboard operacional, mapa interativo de pátio em canvas e fluxos de saída com preview.",
    technicalChallenges: [
      "Sincronizar o estoque duplo com débito casado entre saldo legal (m³) e físico (peças) via volume unitário.",
      "Modelar a alocação DOF-lote com operações de alocar, transferir, dar baixa e remover.",
      "Manter movimentações imutáveis (Entrada, Transferência, Baixa, Ajuste) com preview de saída e consumo por fonte.",
      "Implementar multi-tenancy real com RBAC granular (Master > Admin > Usuário) e permissões por recurso.",
      "Construir o mapa de pátio interativo em canvas com drag-and-drop, detecção de colisão e áreas bloqueadas.",
      "Gerenciar anexos polimórficos em S3 com cota mensal e URL temporária cacheada no Redis.",
    ],
    technicalHighlights: [
      "Estoque duplo sincronizado legal x físico.",
      "Mapa de pátio interativo em canvas com drag-and-drop e colisão.",
      "Multi-tenancy real com RBAC granular.",
      "IDs criptografados com Hashids e auditoria com Spatie Activity Log.",
      "Respostas de API padronizadas e autenticação com Laravel Sanctum.",
      "Relatórios PDF/Excel de DOF e movimentações.",
    ],
    demoAccess: {
      email: "madeireira@email.com",
      password: "123123",
    },
    sourceNote:
      "O código-fonte é privado e não é exposto no portfólio.",
    myRole:
      "Desenvolvimento Full Stack: backend em Laravel (regras de negócio, estoque duplo, alocação DOF-lote, RBAC, relatórios PDF/Excel) e frontend em React + TypeScript (dashboard operacional, mapa de pátio em canvas, fluxos de saída e painel administrativo).",
    screenshots: [
      {
        src: "/assets/rastro-florestal-produto-dimensionado.png",
        alt: "Tela de cadastro de produtos dimensionados do Rastro Florestal",
      },
      {
        src: "/assets/rastro-florestal-patio-azul.png",
        alt: "Mapa visual do pátio azul do Rastro Florestal",
      },
    ],
    architecture: {
      layers: [
        {
          label: "React 19 + TypeScript",
          description: "Dashboard operacional, mapa de pátio em canvas e fluxos de saída",
        },
        {
          label: "REST API",
          description: "Contrato HTTP tipado com respostas padronizadas",
        },
        {
          label: "Laravel 11 / PHP",
          description: "Regras de negócio, estoque duplo, RBAC e autenticação com Sanctum",
        },
        {
          label: "PostgreSQL 16 + Redis 7",
          description: "Persistência relacional multi-tenant e cache de URLs temporárias",
        },
      ],
      infrastructureTitle: "Docker + Nginx",
      infrastructureServices: ["Frontend Web", "API", "PostgreSQL", "Redis", "AWS S3"],
    },
  },
] as const;

export async function getFeaturedProjects(): Promise<Project[]> {
  return PROJECTS.filter((project) => project.featured).sort(
    (a, b) => FEATURED_KIND_ORDER[a.kind] - FEATURED_KIND_ORDER[b.kind]
  );
}

export async function getAllProjects(): Promise<Project[]> {
  return [...PROJECTS];
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return PROJECTS.find((p) => p.slug === slug);
}
