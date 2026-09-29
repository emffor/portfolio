import { Project, ProjectKind } from "@/types/project";

export const PROJECT_KIND_LABELS: Record<ProjectKind, string> = {
  product: "Produto",
  modernization: "Modernização & Arquitetura",
  "technical-study": "Estudo técnico",
};

const FEATURED_KIND_ORDER: Record<ProjectKind, number> = {
  product: 0,
  modernization: 1,
  "technical-study": 2,
};

export function getProjectKindLabel(kind: ProjectKind): string {
  return PROJECT_KIND_LABELS[kind];
}

export const PROJECTS: readonly Project[] = [
  {
    title: "Rastro Florestal",
    slug: "rastro-florestal",
    kind: "product",
    category: "SaaS Multiempresa",
    featured: true,
    status: "Demonstração online disponível",
    shortDescription:
      "SaaS multi-empresa para madeireiras com conformidade DOF/IBAMA, estoque duplo e mapa visual de pátio.",
    fullDescription:
      "SaaS multi-empresa para madeireiras e serrarias reguladas pelo IBAMA. Une conformidade legal do DOF (Documento de Origem Florestal) com a operação real de pátio: controla saldo legal em m³ e estoque físico em peças simultaneamente, com mapa visual do pátio em canvas, movimentações auditáveis e relatórios para fiscalização.",
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
    brief: [
      {
        label: "Problema",
        text: "Empresas madeireiras sofriam autuações por controlar o DOF em planilhas desconectadas do pátio real, sem conciliação confiável entre volume legal (m³) e peças físicas.",
      },
      {
        label: "Decisão",
        text: "Estoque duplo sincronizado com débito casado por volume unitário, mapa de pátio interativo em canvas e multi-tenancy com RBAC granular.",
      },
      {
        label: "Trade-off",
        text: "Maior complexidade nas validações de cada movimentação para manter a consistência entre estoque legal, estoque físico e relatórios.",
      },
      {
        label: "Entrega",
        text: "Consulta centralizada de saldos, mapa do pátio e histórico de movimentações para apoiar a conciliação de estoque e a preparação de relatórios.",
      },
    ],
    context:
      "Madeireiras e serrarias reguladas pelo IBAMA operavam com divergências frequentes entre o saldo do DOF do órgão ambiental e o estoque físico real. O controle disperso em planilhas gerava passivo jurídico, risco de multas e lentidão operacional.",
    solution:
      "No backend em Laravel, implementei estoque duplo (m³ x peças), alocação DOF-lote, registro de auditoria com Spatie Activity Log e multi-tenancy com RBAC.\n\nNo frontend em React e TypeScript, construí um mapa interativo de pátio em canvas (React-Konva) com drag-and-drop, detecção de colisão e fluxos de expedição com preview.",
    technicalChallenges: [
      "Sincronizar o estoque duplo com débito casado entre saldo legal (m³) e físico (peças) via volume unitário.",
      "Modelar a alocação DOF-lote com operações atômicas de alocar, transferir, dar baixa e remover.",
      "Manter movimentações imutáveis (Entrada, Transferência, Baixa, Ajuste) com preview de saída e consumo por fonte.",
      "Implementar multi-tenancy real com RBAC granular (Master > Admin > Usuário) e permissões por recurso.",
      "Construir o mapa de pátio interativo em canvas com drag-and-drop, detecção de colisão e áreas bloqueadas.",
      "Gerenciar anexos polimórficos em S3 com cota mensal e URL temporária cacheada no Redis.",
    ],
    technicalHighlights: [
      "Estoque duplo sincronizado legal (m³) x físico (peças).",
      "Mapa de pátio interativo em canvas com drag-and-drop e detecção de colisão.",
      "Multi-tenancy com RBAC granular e autorização por política de recurso.",
      "Ofuscação de IDs sequenciais com Hashids e auditoria com Spatie Activity Log.",
      "Respostas de API padronizadas e autenticação com Laravel Sanctum.",
      "Relatórios PDF/Excel de DOF e movimentações prontos para fiscalização.",
    ],
    demoAccess: {
      email: "madeireira@email.com",
      password: "123123",
    },
    sourceNote:
      "O código-fonte é privado e protegido por propriedade intelectual.",
    myRole:
      "Desenvolvimento Full Stack: arquitetura do backend em Laravel (regras de negócio, estoque duplo, alocação DOF-lote, RBAC e relatórios) e frontend em React + TypeScript (dashboard operacional, mapa de pátio em canvas, fluxos de saída e painel administrativo).",
    screenshots: [
      {
        src: "/assets/rastro-florestal-movimentacoes.png",
        alt: "Histórico de movimentações com 8 entradas, volume filtrado e relatórios em PDF e Excel",
        caption:
          "Movimentações com dados de demonstração: histórico imutável de entradas, filtros por tipo e relatórios em PDF e Excel.",
      },
      {
        src: "/assets/rastro-florestal-movimentacoes-dimencao.png",
        alt: "Peças dimensionadas no Lote 2 com 3.500 peças e volumes por produto",
        caption:
          "Estoque físico no lote: 3.500 peças distribuídas por produto dimensionado, com volume individual em m³.",
      },
      {
        src: "/assets/rastro-florestal-patio-lote-descricao.png",
        alt: "Alocações de DOF no Lote 2 com 22,5 m³ distribuídos em 4 documentos",
        caption:
          "Estoque legal no lote: 22,5 m³ vinculados a 4 DOFs, com status, ocupação e itens com peças.",
      },
      {
        src: "/assets/rastro-florestal-produto-dimensionado.png",
        alt: "Lista de produtos dimensionados com espécies, dimensões e volume unitário em metros cúbicos",
        caption:
          "Cadastro de produtos dimensionados: espécies vinculadas e volume unitário utilizado na conversão entre peças e metros cúbicos.",
      },
      {
        src: "/assets/rastro-florestal-patio-lote.png",
        alt: "Mapa do Pátio Cinza em modo de edição, com três lotes posicionados no canvas",
        caption:
          "Edição do layout do pátio: posicionamento e rotação de lotes no canvas.",
      },
      {
        src: "/assets/rastro-florestal-patio-cinza.png",
        alt: "Listagem de pátios com filtros, área total e acesso ao mapa do Pátio Cinza",
        caption:
          "Listagem de pátios: consulta de áreas, quantidade de lotes, filtros e acesso ao mapa de cada pátio.",
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
  {
    title: "Consolidação de Microsserviços e Modernização",
    slug: "consolidacao-arquitetural",
    kind: "modernization",
    category: "Arquitetura & Engenharia de Dados",
    featured: true,
    status: "Arquitetura consolidada e sustentada em produção na READI",
    shortDescription:
      "Unificação de 11 microsserviços e 11 bancos de dados independentes em um monólito modular em Laravel/PHP, reduzindo custos de nuvem e eliminando gargalos de consistência.",
    fullDescription:
      "Reestruturação e consolidação profunda da plataforma corporativa da READI. O ecossistema anterior era distribuído em 11 microsserviços em Node.js com 11 bancos de dados independentes (PostgreSQL e SQL Server). A complexidade operacional desnecessária gerava sobrecarga de manutenção, latência e custo elevado. Liderei a estratégia e execução da unificação desses serviços em uma arquitetura modular coesa em Laravel/PHP, garantindo integridade de dados e sustentação contínua.",
    image: "/assets/consolidacao-readi.svg",
    technologies: [
      "Laravel 11",
      "PHP 8.2",
      "PostgreSQL",
      "SQL Server",
      "Docker",
      "Node.js",
      "CI/CD",
      "AWS",
      "REST APIs",
      "SOLID",
      "Clean Architecture",
    ],
    brief: [
      {
        label: "Problema",
        text: "11 microsserviços e 11 bancos heterogêneos geravam alta latência em chamadas HTTP em cadeia, custos desproporcionais de servidores e inconsistências de dados em processos críticos.",
      },
      {
        label: "Decisão",
        text: "Consolidação dos serviços em um monólito modular estruturado em Laravel/PHP com PostgreSQL e SQL Server, migrando regras de negócio legadas de Node.js.",
      },
      {
        label: "Trade-off",
        text: "Ganho substancial em simplicidade operacional, transações ACID reais e redução de custos de nuvem em troca de exigir disciplina rigorosa de limites de contexto e modularidade no código.",
      },
      {
        label: "O que eu faria diferente",
        text: "Definiria contratos tipados de dados e testes de regressão de borda mais cedo no processo de migração para acelerar a validação das regras legadas de Node.js.",
      },
    ],
    context:
      "A plataforma corporativa operava com 11 microsserviços em Node.js e 11 bancos de dados isolados. O modelo distribuído gerava custos elevados de instâncias de nuvem, chamadas encadeadas com alta latência de rede, lentidão em diagnósticos de produção e impossibilidade de transações ACID nativas entre dados interligados.",
    solution:
      "Desenhei e executei a consolidação da plataforma: unificação dos modelos de dados em uma base relacional sólida, migração estruturada dos fluxos de regras de negócio de Node.js para Laravel/PHP com arquitetura em camadas (Form Requests, Services, Repositories), padronização com SOLID/Clean Code e criação de esteiras de CI/CD automatizadas com Docker.",
    technicalChallenges: [
      "Mapear e migrar 11 schemas de banco heterogêneos (SQL Server e PostgreSQL) para uma estrutura relacional unificada sem perda de dados históricos.",
      "Executar a migração de dados sem interrupção dos processos de negócio dos clientes em produção.",
      "Reescrever e validar regras de negócio complexas do ecossistema legado Node.js para Laravel.",
      "Manter isolamento lógico e fronteiras de domínio bem definidas dentro do novo monólito modular para evitar acoplamento desordenado.",
      "Eliminar dependências circulares e chamadas HTTP síncronas entre domínios da aplicação.",
    ],
    technicalHighlights: [
      "Redução expressiva nos custos mensais de servidores e licenças de banco de dados.",
      "Eliminação de latência de rede inter-serviços com execução de processos em memória e transações ACID nativas.",
      "Arquitetura modular em camadas com separação clara de domínios, services e repositórios.",
      "Ambiente 100% conteinerizado com Docker e pipelines de CI/CD para deploy com zero atrito.",
      "Reconhecimento profissional como Destaque do Ano da empresa em 2024 e 2025 pelo impacto direto no produto e na operação.",
    ],
    decisions: [
      {
        title: "Monólito Modular vs Microsserviços Distribuídos",
        benefit:
          "Eliminação da sobrecarga operacional, observabilidade centralizada, transações ACID e fim da latência de rede.",
        cost: "Exige rigor técnico contínuo em Code Review e Clean Architecture para evitar que limites de domínio se degradem com o tempo.",
      },
      {
        title: "Consolidação de Bancos de Dados",
        benefit:
          "Integridade referencial real, joins nativos de alta performance e fim da necessidade de conciliações assíncronas.",
        cost: "Complexidade inicial alta no plano de migração, limpeza de dados duplicados e compatibilidade de schemas.",
      },
      {
        title: "Laravel 11 / PHP como Core Backend",
        benefit:
          "Ecossistema maduro com Eloquent ORM, filas, autenticação e validações prontas, acelerando a entrega com estabilidade.",
        cost: "Necessidade de migrar a base de código previamente distribuída em JavaScript/Node.js.",
      },
    ],
    myRole:
      "Responsável técnico pela arquitetura e execução da consolidação: mapeamento dos 11 bancos legados, modelagem da nova base unificada, reescrita dos módulos de negócio de Node.js para Laravel, implementação de testes, padronização de Clean Code/SOLID e condução das janelas de migração em produção.",
    screenshots: [],
    architecture: {
      layers: [
        {
          label: "Frontend Web & Mobile",
          description: "Aplicações em React e interfaces web consumindo APIs REST tipadas",
        },
        {
          label: "API REST Unificada (Laravel 11)",
          description:
            "Camada de domínio modular com Controllers, Form Requests, Services e Repositories",
        },
        {
          label: "Regras de Negócio & Serviços Modulares",
          description:
            "Módulos de autenticação, faturamento, integrações com portais públicos e automações",
        },
        {
          label: "Bancos Consolidados (PostgreSQL / SQL Server)",
          description:
            "Base relacional única com integridade referencial, índices otimizados e transações ACID",
        },
      ],
      infrastructureTitle: "Docker + CI/CD na Nuvem",
      infrastructureServices: [
        "Docker",
        "AWS",
        "CI/CD Automatizado",
        "Nginx",
        "PostgreSQL / SQL Server",
      ],
    },
    sourceNote:
      "Projeto corporativo proprietário da READI — regras de negócio, dados e código-fonte são confidenciais e protegidos por sigilo contratual.",
  },
  {
    title: "Vidora",
    slug: "vidora",
    kind: "technical-study",
    category: "Arquitetura distribuída",
    featured: true,
    status: "Estudo técnico de arquitetura com código aberto no GitHub",
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
      "Frontend SPA em Vanilla TypeScript com roteador via History API, store reativa baseada no padrão Observer e HttpClient com timeout e injeção de Bearer token.\n\nAPI Gateway como ponto único de entrada, encaminhando requisições para autenticação, vídeos e favoritos. O Video Service integra a YouTube Data API v3 e normaliza suas respostas com um Adapter.\n\nAuth Service e Favorites Service possuem bancos PostgreSQL independentes. O Video Service consulta a API externa, sem banco próprio. Os fluxos são cobertos por testes automatizados com Jest.",
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
