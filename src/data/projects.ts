import { Project, ProjectKind } from "@/types/project";
import { projectImageUrl } from "@/lib/storage";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

export const PROJECT_KIND_LABELS: Record<ProjectKind, string> = {
  product: "Produto",
  modernization: "Case corporativo",
  "technical-study": "Estudo técnico",
};

export function getProjectKindLabel(kind: ProjectKind, locale: Locale = "pt"): string {
  if (locale === "pt") return PROJECT_KIND_LABELS[kind];
  const labels = getDictionary("en").kindLabels;
  if (kind === "product") return labels.product;
  if (kind === "modernization") return labels.modernization;
  return labels.technicalStudy;
}

export const PROJECTS: readonly Project[] = [
  {
    title: "Rastro Florestal",
    slug: "rastro-florestal",
    kind: "product",
    category: "SaaS Multiempresa",
    categoryEn: "Multi-tenant SaaS",
    featured: true,
    featuredOrder: 0,
    status: "Demonstração online disponível",
    statusEn: "Live demo available",
    shortDescription:
      "SaaS multiempresa para madeireiras: conciliação de estoque legal e físico, rastreabilidade de DOFs e mapa interativo do pátio.",
    shortDescriptionEn:
      "Multi-tenant SaaS for timber companies: reconciliation of legal and physical inventory, DOF traceability, and an interactive yard map.",
    fullDescription:
      "SaaS multi-empresa para madeireiras e serrarias reguladas pelo IBAMA. Une conformidade legal do DOF (Documento de Origem Florestal) com a operação real de pátio: controla saldo legal em m³ e estoque físico em peças simultaneamente, com mapa visual do pátio em canvas, movimentações auditáveis e relatórios para fiscalização.",
    fullDescriptionEn:
      "Multi-tenant SaaS for timber companies and sawmills regulated by IBAMA (Brazil's environmental agency). It combines DOF (Documento de Origem Florestal — Brazil's timber origin permit) legal compliance with real yard operations: it tracks legal balance in m³ and physical stock in pieces simultaneously, with a visual yard map on canvas, auditable movements, and reports for inspections.",
    image: projectImageUrl("rastro-florestal", "capa.png"),
    imageAlt: "Dashboard do Rastro Florestal com saldos de DOF, estoque e movimentações por lote",
    imageAltEn: "Rastro Florestal dashboard with DOF balances, inventory, and movements per batch",
    imageCaption: "Visão operacional do produto com dados de demonstração. Os volumes exibidos ilustram o fluxo de estoque.",
    imageCaptionEn: "Operational view of the product with demo data. Displayed volumes illustrate the inventory flow.",
    primaryTechnologies: ["Laravel", "React", "PostgreSQL", "TypeScript"],
    roleLabel: "Arquitetura e desenvolvimento Full Stack",
    roleLabelEn: "Full Stack architecture and development",
    outcomeSummary: "Saldo legal em m³ e estoque físico em peças conectados à operação do pátio.",
    outcomeSummaryEn: "Legal balance in m³ and physical stock in pieces connected to yard operations.",
    outcomes: [
      {
        title: "Estoque conciliado",
        titleEn: "Reconciled inventory",
        description: "Controle de volume legal e peças físicas com alocação de DOFs por lote e débito casado nas movimentações.",
        descriptionEn: "Legal volume and physical pieces tracked with per-batch DOF allocation and matched debiting on movements.",
      },
      {
        title: "Operação visual",
        titleEn: "Visual operations",
        description: "Mapa interativo para organizar lotes, consultar ocupação e preparar a expedição com preview de saída.",
        descriptionEn: "Interactive map to organize batches, check occupancy, and prepare shipping with an outbound preview.",
      },
      {
        title: "Rastreabilidade",
        titleEn: "Traceability",
        description: "Histórico de movimentações, permissões por recurso e relatórios PDF/Excel para apoiar a conferência do estoque.",
        descriptionEn: "Movement history, per-resource permissions, and PDF/Excel reports to support inventory audits.",
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
        labelEn: "Problem",
        text: "O controle do DOF em planilhas desconectadas do pátio dificulta a conciliação entre volume legal (m³) e peças físicas, aumentando o risco de divergências e autuações.",
        textEn: "Tracking DOFs in spreadsheets disconnected from the yard makes it hard to reconcile legal volume (m³) with physical pieces, increasing the risk of discrepancies and fines.",
      },
      {
        label: "Decisão",
        labelEn: "Decision",
        text: "Estoque duplo sincronizado com débito casado por volume unitário, mapa de pátio interativo em canvas e multi-tenancy com RBAC granular.",
        textEn: "Synchronized dual inventory with matched debiting per unit volume, an interactive canvas yard map, and multi-tenancy with granular RBAC.",
      },
      {
        label: "Trade-off",
        labelEn: "Trade-off",
        text: "Maior complexidade nas validações de cada movimentação para manter a consistência entre estoque legal, estoque físico e relatórios.",
        textEn: "Greater complexity in each movement's validations to keep legal inventory, physical inventory, and reports consistent.",
      },
      {
        label: "Entrega",
        labelEn: "Delivery",
        text: "Consulta centralizada de saldos, mapa do pátio e histórico de movimentações para apoiar a conciliação de estoque e a preparação de relatórios.",
        textEn: "Centralized balance lookup, yard map, and movement history to support inventory reconciliation and report preparation.",
      },
    ],
    context:
      "Madeireiras e serrarias reguladas pelo IBAMA operavam com divergências frequentes entre o saldo do DOF do órgão ambiental e o estoque físico real. O controle disperso em planilhas gerava passivo jurídico, risco de multas e lentidão operacional.",
    contextEn:
      "IBAMA-regulated timber companies and sawmills operated with frequent discrepancies between the environmental agency's DOF balance and the real physical stock. Scattered spreadsheet tracking created legal exposure, fine risk, and operational slowness.",
    solution:
      "No backend em Laravel, implementei estoque duplo (m³ x peças), alocação DOF-lote, registro de auditoria com Spatie Activity Log e multi-tenancy com RBAC.\n\nNo frontend em React e TypeScript, construí um mapa interativo de pátio em canvas (React-Konva) com drag-and-drop, detecção de colisão e fluxos de expedição com preview.",
    solutionEn:
      "On the Laravel backend, I implemented dual inventory (m³ x pieces), DOF-batch allocation, audit logging with Spatie Activity Log, and multi-tenancy with RBAC.\n\nOn the React + TypeScript frontend, I built an interactive canvas yard map (React-Konva) with drag-and-drop, collision detection, and shipping flows with preview.",
    technicalChallenges: [
      "Sincronizar o estoque duplo com débito casado entre saldo legal (m³) e físico (peças) via volume unitário.",
      "Modelar a alocação DOF-lote com operações atômicas de alocar, transferir, dar baixa e remover.",
      "Manter movimentações imutáveis (Entrada, Transferência, Baixa, Ajuste) com preview de saída e consumo por fonte.",
      "Implementar multi-tenancy real com RBAC granular (Master > Admin > Usuário) e permissões por recurso.",
      "Construir o mapa de pátio interativo em canvas com drag-and-drop, detecção de colisão e áreas bloqueadas.",
      "Gerenciar anexos polimórficos em S3 com cota mensal e URL temporária cacheada no Redis.",
    ],
    technicalChallengesEn: [
      "Synchronizing dual inventory with matched debiting between legal (m³) and physical (pieces) balances via unit volume.",
      "Modeling DOF-batch allocation with atomic allocate, transfer, write-off, and remove operations.",
      "Keeping immutable movements (Inbound, Transfer, Write-off, Adjustment) with outbound preview and per-source consumption.",
      "Implementing real multi-tenancy with granular RBAC (Master > Admin > User) and per-resource permissions.",
      "Building the interactive canvas yard map with drag-and-drop, collision detection, and blocked areas.",
      "Managing polymorphic S3 attachments with a monthly quota and Redis-cached temporary URLs.",
    ],
    technicalHighlights: [
      "Estoque duplo sincronizado legal (m³) x físico (peças).",
      "Mapa de pátio interativo em canvas com drag-and-drop e detecção de colisão.",
      "Multi-tenancy com RBAC granular e autorização por política de recurso.",
      "Ofuscação de IDs sequenciais com Hashids e auditoria com Spatie Activity Log.",
      "Respostas de API padronizadas e autenticação com Laravel Sanctum.",
      "Relatórios PDF/Excel de DOF e movimentações prontos para fiscalização.",
    ],
    technicalHighlightsEn: [
      "Synchronized dual inventory: legal (m³) x physical (pieces).",
      "Interactive canvas yard map with drag-and-drop and collision detection.",
      "Multi-tenancy with granular RBAC and per-resource policy authorization.",
      "Sequential ID obfuscation with Hashids and auditing with Spatie Activity Log.",
      "Standardized API responses and authentication with Laravel Sanctum.",
      "Inspection-ready PDF/Excel reports for DOFs and movements.",
    ],
    decisions: [
      {
        title: "Estoque legal e físico no mesmo fluxo",
        titleEn: "Legal and physical inventory in the same flow",
        benefit: "Cada movimentação relaciona peças e volume unitário, permitindo conferir o saldo do lote e sua origem documental.",
        benefitEn: "Each movement links pieces and unit volume, so batch balances and their document origin can be verified.",
        cost: "Exige validações e operações atômicas para que alocações, transferências e baixas mantenham os dois saldos consistentes.",
        costEn: "Requires validations and atomic operations so allocations, transfers, and write-offs keep both balances consistent.",
      },
      {
        title: "Canvas para o mapa do pátio",
        titleEn: "Canvas for the yard map",
        benefit: "React-Konva permite posicionar e rotacionar lotes em uma representação visual do espaço físico.",
        benefitEn: "React-Konva allows positioning and rotating batches in a visual representation of the physical space.",
        cost: "O editor precisa tratar colisões, áreas bloqueadas e persistência do posicionamento dos lotes.",
        costEn: "The editor must handle collisions, blocked areas, and persistence of batch positions.",
      },
    ],
    demoAccess: {
      email: "madeireira@email.com",
      password: "123123",
    },
    sourceNote:
      "O código-fonte é privado e protegido por propriedade intelectual.",
    sourceNoteEn:
      "Source code is private and protected by intellectual property.",
    myRole:
      "Desenvolvimento Full Stack: arquitetura do backend em Laravel (regras de negócio, estoque duplo, alocação DOF-lote, RBAC e relatórios) e frontend em React + TypeScript (dashboard operacional, mapa de pátio em canvas, fluxos de saída e painel administrativo).",
    myRoleEn:
      "Full Stack development: Laravel backend architecture (business rules, dual inventory, DOF-batch allocation, RBAC, and reports) and React + TypeScript frontend (operational dashboard, canvas yard map, outbound flows, and admin panel).",
    screenshots: [
      {
        src: projectImageUrl("rastro-florestal", "movimentacoes.png"),
        alt: "Histórico de movimentações com 8 entradas, volume filtrado e relatórios em PDF e Excel",
        altEn: "Movement history with 8 entries, filtered volume, and PDF/Excel reports",
        caption:
          "Movimentações com dados de demonstração: histórico imutável de entradas, filtros por tipo e relatórios em PDF e Excel.",
        captionEn:
          "Movements with demo data: immutable inbound history, filters by type, and PDF/Excel reports.",
      },
      {
        src: projectImageUrl("rastro-florestal", "movimentacoes-dimensao.png"),
        alt: "Peças dimensionadas no Lote 2 com 3.500 peças e volumes por produto",
        altEn: "Sized pieces in Batch 2 with 3,500 pieces and volumes per product",
        caption:
          "Estoque físico no lote: 3.500 peças distribuídas por produto dimensionado, com volume individual em m³.",
        captionEn:
          "Physical stock in the batch: 3,500 pieces across sized products, with individual volume in m³.",
      },
      {
        src: projectImageUrl("rastro-florestal", "patio-lote-descricao.png"),
        alt: "Alocações de DOF no Lote 2 com 22,5 m³ distribuídos em 4 documentos",
        altEn: "DOF allocations in Batch 2 with 22.5 m³ across 4 documents",
        caption:
          "Estoque legal no lote: 22,5 m³ vinculados a 4 DOFs, com status, ocupação e itens com peças.",
        captionEn:
          "Legal stock in the batch: 22.5 m³ linked to 4 DOFs, with status, occupancy, and pieced items.",
      },
      {
        src: projectImageUrl("rastro-florestal", "produto-dimensionado.png"),
        alt: "Lista de produtos dimensionados com espécies, dimensões e volume unitário em metros cúbicos",
        altEn: "Sized products list with species, dimensions, and unit volume in cubic meters",
        caption:
          "Cadastro de produtos dimensionados: espécies vinculadas e volume unitário utilizado na conversão entre peças e metros cúbicos.",
        captionEn:
          "Sized product registry: linked species and unit volume used to convert between pieces and cubic meters.",
      },
      {
        src: projectImageUrl("rastro-florestal", "patio-lote.png"),
        alt: "Mapa do Pátio Cinza em modo de edição, com três lotes posicionados no canvas",
        altEn: "Gray Yard map in edit mode, with three batches positioned on the canvas",
        caption:
          "Edição do layout do pátio: posicionamento e rotação de lotes no canvas.",
        captionEn:
          "Yard layout editing: positioning and rotating batches on the canvas.",
      },
      {
        src: projectImageUrl("rastro-florestal", "patio-cinza.png"),
        alt: "Listagem de pátios com filtros, área total e acesso ao mapa do Pátio Cinza",
        altEn: "Yard listing with filters, total area, and access to the Gray Yard map",
        caption:
          "Listagem de pátios: consulta de áreas, quantidade de lotes, filtros e acesso ao mapa de cada pátio.",
        captionEn:
          "Yard listing: area lookup, batch counts, filters, and access to each yard's map.",
      },
    ],
    architecture: {
      layers: [
        {
          label: "React 19 + TypeScript",
          description: "Dashboard operacional, mapa de pátio em canvas e fluxos de saída",
          descriptionEn: "Operational dashboard, canvas yard map, and outbound flows",
        },
        {
          label: "REST API",
          description: "Contrato HTTP tipado com respostas padronizadas",
          descriptionEn: "Typed HTTP contract with standardized responses",
        },
        {
          label: "Laravel 11 / PHP",
          description: "Regras de negócio, estoque duplo, RBAC e autenticação com Sanctum",
          descriptionEn: "Business rules, dual inventory, RBAC, and Sanctum authentication",
        },
        {
          label: "PostgreSQL 16 + Redis 7",
          description: "Persistência relacional multi-tenant e cache de URLs temporárias",
          descriptionEn: "Multi-tenant relational persistence and temporary URL caching",
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
    categoryEn: "Architecture & Data Engineering",
    featured: true,
    featuredOrder: 1,
    status: "Em produção na READI",
    statusEn: "In production at READI",
    shortDescription:
      "Consolidação de 11 microsserviços e 11 bancos de dados em um monólito modular Laravel, com migração do legado e sustentação em produção.",
    shortDescriptionEn:
      "Consolidation of 11 microservices and 11 databases into a modular Laravel monolith, with legacy migration and production support.",
    fullDescription:
      "Modernização da plataforma corporativa da READI, anteriormente distribuída em 11 microsserviços Node.js e 11 bancos de dados independentes em PostgreSQL e SQL Server. Liderei a estratégia e a execução da consolidação em um monólito modular Laravel/PHP, com migração das regras de negócio, dos dados históricos e sustentação da nova arquitetura em produção.",
    fullDescriptionEn:
      "Modernization of READI's corporate platform, previously spread across 11 Node.js microservices and 11 standalone PostgreSQL and SQL Server databases. I led the strategy and execution of consolidating into a modular Laravel/PHP monolith, migrating business rules and historical data and supporting the new architecture in production.",
    image: projectImageUrl("consolidacao-arquitetural", "capa.svg"),
    imageAlt: "Diagrama da consolidação de 11 microsserviços Node.js em um monólito modular Laravel",
    imageAltEn: "Diagram of consolidating 11 Node.js microservices into a modular Laravel monolith",
    imageCaption: "Representação conceitual da mudança arquitetural. O diagrama não expõe dados ou detalhes internos da plataforma.",
    imageCaptionEn: "Conceptual representation of the architectural change. The diagram exposes no platform data or internals.",
    primaryTechnologies: ["Laravel", "PostgreSQL", "SQL Server", "Docker"],
    roleLabel: "Responsável técnico pela consolidação",
    roleLabelEn: "Technical lead for the consolidation",
    outcomeSummary: "11 microsserviços consolidados em uma arquitetura modular sustentada em produção.",
    outcomeSummaryEn: "11 microservices consolidated into a modular architecture running in production.",
    outcomes: [
      {
        title: "11 microsserviços consolidados",
        titleEn: "11 microservices consolidated",
        description: "Regras de negócio antes distribuídas em Node.js migradas para módulos de uma aplicação Laravel/PHP.",
        descriptionEn: "Business rules previously spread across Node.js migrated into modules of a Laravel/PHP application.",
      },
      {
        title: "11 bancos no escopo da migração",
        titleEn: "11 databases in the migration scope",
        description: "Mapeamento dos schemas legados, modelagem relacional e migração dos dados históricos para a estrutura consolidada.",
        descriptionEn: "Legacy schema mapping, relational modeling, and historical data migration into the consolidated structure.",
      },
      {
        title: "Sustentação em produção",
        titleEn: "Production support",
        description: "Operação da arquitetura consolidada com Docker, pipelines de CI/CD e manutenção dos limites entre domínios.",
        descriptionEn: "Operation of the consolidated architecture with Docker, CI/CD pipelines, and domain boundary upkeep.",
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
        labelEn: "Problem",
        text: "11 microsserviços e 11 bancos heterogêneos geravam alta latência em chamadas HTTP em cadeia, custos desproporcionais de servidores e inconsistências de dados em processos críticos.",
        textEn: "11 microservices and 11 heterogeneous databases caused high latency in chained HTTP calls, disproportionate server costs, and data inconsistencies in critical processes.",
      },
      {
        label: "Decisão",
        labelEn: "Decision",
        text: "Consolidação dos serviços em um monólito modular estruturado em Laravel/PHP com PostgreSQL e SQL Server, migrando regras de negócio legadas de Node.js.",
        textEn: "Consolidation of the services into a structured modular monolith in Laravel/PHP with PostgreSQL and SQL Server, migrating legacy Node.js business rules.",
      },
      {
        label: "Trade-off",
        labelEn: "Trade-off",
        text: "Menos comunicação entre serviços e operação centralizada, em troca de maior responsabilidade compartilhada no deploy e disciplina nos limites entre os módulos.",
        textEn: "Less inter-service communication and centralized operations, in exchange for greater shared deploy responsibility and discipline at module boundaries.",
      },
      {
        label: "O que eu faria diferente",
        labelEn: "What I'd do differently",
        text: "Definiria contratos tipados de dados e testes de regressão de borda mais cedo no processo de migração para acelerar a validação das regras legadas de Node.js.",
        textEn: "I would define typed data contracts and edge-case regression tests earlier in the migration to speed up validation of the legacy Node.js rules.",
      },
    ],
    context:
      "A plataforma corporativa operava com 11 microsserviços em Node.js e 11 bancos de dados isolados. O modelo distribuído gerava custos elevados de instâncias de nuvem, chamadas encadeadas com alta latência de rede, lentidão em diagnósticos de produção e impossibilidade de transações ACID nativas entre dados interligados.",
    contextEn:
      "The corporate platform ran on 11 Node.js microservices and 11 isolated databases. The distributed model produced high cloud-instance costs, chained calls with high network latency, slow production diagnostics, and no native ACID transactions across related data.",
    solution:
      "Desenhei e executei a consolidação da plataforma: unificação dos modelos de dados em uma base relacional sólida, migração estruturada dos fluxos de regras de negócio de Node.js para Laravel/PHP com arquitetura em camadas (Form Requests, Services, Repositories), padronização com SOLID/Clean Code e criação de esteiras de CI/CD automatizadas com Docker.",
    solutionEn:
      "I designed and executed the platform consolidation: unification of data models into a solid relational base, structured migration of Node.js business-rule flows to Laravel/PHP with layered architecture (Form Requests, Services, Repositories), SOLID/Clean Code standardization, and automated CI/CD pipelines with Docker.",
    technicalChallenges: [
      "Mapear e migrar 11 schemas de banco heterogêneos (SQL Server e PostgreSQL) para uma estrutura relacional unificada sem perda de dados históricos.",
      "Executar a migração de dados sem interrupção dos processos de negócio dos clientes em produção.",
      "Reescrever e validar regras de negócio complexas do ecossistema legado Node.js para Laravel.",
      "Manter isolamento lógico e fronteiras de domínio bem definidas dentro do novo monólito modular para evitar acoplamento desordenado.",
      "Eliminar dependências circulares e chamadas HTTP síncronas entre domínios da aplicação.",
    ],
    technicalChallengesEn: [
      "Mapping and migrating 11 heterogeneous database schemas (SQL Server and PostgreSQL) into a unified relational structure with no historical data loss.",
      "Running the data migration without interrupting clients' business processes in production.",
      "Rewriting and validating complex business rules from the legacy Node.js ecosystem to Laravel.",
      "Keeping logical isolation and well-defined domain boundaries inside the new modular monolith to avoid disorderly coupling.",
      "Eliminating circular dependencies and synchronous HTTP calls between application domains.",
    ],
    technicalHighlights: [
      "Redução de custos de infraestrutura com a consolidação dos serviços.",
      "Substituição de chamadas HTTP entre os módulos consolidados por chamadas internas à aplicação.",
      "Arquitetura modular em camadas com separação clara de domínios, services e repositórios.",
      "Ambiente conteinerizado com Docker e pipelines de CI/CD para padronizar build e deploy.",
      "Reconhecimento profissional como Destaque do Ano da empresa em 2024 e 2025 pelo impacto direto no produto e na operação.",
    ],
    technicalHighlightsEn: [
      "Lower infrastructure costs from consolidating the services.",
      "HTTP calls between consolidated modules replaced with in-application calls.",
      "Layered modular architecture with clear separation of domains, services, and repositories.",
      "Containerized environment with Docker and CI/CD pipelines standardizing build and deploy.",
      "Company Top Performer of the Year recognition in 2024 and 2025 for direct product and operations impact.",
    ],
    decisions: [
      {
        title: "Monólito Modular vs Microsserviços Distribuídos",
        titleEn: "Modular Monolith vs Distributed Microservices",
        benefit:
          "Operação centralizada e redução das chamadas de rede entre os domínios consolidados.",
        benefitEn:
          "Centralized operations and fewer network calls between the consolidated domains.",
        cost: "Exige rigor técnico contínuo em Code Review e Clean Architecture para evitar que limites de domínio se degradem com o tempo.",
        costEn: "Requires ongoing technical rigor in code review and Clean Architecture to keep domain boundaries from degrading over time.",
      },
      {
        title: "Consolidação de Bancos de Dados",
        titleEn: "Database Consolidation",
        benefit:
          "Modelagem relacional integrada e consultas diretas entre dados antes distribuídos em bases independentes.",
        benefitEn:
          "Integrated relational modeling and direct queries across data previously spread over standalone databases.",
        cost: "Complexidade inicial alta no plano de migração, limpeza de dados duplicados e compatibilidade de schemas.",
        costEn: "High upfront complexity in the migration plan, duplicate-data cleanup, and schema compatibility.",
      },
      {
        title: "Laravel 11 / PHP como Core Backend",
        titleEn: "Laravel 11 / PHP as Core Backend",
        benefit:
          "Ecossistema maduro com Eloquent ORM, filas, autenticação e validações prontas, acelerando a entrega com estabilidade.",
        benefitEn:
          "Mature ecosystem with Eloquent ORM, queues, authentication, and ready-made validations, speeding up delivery with stability.",
        cost: "Necessidade de migrar a base de código previamente distribuída em JavaScript/Node.js.",
        costEn: "The previously JavaScript/Node.js-distributed codebase had to be migrated.",
      },
    ],
    myRole:
      "Responsável técnico pela arquitetura e execução da consolidação: mapeamento dos 11 bancos legados, modelagem da nova base unificada, reescrita dos módulos de negócio de Node.js para Laravel, implementação de testes, padronização de Clean Code/SOLID e condução das janelas de migração em produção.",
    myRoleEn:
      "Technical lead for the consolidation's architecture and execution: mapping the 11 legacy databases, modeling the new unified base, rewriting business modules from Node.js to Laravel, implementing tests, Clean Code/SOLID standardization, and running production migration windows.",
    screenshots: [],
    architecture: {
      layers: [
        {
          label: "Frontend Web & Mobile",
          description: "Aplicações em React e interfaces web consumindo APIs REST tipadas",
          descriptionEn: "React applications and web interfaces consuming typed REST APIs",
        },
        {
          label: "API REST Unificada (Laravel 11)",
          description:
            "Camada de domínio modular com Controllers, Form Requests, Services e Repositories",
          descriptionEn:
            "Modular domain layer with Controllers, Form Requests, Services, and Repositories",
        },
        {
          label: "Regras de Negócio & Serviços Modulares",
          labelEn: "Business Rules & Modular Services",
          description:
            "Módulos de autenticação, faturamento, integrações com portais públicos e automações",
          descriptionEn:
            "Authentication, billing, public-portal integration, and automation modules",
        },
        {
          label: "Bancos Consolidados (PostgreSQL / SQL Server)",
          labelEn: "Consolidated Databases (PostgreSQL / SQL Server)",
          description:
            "Persistência relacional dos módulos consolidados e migração das bases legadas",
          descriptionEn:
            "Relational persistence for the consolidated modules and legacy database migration",
        },
      ],
      infrastructureTitle: "Docker + CI/CD na Nuvem",
      infrastructureTitleEn: "Docker + Cloud CI/CD",
      infrastructureServices: [
        "Docker",
        "AWS",
        "CI/CD Automatizado",
        "Nginx",
        "PostgreSQL / SQL Server",
      ],
      infrastructureServicesEn: [
        "Docker",
        "AWS",
        "Automated CI/CD",
        "Nginx",
        "PostgreSQL / SQL Server",
      ],
    },
    sourceNote:
      "Projeto corporativo proprietário da READI — regras de negócio, dados e código-fonte são confidenciais e protegidos por sigilo contratual.",
    sourceNoteEn:
      "READI proprietary corporate project — business rules, data, and source code are confidential and protected by contractual secrecy.",
  },
  {
    title: "Investidor",
    slug: "investidor",
    kind: "product",
    category: "Fintech & Dados Financeiros",
    categoryEn: "Fintech & Financial Data",
    featured: true,
    featuredOrder: 2,
    status: "Demonstração online · acesso por código de teste",
    statusEn: "Live demo · access with test code",
    shortDescription:
      "Plataforma de investimentos que reúne carteira, renda e análise de empresas, com API própria para integrar e normalizar fontes de dados financeiros.",
    shortDescriptionEn:
      "Investment platform bringing together portfolio, income, and company analysis, with a proprietary API that integrates and normalizes financial data sources.",
    fullDescription:
      "Produto autoral para acompanhar carteira, renda e patrimônio, consultar empresas e analisar dividendos e referências de valuation. Uma API própria integra e normaliza dados financeiros externos para a aplicação.",
    fullDescriptionEn:
      "Authored product for tracking portfolio, income, and net worth, researching companies, and analyzing dividends and valuation references. A proprietary API integrates and normalizes external financial data for the application.",
    image: projectImageUrl("investidor", "valuation-empresa.png"),
    imageAlt: "Análise de empresa com métricas financeiras e referências de valuation Graham, Bazin e Damodaran",
    imageAltEn: "Company analysis with financial metrics and Graham, Bazin, and Damodaran valuation references",
    imageCaption:
      "Detalhe de empresa com referências Graham e Bazin e framework Damodaran que explicita completude e limitações dos dados.",
    imageCaptionEn:
      "Company detail with Graham and Bazin references and a Damodaran framework that makes data completeness and limitations explicit.",
    primaryTechnologies: [
      "Laravel",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "React Query",
    ],
    roleLabel: "Desenvolvimento Full Stack de produto autoral",
    roleLabelEn: "Full Stack development of an authored product",
    outcomeSummary:
      "Carteira, renda e análises financeiras reunidas em uma aplicação com acesso controlado.",
    outcomeSummaryEn:
      "Portfolio, income, and financial analysis brought together in one access-controlled application.",
    outcomes: [
      {
        title: "Visão financeira consolidada",
        titleEn: "Consolidated financial view",
        description:
          "Áreas para carteira, patrimônio, renda, dividendos, agenda, extrato e imposto de renda.",
        descriptionEn:
          "Sections for portfolio, net worth, income, dividends, calendar, statements, and income tax.",
      },
      {
        title: "Análise de empresas",
        titleEn: "Company analysis",
        description:
          "Busca global e detalhes de empresas com indicadores, dividendos e ferramentas de valuation.",
        descriptionEn:
          "Global search and company details with indicators, dividends, and valuation tools.",
      },
      {
        title: "Integrações acompanhadas",
        titleEn: "Monitored integrations",
        description:
          "API própria para integrar e normalizar fontes externas, com monitoramento de disponibilidade e alterações de contrato.",
        descriptionEn:
          "Proprietary API to integrate and normalize external sources, with uptime and contract-change monitoring.",
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
    projectUrlLabelEn: "View live app",
    sourceNote: "Código-fonte privado. Projeto autoral.",
    sourceNoteEn: "Private source code. Authored project.",
    accessNote: "Para acessar a demonstração, abra a aplicação e informe o código de teste 11111111.",
    accessNoteEn: "To access the demo, open the app and enter test code 11111111.",
    brief: [
      {
        label: "Problema",
        labelEn: "Problem",
        text: "Dados de carteira, dividendos, empresas e análises financeiras ficam distribuídos entre diferentes fontes e ferramentas, dificultando uma visão consolidada do patrimônio e da geração de renda.",
        textEn: "Portfolio, dividend, company, and financial analysis data is scattered across sources and tools, making a consolidated view of net worth and income generation difficult.",
      },
      {
        label: "Decisão",
        labelEn: "Decision",
        text: "Centralizar integrações em uma API Laravel responsável pelo controle de acesso, normalização e orquestração de provedores externos, mantendo o frontend React desacoplado das particularidades de cada fonte.",
        textEn: "Centralize integrations in a Laravel API responsible for access control, normalization, and orchestration of external providers, keeping the React frontend decoupled from each source's particularities.",
      },
      {
        label: "Trade-off",
        labelEn: "Trade-off",
        text: "A dependência de provedores externos demanda considerar indisponibilidades, cache, renovação de credenciais e mudanças de contrato, além do isolamento cuidadoso de dados sensíveis.",
        textEn: "Relying on external providers requires handling outages, caching, credential rotation, and contract changes, plus careful isolation of sensitive data.",
      },
      {
        label: "Entrega",
        labelEn: "Delivery",
        text: "Aplicação Full Stack responsiva com acompanhamento de renda e patrimônio, análise de empresas, dividendos, agenda, extrato, imposto de renda e ferramentas de valuation.",
        textEn: "Responsive Full Stack application tracking income and net worth, with company analysis, dividends, calendar, statements, income tax, and valuation tools.",
      },
    ],
    context:
      "Informações de carteira, renda, empresas e análises financeiras chegam de fontes distintas. O produto reúne essas áreas em uma aplicação e concentra a integração com provedores externos em uma API própria.",
    contextEn:
      "Portfolio, income, company, and financial analysis information comes from distinct sources. The product brings these areas together in one application and concentrates external-provider integration in a proprietary API.",
    solution:
      "O frontend em React e TypeScript consome uma API REST Laravel por meio de Axios e usa TanStack React Query para estado remoto e cache. A API concentra o gate de acesso, a normalização e a orquestração das integrações externas, protegendo o frontend das particularidades de cada provedor. Para fluxos autenticados que dependem de interfaces externas, automações com Node.js, Chromium e Puppeteer são executadas no backend para manter atualizadas as credenciais necessárias às integrações. As atualizações são aplicadas ao runtime da API, sem expor os valores completos ao frontend; os processos têm timeouts e as falhas retornam mensagens da API, não a saída completa dos processos.\n\nA aplicação reúne acompanhamento de carteira, patrimônio e renda, consulta de empresas, dividendos, agenda, extrato, imposto de renda e ferramentas de análise. O framework baseado em metodologias de Damodaran classifica empresas, avalia completude e apresenta métricas e riscos; não calcula um valor numérico completo por DCF.",
    solutionEn:
      "The React + TypeScript frontend consumes a Laravel REST API through Axios and uses TanStack React Query for remote state and caching. The API concentrates the access gate, normalization, and orchestration of external integrations, shielding the frontend from each provider's particularities. For authenticated flows that depend on external interfaces, Node.js + Chromium + Puppeteer automations run on the backend to keep integration credentials fresh. Updates are applied to the API runtime without exposing full values to the frontend; processes have timeouts, and failures return API messages rather than full process output.\n\nThe application brings together portfolio, net worth, and income tracking, company research, dividends, calendar, statements, income tax, and analysis tools. The Damodaran-methodology-based framework classifies companies, assesses completeness, and presents metrics and risks; it does not compute a full numeric DCF value.",
    technicalChallenges: [
      "Integrar fontes financeiras externas e normalizar os dados para consumo por áreas distintas da aplicação.",
      "Tratar indisponibilidade, cache e alterações nos contratos das integrações sem acoplar o frontend às respostas dos provedores.",
      "Automatizar fluxos autenticados e manter credenciais de integração atualizadas no backend sem expor segredos ao frontend.",
      "Separar sessões e dados do modo de demonstração do ambiente principal.",
      "Explicitar a completude e as limitações dos dados nas análises de valuation.",
    ],
    technicalChallengesEn: [
      "Integrating external financial sources and normalizing data for consumption by distinct application areas.",
      "Handling outages, caching, and integration contract changes without coupling the frontend to provider responses.",
      "Automating authenticated flows and keeping integration credentials fresh on the backend without exposing secrets to the frontend.",
      "Separating demo-mode sessions and data from the main environment.",
      "Making data completeness and limitations explicit in valuation analyses.",
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
    technicalHighlightsEn: [
      "Laravel API as the orchestration and normalization layer for multiple financial sources.",
      "Authenticated-flow automation with Chromium/Puppeteer for controlled upkeep of integration credentials.",
      "Applied security in authenticated integrations, with credential management and secret protection.",
      "Access gate with temporary Bearer tokens, rate limiting, and session revocation.",
      "Isolated demo sessions, separating data and configuration from the main environment.",
      "Uptime and contract/schema-change monitoring on external integrations.",
      "Valuation tools with Graham and Bazin, plus a Damodaran-methodology-based classification and completeness-analysis framework.",
      "Automated backend and frontend suites covering integrations, contracts, valuation rules, and critical flows.",
    ],
    decisions: [
      {
        title: "API própria como camada de integração",
        titleEn: "Proprietary API as integration layer",
        benefit:
          "Centraliza autenticação, normalização e orquestração, mantendo o frontend desacoplado dos contratos externos.",
        benefitEn:
          "Centralizes authentication, normalization, and orchestration, keeping the frontend decoupled from external contracts.",
        cost:
          "A camada precisa lidar com indisponibilidade, cache, renovação de credenciais e mudanças nos contratos dos provedores.",
        costEn:
          "The layer must handle outages, caching, credential rotation, and provider contract changes.",
      },
      {
        title: "Acesso controlado com sessões isoladas de demonstração",
        titleEn: "Controlled access with isolated demo sessions",
        benefit:
          "Tokens temporários, revogação e isolamento permitem controlar o acesso e separar os dados e as configurações da demonstração.",
        benefitEn:
          "Temporary tokens, revocation, and isolation control access and separate demo data and configuration.",
        cost:
          "O gate de acesso não substitui um sistema tradicional de identidade e exige cuidado com o ciclo de vida das sessões.",
        costEn:
          "The access gate does not replace a traditional identity system and requires care with session lifecycles.",
      },
      {
        title: "Framework Damodaran orientado à completude",
        titleEn: "Completeness-oriented Damodaran framework",
        benefit:
          "Classificação, métricas, métodos aplicáveis e riscos podem ser apresentados sem ocultar limitações dos dados disponíveis.",
        benefitEn:
          "Classification, metrics, applicable methods, and risks can be presented without hiding available-data limitations.",
        cost:
          "O framework ainda não calcula um valor intrínseco numérico completo por DCF/NAV/FCFE.",
        costEn:
          "The framework does not yet compute a full numeric intrinsic value via DCF/NAV/FCFE.",
      },
    ],
    myRole:
      "Desenvolvimento Full Stack do produto: arquitetura da API Laravel e integração com provedores financeiros, automação de fluxos autenticados, construção da interface React, modelagem de dados, controle de acesso, segurança aplicada, monitoramento das integrações, testes e infraestrutura Docker.",
    myRoleEn:
      "Full Stack product development: Laravel API architecture and financial-provider integration, authenticated-flow automation, React interface construction, data modeling, access control, applied security, integration monitoring, testing, and Docker infrastructure.",
    screenshots: [
      {
        src: projectImageUrl("investidor", "valuation-empresa.png"),
        alt: "Análise de empresa com métricas financeiras e referências de valuation Graham, Bazin e Damodaran",
        altEn: "Company analysis with financial metrics and Graham, Bazin, and Damodaran valuation references",
        caption:
          "Detalhe de empresa com referências Graham e Bazin e framework Damodaran que explicita completude e limitações dos dados.",
        captionEn:
          "Company detail with Graham and Bazin references and a Damodaran framework that makes data completeness and limitations explicit.",
      },
      {
        src: projectImageUrl("investidor", "analise-detalhadas-empresas.png"),
        alt: "Detalhe de empresa com indicadores, abas de análise e referências de preço",
        altEn: "Company detail with indicators, analysis tabs, and price references",
        caption:
          "Visão da empresa com indicadores e navegação entre áreas de análise financeira.",
        captionEn:
          "Company view with indicators and navigation across financial analysis areas.",
      },
      {
        src: projectImageUrl("investidor", "analise-compra-empresa.png"),
        alt: "Análise de empresa com critérios avaliados, cobertura dos dados e riscos",
        altEn: "Company analysis with evaluated criteria, data coverage, and risks",
        caption:
          "Análise orientada a renda que apresenta critérios, cobertura e riscos do recorte avaliado.",
        captionEn:
          "Income-oriented analysis presenting the evaluated slice's criteria, coverage, and risks.",
      },
      {
        src: projectImageUrl("investidor", "analise-ia-empresas.png"),
        alt: "Análise detalhada de empresa com critérios financeiros e indicadores",
        altEn: "Detailed company analysis with financial criteria and indicators",
        caption:
          "Visão analítica de uma empresa com critérios financeiros e indicadores organizados por seção.",
        captionEn:
          "Analytical view of a company with financial criteria and indicators organized by section.",
      },
      {
        src: projectImageUrl("investidor", "projecao-pagamento-dividendos.png"),
        alt: "Histórico anual de dividendos e projeção mensal de uma empresa",
        altEn: "Annual dividend history and monthly projection for a company",
        caption:
          "Consulta de histórico anual e projeções de dividendos no detalhe de uma empresa.",
        captionEn:
          "Annual history lookup and dividend projections in a company detail view.",
      },
      {
        src: projectImageUrl("investidor", "empresas-recomentadas-valores.png"),
        alt: "Empresas recomendadas com quantidades sugeridas e indicadores financeiros",
        altEn: "Recommended companies with suggested quantities and financial indicators",
        caption:
          "Empresas recomendadas com quantidades e valores apresentados para apoiar a análise de aporte.",
        captionEn:
          "Recommended companies with quantities and values shown to support contribution analysis.",
      },
    ],
    architecture: {
      layers: [
        {
          label: "React 19 + TypeScript",
          description:
            "Interface responsiva com TanStack React Query, Axios e Recharts",
          descriptionEn:
            "Responsive interface with TanStack React Query, Axios, and Recharts",
        },
        {
          label: "REST / Axios",
          description: "Comunicação entre a aplicação e a API própria",
          descriptionEn: "Communication between the application and the proprietary API",
        },
        {
          label: "Laravel 13 API",
          description:
            "Gate de acesso, regras da aplicação e orquestração",
          descriptionEn:
            "Access gate, application rules, and orchestration",
        },
        {
          label: "Services e integrações",
          labelEn: "Services and integrations",
          description:
            "Normalização de dados, integração com provedores e automação de fluxos autenticados",
          descriptionEn:
            "Data normalization, provider integration, and authenticated-flow automation",
        },
        {
          label: "APIs financeiras externas",
          labelEn: "External financial APIs",
          description: "Múltiplas fontes de dados financeiros",
          descriptionEn: "Multiple financial data sources",
        },
        {
          label: "PostgreSQL 16 + cache",
          description: "Persistência e suporte às integrações e sessões",
          descriptionEn: "Persistence and support for integrations and sessions",
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
    categoryEn: "Full-Stack Workspace",
    featured: false,
    status: "Aplicação online disponível",
    statusEn: "Live app available",
    shortDescription:
      "Workspace full-stack Next.js 14 + PostgreSQL para organizar Epics em Markdown, Kanban, diagrama interativo e modelagem DBML, com integração Jira criptografada e deploy Docker.",
    shortDescriptionEn:
      "Full-stack Next.js 14 + PostgreSQL workspace for organizing Epics in Markdown, Kanban, interactive diagrams, and DBML modeling, with encrypted Jira integration and Docker deploy.",
    fullDescription:
      "Aplicação Next.js 14 / React 18 / TypeScript com 4 visualizações sincronizadas por Epic: editor Markdown, Kanban drag-and-drop, diagrama de cards em canvas Konva e modelador de banco DBML com layout automático. Backend em Route Handlers + Prisma + PostgreSQL com operações transacionais, import/export com remapeamento de IDs e undo. Integração Jira por conta com cache e token AES-256-GCM, auth com modo visitante, 257 testes Vitest, CI de typecheck/lint/build e deploy Docker standalone.",
    fullDescriptionEn:
      "Next.js 14 / React 18 / TypeScript application with 4 synchronized views per Epic: Markdown editor, drag-and-drop Kanban, Konva canvas card diagram, and DBML database modeler with automatic layout. Backend in Route Handlers + Prisma + PostgreSQL with transactional operations, import/export with ID remapping and undo. Per-account Jira integration with caching and AES-256-GCM token, auth with guest mode, 257 Vitest tests, typecheck/lint/build CI, and standalone Docker deploy.",
    image: projectImageUrl("nexo", "banco-diagrama.png"),
    imageAlt: "Modelador DBML do Nexo com editor e canvas de tabelas, relações e cardinalidade",
    imageAltEn: "Nexo DBML modeler with editor and canvas of tables, relationships, and cardinality",
    imageCaption: "Visão banco do Epic: editor DBML com parser próprio ao lado do canvas de tabelas e relações.",
    imageCaptionEn: "Epic database view: DBML editor with a proprietary parser next to the tables-and-relationships canvas.",
    primaryTechnologies: ["Next.js", "React", "PostgreSQL", "Prisma"],
    roleLabel: "Arquitetura e desenvolvimento Full Stack",
    roleLabelEn: "Full Stack architecture and development",
    outcomeSummary: "Epics com 4 visualizações sincronizadas, backend transacional e integração Jira por conta.",
    outcomeSummaryEn: "Epics with 4 synchronized views, transactional backend, and per-account Jira integration.",
    outcomes: [
      {
        title: "4 visualizações por Epic",
        titleEn: "4 views per Epic",
        description: "Editor Markdown lado a lado, Kanban com dnd-kit, diagrama Konva e modelador DBML; a URL define a visualização ativa com layout persistente, seleção e autosave entre abas.",
        descriptionEn: "Side-by-side Markdown editor, dnd-kit Kanban, Konva diagram, and DBML modeler; the URL defines the active view with persistent layout, selection, and autosave across tabs.",
      },
      {
        title: "Backend transacional e dados portáteis",
        titleEn: "Transactional backend and portable data",
        description: "Route Handlers + Prisma + PostgreSQL com substituição transacional preservando IDs, import/export com remapeamento, undo de limpeza/substituição e backup completo em JSON.",
        descriptionEn: "Route Handlers + Prisma + PostgreSQL with ID-preserving transactional replacement, import/export with remapping, clear/replace undo, and full JSON backup.",
      },
      {
        title: "Integração Jira e operação",
        titleEn: "Jira integration and operations",
        description: "Importação de Epic + tasks em escrita aninhada, token AES-256-GCM, cache com revalidação, auth com modo visitante, 257 testes Vitest e deploy Docker standalone.",
        descriptionEn: "Epic + task import via nested writes, AES-256-GCM token, cache with revalidation, guest-mode auth, 257 Vitest tests, and standalone Docker deploy.",
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
    projectUrlLabelEn: "View live app",
    sourceNote: "Código-fonte privado.",
    sourceNoteEn: "Private source code.",
    brief: [
      {
        label: "Problema",
        labelEn: "Problem",
        text: "Organizar Epics com Markdown, Kanban, visão em diagrama e modelagem de banco sem perder contexto ao trocar de visualização, com dados consistentes e integração com o Jira.",
        textEn: "Organizing Epics across Markdown, Kanban, diagram views, and database modeling without losing context when switching views, with consistent data and Jira integration.",
      },
      {
        label: "Decisão",
        labelEn: "Decision",
        text: "Rota por visualização (/epics/[projectId]/normal|cards|diagrama|banco) com layout persistente, backend em Route Handlers + Prisma + PostgreSQL com operações transacionais e canvas Konva com import dinâmico.",
        textEn: "Per-view routing (/epics/[projectId]/normal|cards|diagrama|banco) with persistent layout, backend in Route Handlers + Prisma + PostgreSQL with transactional operations, and Konva canvas with dynamic imports.",
      },
      {
        label: "Trade-off",
        labelEn: "Trade-off",
        text: "Mais superfície de UI em troca de disciplina em autosave com fila e retry, geometria de diagramas isolada de React e validação de lote por escopo.",
        textEn: "More UI surface in exchange for discipline in queued autosave with retry, React-isolated diagram geometry, and scoped batch validation.",
      },
      {
        label: "Entrega",
        labelEn: "Delivery",
        text: "Workspace com editor Markdown lado a lado, Kanban drag-and-drop, diagrama de cards com zoom, pan, conexões e minimapa, além de modelador DBML com parser próprio e layout automático.",
        textEn: "Workspace with side-by-side Markdown editor, drag-and-drop Kanban, card diagram with zoom, pan, connections, and minimap, plus a DBML modeler with proprietary parser and automatic layout.",
      },
    ],
    decisions: [
      {
        title: "URL define a visualização ativa",
        titleEn: "URL defines the active view",
        benefit: "Cada visão (normal, cards, diagrama, banco) é navegável e compartilhável, com layout persistente entre trocas de aba.",
        benefitEn: "Each view (normal, cards, diagram, database) is navigable and shareable, with persistent layout across tab switches.",
        cost: "O layout precisa preservar seleção, edição e autosave ao navegar entre rotas do mesmo Epic.",
        costEn: "The layout must preserve selection, editing, and autosave when navigating between routes of the same Epic.",
      },
      {
        title: "Substituição transacional preservando IDs",
        titleEn: "ID-preserving transactional replacement",
        benefit: "PUT /api/items com replaceProjectId evita o anti-padrão delete+recreate em N requests e mantém referências íntegras.",
        benefitEn: "PUT /api/items with replaceProjectId avoids the delete+recreate anti-pattern across N requests and keeps references intact.",
        cost: "Exige validação de lote por escopo e operações atômicas no Prisma.",
        costEn: "Requires scoped batch validation and atomic Prisma operations.",
      },
      {
        title: "Konva com import dinâmico e geometria pura",
        titleEn: "Konva with dynamic import and pure geometry",
        benefit: "Reduz o first-load e mantém cálculo de geometria e roteamento testável sem canvas.",
        benefitEn: "Reduces first-load and keeps geometry and routing computation testable without canvas.",
        cost: "Exige camada separada entre modelo geométrico e renderização no canvas.",
        costEn: "Requires a separate layer between the geometric model and canvas rendering.",
      },
    ],
    context:
      "Epics ficavam distribuídos entre Markdown, quadros e diagramas de banco desconectados, com importação manual do Jira e risco de divergência ao trocar de ferramenta. O Nexo centraliza Epic, cards Markdown, Kanban, diagrama visual e modelagem DBML na mesma base PostgreSQL, com navegação por URL e persistência entre trocas de aba.",
    contextEn:
      "Epics were scattered across disconnected Markdown, boards, and database diagrams, with manual Jira imports and divergence risk when switching tools. Nexo centralizes Epics, Markdown cards, Kanban, visual diagrams, and DBML modeling in the same PostgreSQL base, with URL navigation and persistence across tab switches.",
    solution:
      "No frontend em Next.js 14 e React 18, a rota base lista os Epics e /epics/[projectId]/normal|cards|diagrama|banco define a visualização ativa. O layout persistente mantém seleção, edição e autosave entre abas: editor + preview Markdown lado a lado com colunas redimensionáveis, Kanban com @dnd-kit/sortable, canvas de cards com Konva (zoom, pan, conexões e minimapa) e modelagem DBML com parser próprio, canvas de tabelas/relações/cardinalidade, inspector e layout automático. Konva usa import dinâmico, temas light/dark são compartilhados entre HTML e canvas, e a UI usa ConfirmModal com focus-trap e toasts acessíveis.\n\nNo backend em Route Handlers + Prisma + PostgreSQL, o modelo usa Project 1-N MarkdownItem e 1-1 DatabaseDiagram, com índices compostos [projectId, order] e [userId, order] e cascade delete. PUT /api/items com replaceProjectId faz substituição transacional preservando IDs, e GET /api/diagrams/[projectId] não cria registro colateral. Import/export remapeia IDs com undo e backup completo em JSON, com ordenação por max(order)+1. A integração Jira por conta usa token AES-256-GCM, lista Epics com hierarchyLevel=1, pagina filhas por parent e usa cache in-memory de 5min com stale-while-revalidate até 15min.",
    solutionEn:
      "On the Next.js 14 + React 18 frontend, the base route lists Epics and /epics/[projectId]/normal|cards|diagrama|banco defines the active view. The persistent layout keeps selection, editing, and autosave across tabs: side-by-side Markdown editor + preview with resizable columns, Kanban with @dnd-kit/sortable, card canvas with Konva (zoom, pan, connections, minimap), and DBML modeling with a proprietary parser, tables/relationships/cardinality canvas, inspector, and automatic layout. Konva uses dynamic imports, light/dark themes are shared between HTML and canvas, and the UI uses a focus-trapped ConfirmModal and accessible toasts.\n\nOn the Route Handlers + Prisma + PostgreSQL backend, the model uses Project 1-N MarkdownItem and 1-1 DatabaseDiagram, with composite [projectId, order] and [userId, order] indexes and cascade delete. PUT /api/items with replaceProjectId performs ID-preserving transactional replacement, and GET /api/diagrams/[projectId] creates no collateral record. Import/export remaps IDs with undo and full JSON backup, ordering by max(order)+1. The per-account Jira integration uses an AES-256-GCM token, lists Epics with hierarchyLevel=1, paginates children by parent, and uses a 5-minute in-memory cache with stale-while-revalidate up to 15 minutes.",
    technicalChallenges: [
      "Sincronizar 4 visualizações do mesmo Epic mantendo seleção, edição e autosave ao trocar de rota.",
      "Modelar DBML com parser próprio, canvas de tabelas/relações/cardinalidade e layout automático testável sem canvas.",
      "Garantir substituição transacional de itens preservando IDs sem o anti-padrão delete+recreate em N requests.",
      "Integrar o Jira por conta com token criptografado, paginação por parent, cache com revalidação e importação aninhada.",
      "Isolar projetos por userId com sessão própria, guest mode com limites e fronteira de acesso nas rotas internas.",
      "Manter first-load enxuto com import dinâmico do Konva e acessibilidade com focus-trap, retorno de foco e teclado.",
    ],
    technicalChallengesEn: [
      "Synchronizing 4 views of the same Epic while preserving selection, editing, and autosave across route changes.",
      "Modeling DBML with a proprietary parser, tables/relationships/cardinality canvas, and canvas-free testable automatic layout.",
      "Guaranteeing ID-preserving transactional item replacement without the delete+recreate anti-pattern across N requests.",
      "Integrating per-account Jira with encrypted token, per-parent pagination, revalidating cache, and nested import.",
      "Isolating projects by userId with proprietary sessions, limited guest mode, and access boundaries on internal routes.",
      "Keeping first-load lean with dynamic Konva imports and accessibility via focus trap, focus return, and keyboard support.",
    ],
    technicalHighlights: [
      "Autosave com fila, retry e preservação de snapshot com erro.",
      "Ordenação por max(order)+1 e validação de lote por escopo em transações Prisma.",
      "Geometria e roteamento de diagramas isolados de React.",
      "Criptografia AES-256-GCM derivada de AUTH_SECRET com isolamento por conta.",
      "Design system Venture com tokens --ui-* e temas compartilhados entre HTML e canvas Konva.",
      "257 testes em 36 arquivos Vitest + Testing Library + fake-indexeddb, com typecheck + lint + build verdes.",
    ],
    technicalHighlightsEn: [
      "Autosave with queue, retry, and error snapshot preservation.",
      "Ordering by max(order)+1 and scoped batch validation in Prisma transactions.",
      "Diagram geometry and routing isolated from React.",
      "AUTH_SECRET-derived AES-256-GCM encryption with per-account isolation.",
      "Venture design system with --ui-* tokens and themes shared between HTML and Konva canvas.",
      "257 tests across 36 Vitest + Testing Library + fake-indexeddb files, with green typecheck + lint + build.",
    ],
    myRole:
      "Arquitetura e desenvolvimento full-stack: App Router com 4 visualizações por Epic, backend em Route Handlers + Prisma + PostgreSQL, parser DBML e geometria de diagramas, integração Jira com criptografia e cache, auth com guest mode, testes Vitest e deploy Docker standalone.",
    myRoleEn:
      "Full-stack architecture and development: App Router with 4 views per Epic, Route Handlers + Prisma + PostgreSQL backend, DBML parser and diagram geometry, Jira integration with encryption and caching, guest-mode auth, Vitest tests, and standalone Docker deploy.",
    screenshots: [
      {
        src: projectImageUrl("nexo", "banco-diagrama.png"),
        alt: "Modelador DBML do Nexo com editor e canvas de tabelas e relações",
        altEn: "Nexo DBML modeler with editor and tables-and-relationships canvas",
        caption: "Capa: editor DBML com parser próprio e canvas de tabelas, relações e cardinalidade.",
        captionEn: "Cover: DBML editor with proprietary parser and tables, relationships, and cardinality canvas.",
      },
      {
        src: projectImageUrl("nexo", "epics.png"),
        alt: "Lista de Epics do Nexo com acesso às visualizações",
        altEn: "Nexo Epic list with access to views",
        caption: "Rota base com listagem de Epics e acesso às 4 visualizações.",
        captionEn: "Base route listing Epics with access to the 4 views.",
      },
      {
        src: projectImageUrl("nexo", "normal-cards.png"),
        alt: "Editor Markdown lado a lado com preview no Nexo",
        altEn: "Side-by-side Markdown editor with preview in Nexo",
        caption: "Visão normal: editor + preview com colunas redimensionáveis e autosave.",
        captionEn: "Normal view: editor + preview with resizable columns and autosave.",
      },
      {
        src: projectImageUrl("nexo", "novo-bloco-markdown.png"),
        alt: "Criação de novo bloco Markdown no Nexo",
        altEn: "Creating a new Markdown block in Nexo",
        caption: "Criação de cards Markdown com status, observação e ordenação.",
        captionEn: "Markdown card creation with status, notes, and ordering.",
      },
      {
        src: projectImageUrl("nexo", "quadro-cards.png"),
        alt: "Quadro Kanban de cards do Nexo",
        altEn: "Nexo card Kanban board",
        caption: "Visão cards: Kanban com drag-and-drop via dnd-kit.",
        captionEn: "Cards view: Kanban with drag-and-drop via dnd-kit.",
      },
      {
        src: projectImageUrl("nexo", "cards-diagramas.png"),
        alt: "Diagrama visual de cards do Nexo em canvas",
        altEn: "Nexo visual card diagram on canvas",
        caption: "Visão diagrama: canvas Konva com zoom, pan, conexões e minimapa.",
        captionEn: "Diagram view: Konva canvas with zoom, pan, connections, and minimap.",
      },
      {
        src: projectImageUrl("nexo", "integracao-jira.png"),
        alt: "Integração Jira do Nexo com importação de Epics",
        altEn: "Nexo Jira integration with Epic import",
        caption: "Importação de Epics e tasks do Jira por conta com token criptografado.",
        captionEn: "Per-account Jira Epic and task import with encrypted token.",
      },
      {
        src: projectImageUrl("nexo", "login.png"),
        alt: "Tela de login do Nexo no tema claro",
        altEn: "Nexo login screen in the light theme",
        caption: "Autenticação com sessão própria e modo visitante.",
        captionEn: "Authentication with proprietary session and guest mode.",
      },
      {
        src: projectImageUrl("nexo", "login-dark.png"),
        alt: "Tela de login do Nexo no tema escuro",
        altEn: "Nexo login screen in the dark theme",
        caption: "Tema dark compartilhado entre a interface e o canvas.",
        captionEn: "Dark theme shared between the interface and the canvas.",
      },
    ],
    architecture: {
      layers: [
        {
          label: "Next.js 14 / React 18",
          description: "App Router com 4 visualizações por Epic e layout persistente",
          descriptionEn: "App Router with 4 views per Epic and persistent layout",
        },
        {
          label: "Route Handlers + Prisma",
          description: "auth, projects, items, diagrams e jira com operações transacionais",
          descriptionEn: "auth, projects, items, diagrams, and jira with transactional operations",
        },
        {
          label: "PostgreSQL 16",
          description: "Project 1-N MarkdownItem e 1-1 DatabaseDiagram com índices por ordem",
          descriptionEn: "Project 1-N MarkdownItem and 1-1 DatabaseDiagram with order indexes",
        },
        {
          label: "Konva + dnd-kit + Markdown",
          description: "Canvas com import dinâmico, Kanban sortable e preview com GFM",
          descriptionEn: "Canvas with dynamic import, sortable Kanban, and GFM preview",
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
      infrastructureServicesEn: [
        "Next.js standalone",
        "PostgreSQL 16",
        "Docker multi-stage Node 24",
        "Healthcheck",
        "External volume and network",
      ],
    },
  },
  {
    title: "Vidora",
    slug: "vidora",
    kind: "technical-study",
    category: "Arquitetura distribuída",
    categoryEn: "Distributed architecture",
    featured: false,
    status: "Estudo técnico · código aberto",
    statusEn: "Technical study · open source",
    shortDescription:
      "Estudo de arquitetura distribuída para pesquisa de vídeos e favoritos, com API Gateway e serviços independentes.",
    shortDescriptionEn:
      "Distributed-architecture study for video search and favorites, with an API Gateway and standalone services.",
    brief: [
      {
        label: "Problema",
        labelEn: "Problem",
        text: "Autenticar usuários, consultar vídeos em uma API externa e manter favoritos individuais, com responsabilidades e persistência isoladas.",
        textEn: "Authenticating users, querying videos from an external API, and keeping per-user favorites, with isolated responsibilities and persistence.",
      },
      {
        label: "Decisão",
        labelEn: "Decision",
        text: "API Gateway como ponto único de entrada e serviços separados para autenticação, vídeos e favoritos.",
        textEn: "API Gateway as the single entry point with separate services for authentication, videos, and favorites.",
      },
      {
        label: "Trade-off",
        labelEn: "Trade-off",
        text: "Isolamento de responsabilidades em troca de maior complexidade operacional e comunicação distribuída.",
        textEn: "Responsibility isolation in exchange for greater operational complexity and distributed communication.",
      },
      {
        label: "O que eu faria diferente",
        labelEn: "What I'd do differently",
        text: "Para produção, usar uma biblioteca JWT mantida e Argon2 ou bcrypt para hashing de senha, em vez da implementação manual feita para estudo.",
        textEn: "For production, use a maintained JWT library and Argon2 or bcrypt for password hashing instead of the hand-rolled study implementation.",
      },
    ],
    fullDescription:
      "Aplicação Full Stack estruturada em microsserviços, com API Gateway como ponto único de entrada e serviços independentes responsáveis por autenticação, vídeos e favoritos. O projeto demonstra separação de responsabilidades, integração com API externa, persistência isolada, comunicação entre serviços e testes automatizados.",
    fullDescriptionEn:
      "Full Stack application structured as microservices, with an API Gateway as the single entry point and standalone services for authentication, videos, and favorites. The project demonstrates separation of concerns, external API integration, isolated persistence, inter-service communication, and automated tests.",
    image: projectImageUrl("vidora", "capa.png"),
    imageAlt: "Interface do Vidora com pesquisa de vídeos e ações para adicionar favoritos",
    imageAltEn: "Vidora interface with video search and add-to-favorites actions",
    imageCaption: "Interface do estudo técnico: pesquisa na YouTube Data API e favoritos por usuário.",
    imageCaptionEn: "Technical study interface: YouTube Data API search and per-user favorites.",
    primaryTechnologies: ["TypeScript", "Express", "PostgreSQL", "Docker"],
    roleLabel: "Arquitetura e desenvolvimento Full Stack",
    roleLabelEn: "Full Stack architecture and development",
    outcomeSummary: "Gateway, serviços e persistência isolada para explorar os custos da arquitetura distribuída.",
    outcomeSummaryEn: "Gateway, services, and isolated persistence to explore distributed-architecture costs.",
    outcomes: [
      {
        title: "Responsabilidades isoladas",
        titleEn: "Isolated responsibilities",
        description: "Gateway e serviços de autenticação, vídeos e favoritos com contratos HTTP explícitos.",
        descriptionEn: "Gateway and authentication, video, and favorites services with explicit HTTP contracts.",
      },
      {
        title: "Integração externa",
        titleEn: "External integration",
        description: "YouTube Data API normalizada por um Adapter, com timeout na comunicação entre serviços.",
        descriptionEn: "YouTube Data API normalized through an Adapter, with timeouts on inter-service calls.",
      },
      {
        title: "Ambiente reproduzível",
        titleEn: "Reproducible environment",
        description: "Docker Compose, documentação OpenAPI e testes com Jest para explorar os fluxos da aplicação.",
        descriptionEn: "Docker Compose, OpenAPI documentation, and Jest tests for exploring application flows.",
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
    contextEn:
      "Building a Full Stack application able to authenticate users, consume an external video API, and keep per-user favorites, while keeping responsibilities and persistence isolated across services.",
    solution:
      "Frontend SPA em Vanilla TypeScript com roteador via History API, store reativa baseada no padrão Observer e HttpClient com timeout e injeção de Bearer token.\n\nAPI Gateway como ponto único de entrada, encaminhando requisições para autenticação, vídeos e favoritos. O Video Service integra a YouTube Data API v3 e normaliza suas respostas com um Adapter.\n\nAuth Service e Favorites Service possuem bancos PostgreSQL independentes. O Video Service consulta a API externa, sem banco próprio. Os fluxos são cobertos por testes automatizados com Jest.",
    solutionEn:
      "Vanilla TypeScript SPA frontend with History API routing, an Observer-pattern reactive store, and an HttpClient with timeout and Bearer token injection.\n\nAPI Gateway as the single entry point, forwarding requests to authentication, videos, and favorites. The Video Service integrates YouTube Data API v3 and normalizes its responses with an Adapter.\n\nAuth Service and Favorites Service have standalone PostgreSQL databases. The Video Service queries the external API with no database of its own. Flows are covered by automated Jest tests.",
    technicalChallenges: [
      "Isolar responsabilidades e persistência entre serviços mantendo a comunicação distribuída compreensível.",
      "Integrar a YouTube Data API v3 normalizando respostas externas para o contrato interno da aplicação.",
      "Propagar autenticação Bearer do gateway aos serviços internos com timeout nas chamadas.",
      "Manter dois bancos PostgreSQL independentes, um para autenticação e outro para favoritos.",
      "Cobrir fluxos distribuídos com testes automatizados usando Jest e ts-jest.",
    ],
    technicalChallengesEn: [
      "Isolating responsibilities and persistence across services while keeping distributed communication understandable.",
      "Integrating YouTube Data API v3 by normalizing external responses into the application's internal contract.",
      "Propagating Bearer authentication from the gateway to internal services with call timeouts.",
      "Maintaining two standalone PostgreSQL databases, one for authentication and one for favorites.",
      "Covering distributed flows with automated tests using Jest and ts-jest.",
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
    technicalHighlightsEn: [
      "Microservices architecture with an API Gateway as the single entry point.",
      "Strict TypeScript in every service and in the Vanilla frontend (no frameworks).",
      "Custom SPA router with History API, protected routes, and 404 handling.",
      "Reactive store with the Observer pattern and centralized HttpClient with timeout.",
      "HTTP/REST communication in JSON with timeouts between services.",
      "YouTube Data API v3 integration normalized via Adapter.",
      "Per-service isolated PostgreSQL: vidora_auth and vidora_favoritos.",
      "JWT Bearer authentication on all protected routes.",
      "Automated tests with Jest and ts-jest.",
      "Complete Docker Compose environment with Swagger/OpenAPI documentation.",
      "Repository, Service, Controller, Factory, and Adapter patterns on the backend.",
    ],
    decisions: [
      {
        title: "Microsserviços",
        titleEn: "Microservices",
        benefit:
          "Isolamento de responsabilidades e possibilidade de evolução independente.",
        benefitEn:
          "Responsibility isolation and the possibility of independent evolution.",
        cost: "Maior complexidade operacional e comunicação distribuída.",
        costEn: "Greater operational complexity and distributed communication.",
      },
      {
        title: "REST",
        benefit: "Comunicação simples e explícita.",
        benefitEn: "Simple and explicit communication.",
        cost: "Acoplamento temporal entre serviços.",
        costEn: "Temporal coupling between services.",
      },
      {
        title: "Banco por serviço",
        titleEn: "Database per service",
        benefit: "Isolamento de dados.",
        benefitEn: "Data isolation.",
        cost: "Maior complexidade operacional.",
        costEn: "Greater operational complexity.",
      },
      {
        title: "Express",
        benefit: "Controle explícito e arquitetura leve.",
        benefitEn: "Explicit control and lightweight architecture.",
        cost: "Mais configuração manual.",
        costEn: "More manual configuration.",
      },
    ],
    authNote:
      "A autenticação implementa JWT manualmente com HMAC-SHA256 e Base64Url, e as senhas utilizam SHA-256 com salt aleatório. Essa implementação tem finalidade de estudo do mecanismo e não é recomendada para produção, onde seriam preferíveis soluções consolidadas e algoritmos adequados para hashing de senha, como Argon2 ou bcrypt, além de bibliotecas mantidas para JWT.",
    authNoteEn:
      "Authentication implements JWT by hand with HMAC-SHA256 and Base64Url, and passwords use SHA-256 with random salt. This implementation exists to study the mechanism and is not recommended for production, where established solutions and proper password-hashing algorithms such as Argon2 or bcrypt are preferable, along with maintained JWT libraries.",
    myRole:
      "Desenvolvimento Full Stack do projeto: definição da arquitetura, desenvolvimento do frontend, dos serviços backend, do API Gateway, da comunicação entre serviços, da autenticação, da persistência, da integração com API externa, dos testes, do ambiente Docker e da documentação da API.",
    myRoleEn:
      "Full Stack project development: architecture definition, frontend development, backend services, API Gateway, inter-service communication, authentication, persistence, external API integration, tests, Docker environment, and API documentation.",
    screenshots: [],
    architecture: {
      layers: [
        {
          label: "Frontend (Vite + Vanilla TypeScript)",
          description: "SPA sem frameworks, roteador próprio e store reativa",
          descriptionEn: "Framework-free SPA with custom router and reactive store",
        },
        {
          label: "HTTP / REST",
          description: "Comunicação em JSON com o ponto único de entrada",
          descriptionEn: "JSON communication with the single entry point",
        },
        {
          label: "API Gateway :3000",
          description: "Ponto único de entrada, encaminha aos serviços internos",
          descriptionEn: "Single entry point, forwarding to internal services",
        },
      ],
      services: [
        {
          name: "Auth Service :3001",
          description: "Registro, login, consulta de usuário e autenticação",
          descriptionEn: "Signup, login, user lookup, and authentication",
          dependency: "PostgreSQL vidora_auth",
        },
        {
          name: "Video Service :3002",
          description: "Pesquisa, consulta e normalização de vídeos",
          descriptionEn: "Video search, lookup, and normalization",
          dependency: "YouTube Data API v3",
        },
        {
          name: "Favorites Service :3003",
          description: "Adicionar, remover, listar e verificar favoritos",
          descriptionEn: "Add, remove, list, and check favorites",
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
    categoryEn: "Web app · Payments & integrations",
    featured: false,
    status: "Aplicação de evento · online",
    statusEn: "Event app · online",
    shortDescription:
      "Aplicação web para casamento com confirmação de presença, lista de presentes, carrinho, pagamentos e persistência de mensagens dos convidados.",
    shortDescriptionEn:
      "Wedding web app with RSVP, gift registry, cart, payments, and guest-message persistence.",
    fullDescription:
      "Aplicação responsiva para reunir informações do casamento, confirmação de presença, lista de presentes, carrinho e mensagens dos convidados.",
    fullDescriptionEn:
      "Responsive application gathering wedding information, RSVP, gift registry, cart, and guest messages.",
    image: projectImageUrl("bruna-e-eloan", "capa.png"),
    imageAlt: "Página inicial da aplicação Bruna & Eloan com informações do casamento",
    imageAltEn: "Bruna & Eloan app home page with wedding information",
    imageCaption: "Aplicação do evento com informações, confirmação de presença e lista de presentes.",
    imageCaptionEn: "Event application with information, RSVP, and gift registry.",
    primaryTechnologies: ["React", "TypeScript", "Supabase", "Mercado Pago"],
    roleLabel: "Desenvolvimento Full Stack e integrações",
    roleLabelEn: "Full Stack development and integrations",
    outcomeSummary: "Informações do evento, confirmações de presença e presentes em uma experiência integrada.",
    outcomeSummaryEn: "Event information, RSVPs, and gifts in one integrated experience.",
    outcomes: [
      {
        title: "Informações centralizadas",
        titleEn: "Centralized information",
        description: "Aplicação responsiva com detalhes e localização do evento para os convidados.",
        descriptionEn: "Responsive application with event details and venue location for guests.",
      },
      {
        title: "RSVP e mensagens",
        titleEn: "RSVP and messages",
        description: "Confirmações de presença e mensagens com persistência no Supabase.",
        descriptionEn: "RSVPs and messages persisted in Supabase.",
      },
      {
        title: "Fluxo de presentes",
        titleEn: "Gift flow",
        description: "Lista de presentes, cálculo do carrinho e redirecionamento ao checkout do provedor de pagamentos.",
        descriptionEn: "Gift registry, cart totals, and redirect to the payment provider's checkout.",
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
    projectUrlLabelEn: "View live app",
    githubUrl: "https://github.com/emffor/projeto_casamento_web",
    brief: [
      {
        label: "Problema",
        labelEn: "Problem",
        text: "Centralizar informações do casamento, confirmação de presença e lista de presentes em uma única experiência digital.",
        textEn: "Centralizing wedding information, RSVP, and gift registry in a single digital experience.",
      },
      {
        label: "Decisão",
        labelEn: "Decision",
        text: "Aplicação React integrada ao Supabase para confirmações e mensagens, com carrinho próprio e integração externa para o fluxo de pagamento.",
        textEn: "React application integrated with Supabase for RSVPs and messages, with a custom cart and external integration for the payment flow.",
      },
      {
        label: "Trade-off",
        labelEn: "Trade-off",
        text: "A solução priorizou simplicidade e entrega para um evento específico, utilizando serviços externos para persistência e processamento de pagamentos.",
        textEn: "The solution prioritized simplicity and delivery for a specific event, using external services for persistence and payment processing.",
      },
      {
        label: "Entrega",
        labelEn: "Delivery",
        text: "Aplicação utilizada como ponto central do evento, reunindo informações, RSVP, mensagens de convidados e lista de presentes.",
        textEn: "Application used as the event's central hub, bringing together information, RSVP, guest messages, and gift registry.",
      },
    ],
    context:
      "As informações do evento, as confirmações de presença e a lista de presentes foram reunidas em uma aplicação web responsiva.",
    contextEn:
      "Event information, RSVPs, and the gift registry were brought together in a responsive web application.",
    solution:
      "O site apresenta as informações e localização do evento, recebe confirmações e mensagens dos convidados com persistência no Supabase, e oferece lista de presentes com carrinho. O fluxo de checkout envia os itens a uma API externa e redireciona para a URL de pagamento retornada.",
    solutionEn:
      "The site presents event information and venue location, collects guest RSVPs and messages persisted in Supabase, and offers a gift registry with cart. The checkout flow sends items to an external API and redirects to the returned payment URL.",
    technicalChallenges: [
      "Persistir confirmações de presença e consultar mensagens dos convidados usando o Supabase.",
      "Calcular quantidades e total do carrinho e iniciar checkout por meio da API de pagamentos.",
    ],
    technicalChallengesEn: [
      "Persisting RSVPs and querying guest messages using Supabase.",
      "Computing cart quantities and totals and starting checkout through the payments API.",
    ],
    myRole:
      "Desenvolvimento da aplicação web, experiência responsiva, fluxo de RSVP, persistência com Supabase, lista de presentes, carrinho e integração do checkout.",
    myRoleEn:
      "Web application development, responsive experience, RSVP flow, Supabase persistence, gift registry, cart, and checkout integration.",
    screenshots: [
      {
        src: projectImageUrl("bruna-e-eloan", "presentes.png"),
        alt: "Lista de presentes com cards de itens e acesso ao carrinho",
        altEn: "Gift registry with item cards and cart access",
        caption: "Lista de presentes, com opção de adicionar itens ao carrinho.",
        captionEn: "Gift registry, with the option to add items to the cart.",
      },
      {
        src: projectImageUrl("bruna-e-eloan", "confirmar.png"),
        alt: "Formulário de confirmação de presença com nome, e-mail, telefone, convidados e mensagem",
        altEn: "RSVP form with name, email, phone, guests, and message",
        caption: "Formulário de RSVP e mensagem para os noivos.",
        captionEn: "RSVP form and message for the couple.",
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
