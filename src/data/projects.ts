import { Project, ProjectKind } from "@/types/project";
import { projectImageUrl } from "@/lib/storage";

export const PROJECT_KIND_LABELS: Record<ProjectKind, string> = {
  product: "Produto",
  modernization: "Case corporativo",
  "technical-study": "Estudo técnico",
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
    featuredOrder: 0,
    status: "Demonstração online disponível",
    shortDescription:
      "SaaS multiempresa para madeireiras: conciliação de estoque legal e físico, rastreabilidade de DOFs e mapa interativo do pátio.",
    fullDescription:
      "SaaS multi-empresa para madeireiras e serrarias reguladas pelo IBAMA. Une conformidade legal do DOF (Documento de Origem Florestal) com a operação real de pátio: controla saldo legal em m³ e estoque físico em peças simultaneamente, com mapa visual do pátio em canvas, movimentações auditáveis e relatórios para fiscalização.",
    image: projectImageUrl("rastro-florestal", "capa.png"),
    imageAlt: "Dashboard do Rastro Florestal com saldos de DOF, estoque e movimentações por lote",
    imageCaption: "Visão operacional do produto com dados de demonstração. Os volumes exibidos ilustram o fluxo de estoque.",
    primaryTechnologies: ["Laravel", "React", "PostgreSQL", "TypeScript"],
    roleLabel: "Arquitetura e desenvolvimento Full Stack",
    outcomeSummary: "Saldo legal em m³ e estoque físico em peças conectados à operação do pátio.",
    outcomes: [
      {
        title: "Estoque conciliado",
        description: "Controle de volume legal e peças físicas com alocação de DOFs por lote e débito casado nas movimentações.",
      },
      {
        title: "Operação visual",
        description: "Mapa interativo para organizar lotes, consultar ocupação e preparar a expedição com preview de saída.",
      },
      {
        title: "Rastreabilidade",
        description: "Histórico de movimentações, permissões por recurso e relatórios PDF/Excel para apoiar a conferência do estoque.",
      },
    ],
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
    projectUrl: "https://rastro.emfsystems.com.br/",
    brief: [
      {
        label: "Problema",
        text: "O controle do DOF em planilhas desconectadas do pátio dificulta a conciliação entre volume legal (m³) e peças físicas, aumentando o risco de divergências e autuações.",
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
    decisions: [
      {
        title: "Estoque legal e físico no mesmo fluxo",
        benefit: "Cada movimentação relaciona peças e volume unitário, permitindo conferir o saldo do lote e sua origem documental.",
        cost: "Exige validações e operações atômicas para que alocações, transferências e baixas mantenham os dois saldos consistentes.",
      },
      {
        title: "Canvas para o mapa do pátio",
        benefit: "React-Konva permite posicionar e rotacionar lotes em uma representação visual do espaço físico.",
        cost: "O editor precisa tratar colisões, áreas bloqueadas e persistência do posicionamento dos lotes.",
      },
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
        src: projectImageUrl("rastro-florestal", "movimentacoes.png"),
        alt: "Histórico de movimentações com 8 entradas, volume filtrado e relatórios em PDF e Excel",
        caption:
          "Movimentações com dados de demonstração: histórico imutável de entradas, filtros por tipo e relatórios em PDF e Excel.",
      },
      {
        src: projectImageUrl("rastro-florestal", "movimentacoes-dimensao.png"),
        alt: "Peças dimensionadas no Lote 2 com 3.500 peças e volumes por produto",
        caption:
          "Estoque físico no lote: 3.500 peças distribuídas por produto dimensionado, com volume individual em m³.",
      },
      {
        src: projectImageUrl("rastro-florestal", "patio-lote-descricao.png"),
        alt: "Alocações de DOF no Lote 2 com 22,5 m³ distribuídos em 4 documentos",
        caption:
          "Estoque legal no lote: 22,5 m³ vinculados a 4 DOFs, com status, ocupação e itens com peças.",
      },
      {
        src: projectImageUrl("rastro-florestal", "produto-dimensionado.png"),
        alt: "Lista de produtos dimensionados com espécies, dimensões e volume unitário em metros cúbicos",
        caption:
          "Cadastro de produtos dimensionados: espécies vinculadas e volume unitário utilizado na conversão entre peças e metros cúbicos.",
      },
      {
        src: projectImageUrl("rastro-florestal", "patio-lote.png"),
        alt: "Mapa do Pátio Cinza em modo de edição, com três lotes posicionados no canvas",
        caption:
          "Edição do layout do pátio: posicionamento e rotação de lotes no canvas.",
      },
      {
        src: projectImageUrl("rastro-florestal", "patio-cinza.png"),
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
    title: "Modernização da plataforma READI",
    slug: "consolidacao-arquitetural",
    kind: "modernization",
    category: "Arquitetura & Engenharia de Dados",
    featured: true,
    featuredOrder: 1,
    status: "Em produção na READI",
    shortDescription:
      "Consolidação de 11 microsserviços e 11 bancos de dados em um monólito modular Laravel, com migração do legado e sustentação em produção.",
    fullDescription:
      "Modernização da plataforma corporativa da READI, anteriormente distribuída em 11 microsserviços Node.js e 11 bancos de dados independentes em PostgreSQL e SQL Server. Liderei a estratégia e a execução da consolidação em um monólito modular Laravel/PHP, com migração das regras de negócio, dos dados históricos e sustentação da nova arquitetura em produção.",
    image: projectImageUrl("consolidacao-arquitetural", "capa.svg"),
    imageAlt: "Diagrama da consolidação de 11 microsserviços Node.js em um monólito modular Laravel",
    imageCaption: "Representação conceitual da mudança arquitetural. O diagrama não expõe dados ou detalhes internos da plataforma.",
    primaryTechnologies: ["Laravel", "PostgreSQL", "SQL Server", "Docker"],
    roleLabel: "Responsável técnico pela consolidação",
    outcomeSummary: "11 microsserviços consolidados em uma arquitetura modular sustentada em produção.",
    outcomes: [
      {
        title: "11 microsserviços consolidados",
        description: "Regras de negócio antes distribuídas em Node.js migradas para módulos de uma aplicação Laravel/PHP.",
      },
      {
        title: "11 bancos no escopo da migração",
        description: "Mapeamento dos schemas legados, modelagem relacional e migração dos dados históricos para a estrutura consolidada.",
      },
      {
        title: "Sustentação em produção",
        description: "Operação da arquitetura consolidada com Docker, pipelines de CI/CD e manutenção dos limites entre domínios.",
      },
    ],
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
        text: "Menos comunicação entre serviços e operação centralizada, em troca de maior responsabilidade compartilhada no deploy e disciplina nos limites entre os módulos.",
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
      "Redução de custos de infraestrutura com a consolidação dos serviços.",
      "Substituição de chamadas HTTP entre os módulos consolidados por chamadas internas à aplicação.",
      "Arquitetura modular em camadas com separação clara de domínios, services e repositórios.",
      "Ambiente conteinerizado com Docker e pipelines de CI/CD para padronizar build e deploy.",
      "Reconhecimento profissional como Destaque do Ano da empresa em 2024 e 2025 pelo impacto direto no produto e na operação.",
    ],
    decisions: [
      {
        title: "Monólito Modular vs Microsserviços Distribuídos",
        benefit:
          "Operação centralizada e redução das chamadas de rede entre os domínios consolidados.",
        cost: "Exige rigor técnico contínuo em Code Review e Clean Architecture para evitar que limites de domínio se degradem com o tempo.",
      },
      {
        title: "Consolidação de Bancos de Dados",
        benefit:
          "Modelagem relacional integrada e consultas diretas entre dados antes distribuídos em bases independentes.",
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
            "Persistência relacional dos módulos consolidados e migração das bases legadas",
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
    title: "Investidor",
    slug: "investidor",
    kind: "product",
    category: "Fintech & Dados Financeiros",
    featured: true,
    featuredOrder: 2,
    status: "Demonstração online · acesso por código de teste",
    shortDescription:
      "Plataforma de investimentos que reúne carteira, renda e análise de empresas, com API própria para integrar e normalizar fontes de dados financeiros.",
    fullDescription:
      "Produto autoral para acompanhar carteira, renda e patrimônio, consultar empresas e analisar dividendos e referências de valuation. Uma API própria integra e normaliza dados financeiros externos para a aplicação.",
    image: projectImageUrl("investidor", "valuation-empresa.png"),
    imageAlt: "Análise de empresa com métricas financeiras e referências de valuation Graham, Bazin e Damodaran",
    imageCaption:
      "Detalhe de empresa com referências Graham e Bazin e framework Damodaran que explicita completude e limitações dos dados.",
    primaryTechnologies: [
      "Laravel",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "React Query",
    ],
    roleLabel: "Desenvolvimento Full Stack de produto autoral",
    outcomeSummary:
      "Carteira, renda e análises financeiras reunidas em uma aplicação com acesso controlado.",
    outcomes: [
      {
        title: "Visão financeira consolidada",
        description:
          "Áreas para carteira, patrimônio, renda, dividendos, agenda, extrato e imposto de renda.",
      },
      {
        title: "Análise de empresas",
        description:
          "Busca global e detalhes de empresas com indicadores, dividendos e ferramentas de valuation.",
      },
      {
        title: "Integrações acompanhadas",
        description:
          "API própria para integrar e normalizar fontes externas, com monitoramento de disponibilidade e alterações de contrato.",
      },
    ],
    technologies: [
      "Laravel 13",
      "PHP 8.3",
      "PostgreSQL 16",
      "Docker",
      "Docker Compose",
      "React 19",
      "TypeScript",
      "Vite 8",
      "Tailwind CSS 4",
      "TanStack React Query",
      "Axios",
      "Recharts",
      "PHPUnit",
      "Vitest",
      "Testing Library",
      "Node.js",
      "Puppeteer",
      "Chromium",
    ],
    projectUrl: "https://investidor.emfsystems.com.br",
    projectUrlLabel: "Acessar aplicação",
    sourceNote: "Código-fonte privado. Projeto autoral.",
    accessNote: "Para acessar a demonstração, abra a aplicação e informe o código de teste 11111111.",
    brief: [
      {
        label: "Problema",
        text: "Dados de carteira, dividendos, empresas e análises financeiras ficam distribuídos entre diferentes fontes e ferramentas, dificultando uma visão consolidada do patrimônio e da geração de renda.",
      },
      {
        label: "Decisão",
        text: "Centralizar integrações em uma API Laravel responsável pelo controle de acesso, normalização e orquestração de provedores externos, mantendo o frontend React desacoplado das particularidades de cada fonte.",
      },
      {
        label: "Trade-off",
        text: "A dependência de provedores externos demanda considerar indisponibilidades, cache, renovação de credenciais e mudanças de contrato, além do isolamento cuidadoso de dados sensíveis.",
      },
      {
        label: "Entrega",
        text: "Aplicação Full Stack responsiva com acompanhamento de renda e patrimônio, análise de empresas, dividendos, agenda, extrato, imposto de renda e ferramentas de valuation.",
      },
    ],
    context:
      "Informações de carteira, renda, empresas e análises financeiras chegam de fontes distintas. O produto reúne essas áreas em uma aplicação e concentra a integração com provedores externos em uma API própria.",
    solution:
      "O frontend em React e TypeScript consome uma API REST Laravel por meio de Axios e usa TanStack React Query para estado remoto e cache. A API concentra o gate de acesso, a normalização e a orquestração das integrações externas, protegendo o frontend das particularidades de cada provedor. Para fluxos autenticados que dependem de interfaces externas, automações com Node.js, Chromium e Puppeteer são executadas no backend para manter atualizadas as credenciais necessárias às integrações. As atualizações são aplicadas ao runtime da API, sem expor os valores completos ao frontend; os processos têm timeouts e as falhas retornam mensagens da API, não a saída completa dos processos.\n\nA aplicação reúne acompanhamento de carteira, patrimônio e renda, consulta de empresas, dividendos, agenda, extrato, imposto de renda e ferramentas de análise. O framework baseado em metodologias de Damodaran classifica empresas, avalia completude e apresenta métricas e riscos; não calcula um valor numérico completo por DCF.",
    technicalChallenges: [
      "Integrar fontes financeiras externas e normalizar os dados para consumo por áreas distintas da aplicação.",
      "Tratar indisponibilidade, cache e alterações nos contratos das integrações sem acoplar o frontend às respostas dos provedores.",
      "Automatizar fluxos autenticados e manter credenciais de integração atualizadas no backend sem expor segredos ao frontend.",
      "Separar sessões e dados do modo de demonstração do ambiente principal.",
      "Explicitar a completude e as limitações dos dados nas análises de valuation.",
    ],
    technicalHighlights: [
      "API Laravel como camada de orquestração e normalização de múltiplas fontes financeiras.",
      "Automação de fluxos autenticados com Chromium/Puppeteer para manutenção controlada das credenciais utilizadas pelas integrações.",
      "Segurança aplicada em integrações autenticadas, com gerenciamento de credenciais e proteção de segredos.",
      "Gate de acesso com Bearer tokens temporários, rate limiting e revogação de sessão.",
      "Sessões isoladas para demonstração, separando dados e configurações do ambiente principal.",
      "Monitoramento de disponibilidade e alterações de contrato/schema nas integrações externas.",
      "Ferramentas de valuation com Graham e Bazin, além de framework de classificação e análise de completude baseado em metodologias de Damodaran.",
      "Suíte automatizada no backend e frontend cobrindo integrações, contratos, regras de valuation e fluxos críticos.",
    ],
    decisions: [
      {
        title: "API própria como camada de integração",
        benefit:
          "Centraliza autenticação, normalização e orquestração, mantendo o frontend desacoplado dos contratos externos.",
        cost:
          "A camada precisa lidar com indisponibilidade, cache, renovação de credenciais e mudanças nos contratos dos provedores.",
      },
      {
        title: "Acesso controlado com sessões isoladas de demonstração",
        benefit:
          "Tokens temporários, revogação e isolamento permitem controlar o acesso e separar os dados e as configurações da demonstração.",
        cost:
          "O gate de acesso não substitui um sistema tradicional de identidade e exige cuidado com o ciclo de vida das sessões.",
      },
      {
        title: "Framework Damodaran orientado à completude",
        benefit:
          "Classificação, métricas, métodos aplicáveis e riscos podem ser apresentados sem ocultar limitações dos dados disponíveis.",
        cost:
          "O framework ainda não calcula um valor intrínseco numérico completo por DCF/NAV/FCFE.",
      },
    ],
    myRole:
      "Desenvolvimento Full Stack do produto: arquitetura da API Laravel e integração com provedores financeiros, automação de fluxos autenticados, construção da interface React, modelagem de dados, controle de acesso, segurança aplicada, monitoramento das integrações, testes e infraestrutura Docker.",
    screenshots: [
      {
        src: projectImageUrl("investidor", "valuation-empresa.png"),
        alt: "Análise de empresa com métricas financeiras e referências de valuation Graham, Bazin e Damodaran",
        caption:
          "Detalhe de empresa com referências Graham e Bazin e framework Damodaran que explicita completude e limitações dos dados.",
      },
      {
        src: projectImageUrl("investidor", "analise-detalhadas-empresas.png"),
        alt: "Detalhe de empresa com indicadores, abas de análise e referências de preço",
        caption:
          "Visão da empresa com indicadores e navegação entre áreas de análise financeira.",
      },
      {
        src: projectImageUrl("investidor", "analise-compra-empresa.png"),
        alt: "Análise de empresa com critérios avaliados, cobertura dos dados e riscos",
        caption:
          "Análise orientada a renda que apresenta critérios, cobertura e riscos do recorte avaliado.",
      },
      {
        src: projectImageUrl("investidor", "analise-ia-empresas.png"),
        alt: "Análise detalhada de empresa com critérios financeiros e indicadores",
        caption:
          "Visão analítica de uma empresa com critérios financeiros e indicadores organizados por seção.",
      },
      {
        src: projectImageUrl("investidor", "projecao-pagamento-dividendos.png"),
        alt: "Histórico anual de dividendos e projeção mensal de uma empresa",
        caption:
          "Consulta de histórico anual e projeções de dividendos no detalhe de uma empresa.",
      },
      {
        src: projectImageUrl("investidor", "empresas-recomentadas-valores.png"),
        alt: "Empresas recomendadas com quantidades sugeridas e indicadores financeiros",
        caption:
          "Empresas recomendadas com quantidades e valores apresentados para apoiar a análise de aporte.",
      },
    ],
    architecture: {
      layers: [
        {
          label: "React 19 + TypeScript",
          description:
            "Interface responsiva com TanStack React Query, Axios e Recharts",
        },
        {
          label: "REST / Axios",
          description: "Comunicação entre a aplicação e a API própria",
        },
        {
          label: "Laravel 13 API",
          description:
            "Gate de acesso, regras da aplicação e orquestração",
        },
        {
          label: "Services e integrações",
          description:
            "Normalização de dados, integração com provedores e automação de fluxos autenticados",
        },
        {
          label: "APIs financeiras externas",
          description: "Múltiplas fontes de dados financeiros",
        },
        {
          label: "PostgreSQL 16 + cache",
          description: "Persistência e suporte às integrações e sessões",
        },
      ],
      infrastructureTitle: "Docker Compose",
      infrastructureServices: [
        "Frontend React",
        "Laravel API",
        "PostgreSQL 16",
        "Cache",
        "Makefile",
      ],
    },
  },
  {
    title: "Nexo",
    slug: "nexo",
    kind: "product",
    category: "Workspace Full-Stack",
    featured: false,
    status: "Aplicação online disponível",
    shortDescription:
      "Workspace full-stack Next.js 14 + PostgreSQL para organizar Epics em Markdown, Kanban, diagrama interativo e modelagem DBML, com integração Jira criptografada e deploy Docker.",
    fullDescription:
      "Aplicação Next.js 14 / React 18 / TypeScript com 4 visualizações sincronizadas por Epic: editor Markdown, Kanban drag-and-drop, diagrama de cards em canvas Konva e modelador de banco DBML com layout automático. Backend em Route Handlers + Prisma + PostgreSQL com operações transacionais, import/export com remapeamento de IDs e undo. Integração Jira por conta com cache e token AES-256-GCM, auth com modo visitante, 257 testes Vitest, CI de typecheck/lint/build e deploy Docker standalone.",
    image: projectImageUrl("nexo", "banco-diagrama.png"),
    imageAlt: "Modelador DBML do Nexo com editor e canvas de tabelas, relações e cardinalidade",
    imageCaption: "Visão banco do Epic: editor DBML com parser próprio ao lado do canvas de tabelas e relações.",
    primaryTechnologies: ["Next.js", "React", "PostgreSQL", "Prisma"],
    roleLabel: "Arquitetura e desenvolvimento Full Stack",
    outcomeSummary: "Epics com 4 visualizações sincronizadas, backend transacional e integração Jira por conta.",
    outcomes: [
      {
        title: "4 visualizações por Epic",
        description: "Editor Markdown lado a lado, Kanban com dnd-kit, diagrama Konva e modelador DBML; a URL define a visualização ativa com layout persistente, seleção e autosave entre abas.",
      },
      {
        title: "Backend transacional e dados portáteis",
        description: "Route Handlers + Prisma + PostgreSQL com substituição transacional preservando IDs, import/export com remapeamento, undo de limpeza/substituição e backup completo em JSON.",
      },
      {
        title: "Integração Jira e operação",
        description: "Importação de Epic + tasks em escrita aninhada, token AES-256-GCM, cache com revalidação, auth com modo visitante, 257 testes Vitest e deploy Docker standalone.",
      },
    ],
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS 3",
      "Prisma 5",
      "PostgreSQL 16",
      "Konva 10",
      "dnd-kit",
      "React Markdown",
      "Vitest 2",
      "Testing Library",
      "Docker",
    ],
    projectUrl: "https://nexo.emfsystems.com.br",
    projectUrlLabel: "Acessar aplicação",
    sourceNote: "Código-fonte privado.",
    brief: [
      {
        label: "Problema",
        text: "Organizar Epics com Markdown, Kanban, visão em diagrama e modelagem de banco sem perder contexto ao trocar de visualização, com dados consistentes e integração com o Jira.",
      },
      {
        label: "Decisão",
        text: "Rota por visualização (/epics/[projectId]/normal|cards|diagrama|banco) com layout persistente, backend em Route Handlers + Prisma + PostgreSQL com operações transacionais e canvas Konva com import dinâmico.",
      },
      {
        label: "Trade-off",
        text: "Mais superfície de UI em troca de disciplina em autosave com fila e retry, geometria de diagramas isolada de React e validação de lote por escopo.",
      },
      {
        label: "Entrega",
        text: "Workspace com editor Markdown lado a lado, Kanban drag-and-drop, diagrama de cards com zoom, pan, conexões e minimapa, além de modelador DBML com parser próprio e layout automático.",
      },
    ],
    decisions: [
      {
        title: "URL define a visualização ativa",
        benefit: "Cada visão (normal, cards, diagrama, banco) é navegável e compartilhável, com layout persistente entre trocas de aba.",
        cost: "O layout precisa preservar seleção, edição e autosave ao navegar entre rotas do mesmo Epic.",
      },
      {
        title: "Substituição transacional preservando IDs",
        benefit: "PUT /api/items com replaceProjectId evita o anti-padrão delete+recreate em N requests e mantém referências íntegras.",
        cost: "Exige validação de lote por escopo e operações atômicas no Prisma.",
      },
      {
        title: "Konva com import dinâmico e geometria pura",
        benefit: "Reduz o first-load e mantém cálculo de geometria e roteamento testável sem canvas.",
        cost: "Exige camada separada entre modelo geométrico e renderização no canvas.",
      },
    ],
    context:
      "Epics ficavam distribuídos entre Markdown, quadros e diagramas de banco desconectados, com importação manual do Jira e risco de divergência ao trocar de ferramenta. O Nexo centraliza Epic, cards Markdown, Kanban, diagrama visual e modelagem DBML na mesma base PostgreSQL, com navegação por URL e persistência entre trocas de aba.",
    solution:
      "No frontend em Next.js 14 e React 18, a rota base lista os Epics e /epics/[projectId]/normal|cards|diagrama|banco define a visualização ativa. O layout persistente mantém seleção, edição e autosave entre abas: editor + preview Markdown lado a lado com colunas redimensionáveis, Kanban com @dnd-kit/sortable, canvas de cards com Konva (zoom, pan, conexões e minimapa) e modelagem DBML com parser próprio, canvas de tabelas/relações/cardinalidade, inspector e layout automático. Konva usa import dinâmico, temas light/dark são compartilhados entre HTML e canvas, e a UI usa ConfirmModal com focus-trap e toasts acessíveis.\n\nNo backend em Route Handlers + Prisma + PostgreSQL, o modelo usa Project 1-N MarkdownItem e 1-1 DatabaseDiagram, com índices compostos [projectId, order] e [userId, order] e cascade delete. PUT /api/items com replaceProjectId faz substituição transacional preservando IDs, e GET /api/diagrams/[projectId] não cria registro colateral. Import/export remapeia IDs com undo e backup completo em JSON, com ordenação por max(order)+1. A integração Jira por conta usa token AES-256-GCM, lista Epics com hierarchyLevel=1, pagina filhas por parent e usa cache in-memory de 5min com stale-while-revalidate até 15min.",
    technicalChallenges: [
      "Sincronizar 4 visualizações do mesmo Epic mantendo seleção, edição e autosave ao trocar de rota.",
      "Modelar DBML com parser próprio, canvas de tabelas/relações/cardinalidade e layout automático testável sem canvas.",
      "Garantir substituição transacional de itens preservando IDs sem o anti-padrão delete+recreate em N requests.",
      "Integrar o Jira por conta com token criptografado, paginação por parent, cache com revalidação e importação aninhada.",
      "Isolar projetos por userId com sessão própria, guest mode com limites e fronteira de acesso nas rotas internas.",
      "Manter first-load enxuto com import dinâmico do Konva e acessibilidade com focus-trap, retorno de foco e teclado.",
    ],
    technicalHighlights: [
      "Autosave com fila, retry e preservação de snapshot com erro.",
      "Ordenação por max(order)+1 e validação de lote por escopo em transações Prisma.",
      "Geometria e roteamento de diagramas isolados de React.",
      "Criptografia AES-256-GCM derivada de AUTH_SECRET com isolamento por conta.",
      "Design system Venture com tokens --ui-* e temas compartilhados entre HTML e canvas Konva.",
      "257 testes em 36 arquivos Vitest + Testing Library + fake-indexeddb, com typecheck + lint + build verdes.",
    ],
    myRole:
      "Arquitetura e desenvolvimento full-stack: App Router com 4 visualizações por Epic, backend em Route Handlers + Prisma + PostgreSQL, parser DBML e geometria de diagramas, integração Jira com criptografia e cache, auth com guest mode, testes Vitest e deploy Docker standalone.",
    screenshots: [
      {
        src: projectImageUrl("nexo", "banco-diagrama.png"),
        alt: "Modelador DBML do Nexo com editor e canvas de tabelas e relações",
        caption: "Capa: editor DBML com parser próprio e canvas de tabelas, relações e cardinalidade.",
      },
      {
        src: projectImageUrl("nexo", "epics.png"),
        alt: "Lista de Epics do Nexo com acesso às visualizações",
        caption: "Rota base com listagem de Epics e acesso às 4 visualizações.",
      },
      {
        src: projectImageUrl("nexo", "normal-cards.png"),
        alt: "Editor Markdown lado a lado com preview no Nexo",
        caption: "Visão normal: editor + preview com colunas redimensionáveis e autosave.",
      },
      {
        src: projectImageUrl("nexo", "novo-bloco-markdown.png"),
        alt: "Criação de novo bloco Markdown no Nexo",
        caption: "Criação de cards Markdown com status, observação e ordenação.",
      },
      {
        src: projectImageUrl("nexo", "quadro-cards.png"),
        alt: "Quadro Kanban de cards do Nexo",
        caption: "Visão cards: Kanban com drag-and-drop via dnd-kit.",
      },
      {
        src: projectImageUrl("nexo", "cards-diagramas.png"),
        alt: "Diagrama visual de cards do Nexo em canvas",
        caption: "Visão diagrama: canvas Konva com zoom, pan, conexões e minimapa.",
      },
      {
        src: projectImageUrl("nexo", "integracao-jira.png"),
        alt: "Integração Jira do Nexo com importação de Epics",
        caption: "Importação de Epics e tasks do Jira por conta com token criptografado.",
      },
      {
        src: projectImageUrl("nexo", "login.png"),
        alt: "Tela de login do Nexo no tema claro",
        caption: "Autenticação com sessão própria e modo visitante.",
      },
      {
        src: projectImageUrl("nexo", "login-dark.png"),
        alt: "Tela de login do Nexo no tema escuro",
        caption: "Tema dark compartilhado entre a interface e o canvas.",
      },
    ],
    architecture: {
      layers: [
        {
          label: "Next.js 14 / React 18",
          description: "App Router com 4 visualizações por Epic e layout persistente",
        },
        {
          label: "Route Handlers + Prisma",
          description: "auth, projects, items, diagrams e jira com operações transacionais",
        },
        {
          label: "PostgreSQL 16",
          description: "Project 1-N MarkdownItem e 1-1 DatabaseDiagram com índices por ordem",
        },
        {
          label: "Konva + dnd-kit + Markdown",
          description: "Canvas com import dinâmico, Kanban sortable e preview com GFM",
        },
      ],
      infrastructureTitle: "Docker standalone",
      infrastructureServices: [
        "Next.js standalone",
        "PostgreSQL 16",
        "Docker multi-stage Node 24",
        "Healthcheck",
        "Volume e rede externos",
      ],
    },
  },
  {
    title: "Vidora",
    slug: "vidora",
    kind: "technical-study",
    category: "Arquitetura distribuída",
    featured: false,
    status: "Estudo técnico · código aberto",
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
    image: projectImageUrl("vidora", "capa.png"),
    imageAlt: "Interface do Vidora com pesquisa de vídeos e ações para adicionar favoritos",
    imageCaption: "Interface do estudo técnico: pesquisa na YouTube Data API e favoritos por usuário.",
    primaryTechnologies: ["TypeScript", "Express", "PostgreSQL", "Docker"],
    roleLabel: "Arquitetura e desenvolvimento Full Stack",
    outcomeSummary: "Gateway, serviços e persistência isolada para explorar os custos da arquitetura distribuída.",
    outcomes: [
      {
        title: "Responsabilidades isoladas",
        description: "Gateway e serviços de autenticação, vídeos e favoritos com contratos HTTP explícitos.",
      },
      {
        title: "Integração externa",
        description: "YouTube Data API normalizada por um Adapter, com timeout na comunicação entre serviços.",
      },
      {
        title: "Ambiente reproduzível",
        description: "Docker Compose, documentação OpenAPI e testes com Jest para explorar os fluxos da aplicação.",
      },
    ],
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
  {
    title: "Bruna & Eloan",
    slug: "bruna-e-eloan",
    kind: "product",
    category: "Aplicação web · Pagamentos & integrações",
    featured: false,
    status: "Aplicação de evento · online",
    shortDescription:
      "Aplicação web para casamento com confirmação de presença, lista de presentes, carrinho, pagamentos e persistência de mensagens dos convidados.",
    fullDescription:
      "Aplicação responsiva para reunir informações do casamento, confirmação de presença, lista de presentes, carrinho e mensagens dos convidados.",
    image: projectImageUrl("bruna-e-eloan", "capa.png"),
    imageAlt: "Página inicial da aplicação Bruna & Eloan com informações do casamento",
    imageCaption: "Aplicação do evento com informações, confirmação de presença e lista de presentes.",
    primaryTechnologies: ["React", "TypeScript", "Supabase", "Mercado Pago"],
    roleLabel: "Desenvolvimento Full Stack e integrações",
    outcomeSummary: "Informações do evento, confirmações de presença e presentes em uma experiência integrada.",
    outcomes: [
      {
        title: "Informações centralizadas",
        description: "Aplicação responsiva com detalhes e localização do evento para os convidados.",
      },
      {
        title: "RSVP e mensagens",
        description: "Confirmações de presença e mensagens com persistência no Supabase.",
      },
      {
        title: "Fluxo de presentes",
        description: "Lista de presentes, cálculo do carrinho e redirecionamento ao checkout do provedor de pagamentos.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Supabase",
      "Mercado Pago",
      "Google Maps",
      "Netlify",
    ],
    projectUrl: "https://brunaeeloan.emfsystems.com.br/",
    projectUrlLabel: "Acessar aplicação",
    githubUrl: "https://github.com/emffor/projeto_casamento_web",
    brief: [
      {
        label: "Problema",
        text: "Centralizar informações do casamento, confirmação de presença e lista de presentes em uma única experiência digital.",
      },
      {
        label: "Decisão",
        text: "Aplicação React integrada ao Supabase para confirmações e mensagens, com carrinho próprio e integração externa para o fluxo de pagamento.",
      },
      {
        label: "Trade-off",
        text: "A solução priorizou simplicidade e entrega para um evento específico, utilizando serviços externos para persistência e processamento de pagamentos.",
      },
      {
        label: "Entrega",
        text: "Aplicação utilizada como ponto central do evento, reunindo informações, RSVP, mensagens de convidados e lista de presentes.",
      },
    ],
    context:
      "As informações do evento, as confirmações de presença e a lista de presentes foram reunidas em uma aplicação web responsiva.",
    solution:
      "O site apresenta as informações e localização do evento, recebe confirmações e mensagens dos convidados com persistência no Supabase, e oferece lista de presentes com carrinho. O fluxo de checkout envia os itens a uma API externa e redireciona para a URL de pagamento retornada.",
    technicalChallenges: [
      "Persistir confirmações de presença e consultar mensagens dos convidados usando o Supabase.",
      "Calcular quantidades e total do carrinho e iniciar checkout por meio da API de pagamentos.",
    ],
    myRole:
      "Desenvolvimento da aplicação web, experiência responsiva, fluxo de RSVP, persistência com Supabase, lista de presentes, carrinho e integração do checkout.",
    screenshots: [
      {
        src: projectImageUrl("bruna-e-eloan", "presentes.png"),
        alt: "Lista de presentes com cards de itens e acesso ao carrinho",
        caption: "Lista de presentes, com opção de adicionar itens ao carrinho.",
      },
      {
        src: projectImageUrl("bruna-e-eloan", "confirmar.png"),
        alt: "Formulário de confirmação de presença com nome, e-mail, telefone, convidados e mensagem",
        caption: "Formulário de RSVP e mensagem para os noivos.",
      },
    ],
  },
] as const;

export async function getFeaturedProjects(): Promise<Project[]> {
  return PROJECTS.filter((project) => project.featured).sort(
    (a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0)
  );
}

export async function getAdditionalProjects(): Promise<Project[]> {
  return PROJECTS.filter((project) => !project.featured);
}

export async function getAllProjects(): Promise<Project[]> {
  return [...PROJECTS];
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return PROJECTS.find((p) => p.slug === slug);
}
