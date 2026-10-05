import type { Locale } from "./locale";

export interface NavDictItem {
  label: string;
  href: string;
}

export interface ChromeDict {
  skipLink: string;
  brandAria: string;
  nav: readonly NavDictItem[];
  navPrimaryAria: string;
  navMobileAria: string;
  menuOpenAria: string;
  menuCloseAria: string;
  themeToLightAria: string;
  themeToDarkAria: string;
  hero: {
    eyebrowPrefix: string;
    viewProjects: string;
    contact: string;
    viewResume: string;
  };
  featured: {
    tag: string;
    title: string;
    description: string;
  };
  additional: {
    tag: string;
    title: string;
    description: string;
  };
  card: {
    roleLabel: string;
    contextLabel: string;
    deliverableLabel: string;
    studyFocusLabel: string;
    exploreCase: string;
    exploreCaseAriaPrefix: string;
    demoFallback: string;
    demoAriaMiddle: string;
    demoAriaSuffix: string;
    githubAriaPrefix: string;
    githubAriaSuffix: string;
  };
  demo: {
    howTo: string;
    email: string;
    password: string;
  };
  timeline: {
    tag: string;
    title: string;
    description: string;
    emptyFallback: string;
    linkedinCta: string;
    otherResponsibilities: string;
    groupProduct: string;
    groupProductSingle: string;
    groupClient: string;
    externalSuffix: string;
    education: string;
    languages: string;
    techAriaPrefix: string;
  };
  skills: {
    tag: string;
    title: string;
    description: string;
  };
  contact: {
    tag: string;
    title: string;
    intro: string;
    cardTitle: string;
    cardText: string;
    viewResume: string;
  };
  copyEmail: {
    copy: string;
    copying: string;
    success: string;
    error: string;
  };
  footer: {
    resume: string;
  };
  kindLabels: {
    product: string;
    modernization: string;
    technicalStudy: string;
  };
  casePage: {
    back: string;
    backAria: string;
    roleLabel: string;
    contextLabel: string;
    navTitle: string;
    briefTitle: string;
    roleSection: string;
    deliverables: string;
    deliverablesSubDefault: string;
    deliverablesSubStudy: string;
    contextSection: string;
    solutionSection: string;
    challengesSection: string;
    otherHighlights: string;
    decisionsSection: string;
    benefitPrefix: string;
    costPrefix: string;
    authNoteTitle: string;
    limitsTitle: string;
    stackTitle: string;
    stackAria: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    prevCase: string;
    nextCase: string;
    githubButton: string;
  };
  gallery: {
    sectionAria: string;
    title: string;
    hint: string;
    enlargePrefix: string;
    dialogAria: string;
    screenWord: string;
    closeAria: string;
    prevAria: string;
    nextAria: string;
  };
  architecture: {
    title: string;
    sectionAria: string;
    infraFallback: string;
  };
  resumePage: {
    title: string;
    back: string;
    docButton: string;
    docAria: string;
    docHint: string;
    contactAria: string;
    summary: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    recognitionPrefix: string;
  };
}

const pt: ChromeDict = {
  skipLink: "Pular para o conteúdo principal",
  brandAria: "Ir para o início do portfólio",
  nav: [
    { label: "Sobre", href: "/#sobre" },
    { label: "Projetos", href: "/#projetos" },
    { label: "Experiência", href: "/#experiencia" },
    { label: "Tecnologias", href: "/#tecnologias" },
    { label: "Contato", href: "/#contato" },
    { label: "Currículo", href: "/curriculo" },
  ],
  navPrimaryAria: "Navegação Principal",
  navMobileAria: "Navegação móvel",
  menuOpenAria: "Abrir menu principal",
  menuCloseAria: "Fechar menu principal",
  themeToLightAria: "Alternar para tema claro",
  themeToDarkAria: "Alternar para tema escuro",
  hero: {
    eyebrowPrefix: "Desenvolvimento de software · Desde ",
    viewProjects: "Ver projetos",
    contact: "Entrar em contato",
    viewResume: "Ver currículo",
  },
  featured: {
    tag: "Trabalhos selecionados",
    title: "Projetos selecionados",
    description:
      "Produtos autorais e engenharia em produção. Cada case apresenta o problema, minha contribuição, as entregas e os trade-offs da solução.",
  },
  additional: {
    tag: "Outros trabalhos",
    title: "Projetos adicionais",
    description:
      "Ferramentas, estudos técnicos e outras aplicações para explorar minhas implementações.",
  },
  card: {
    roleLabel: "Minha atuação",
    contextLabel: "Contexto do projeto",
    deliverableLabel: "Entrega principal",
    studyFocusLabel: "Foco do estudo",
    exploreCase: "Explorar case",
    exploreCaseAriaPrefix: "Explorar case do projeto ",
    demoFallback: "Acessar demonstração",
    demoAriaMiddle: " de ",
    demoAriaSuffix: " (abre em nova aba)",
    githubAriaPrefix: "Ver código do projeto ",
    githubAriaSuffix: " no GitHub",
  },
  demo: {
    howTo: "Como acessar a demonstração",
    email: "E-mail",
    password: "Senha",
  },
  timeline: {
    tag: "Trajetória",
    title: "Experiência profissional",
    description: "Onde trabalhei e quais responsabilidades assumi em cada etapa.",
    emptyFallback:
      "Trajetória profissional detalhada disponível no LinkedIn, incluindo cargos, períodos e responsabilidades por empresa.",
    linkedinCta: "Ver experiência no LinkedIn",
    otherResponsibilities: "Outras responsabilidades",
    groupProduct: "Produtos em que atuei",
    groupProductSingle: "Produto em que atuei",
    groupClient: "Cliente / Instituição",
    externalSuffix: " (abre em nova aba)",
    education: "Formação",
    languages: "Idiomas",
    techAriaPrefix: "Tecnologias em ",
  },
  skills: {
    tag: "Competências",
    title: "Competências aplicadas",
    description:
      "Minha stack de trabalho, conectada a exemplos de implementação nos projetos e na experiência profissional.",
  },
  contact: {
    tag: "Contato",
    title: "Vamos conversar?",
    intro:
      "Para oportunidades em desenvolvimento Full Stack, backend e modernização de sistemas, fale comigo por e-mail ou LinkedIn.",
    cardTitle: "Vamos falar sobre sua oportunidade",
    cardText:
      "Compartilhe o contexto da vaga, os desafios do time e como posso contribuir. Meu currículo também está disponível para consulta e impressão.",
    viewResume: "Ver currículo",
  },
  copyEmail: {
    copy: "Copiar e-mail",
    copying: "Copiando…",
    success: "E-mail copiado!",
    error: "Não foi possível copiar. Selecione o e-mail acima e copie manualmente.",
  },
  footer: {
    resume: "Currículo",
  },
  kindLabels: {
    product: "Produto",
    modernization: "Case corporativo",
    technicalStudy: "Estudo técnico",
  },
  casePage: {
    back: "Voltar para projetos",
    backAria: "Navegação do case",
    roleLabel: "Minha atuação",
    contextLabel: "Contexto do projeto",
    navTitle: "Neste case",
    briefTitle: "Resumo do case",
    roleSection: "Minha atuação",
    deliverables: "Entregas e evidências",
    deliverablesSubDefault:
      "O que a implementação passou a oferecer no contexto deste projeto.",
    deliverablesSubStudy:
      "O que foi implementado para explorar a arquitetura e seus limites.",
    contextSection: "Contexto e problema",
    solutionSection: "Solução",
    challengesSection: "Principais desafios técnicos",
    otherHighlights: "Ver outros destaques técnicos",
    decisionsSection: "Decisões e trade-offs",
    benefitPrefix: "Benefício: ",
    costPrefix: "Custo: ",
    authNoteTitle: "Nota sobre autenticação",
    limitsTitle: "Limites da implementação",
    stackTitle: "Stack do projeto",
    stackAria: "Tecnologias utilizadas",
    ctaTitle: "Vamos conversar sobre este projeto?",
    ctaText:
      "Entre em contato para conversar sobre minha atuação e as decisões técnicas deste case.",
    ctaButton: "Entrar em contato",
    prevCase: "Case anterior",
    nextCase: "Próximo case",
    githubButton: "Ver no GitHub",
  },
  gallery: {
    sectionAria: "Telas e capturas do projeto",
    title: "Telas do projeto",
    hint: "Clique para ampliar",
    enlargePrefix: "Ampliar imagem: ",
    dialogAria: "Visualização ampliada das telas do projeto",
    screenWord: "Tela",
    closeAria: "Fechar visualização ampliada (Esc)",
    prevAria: "Imagem anterior (Seta para a esquerda)",
    nextAria: "Próxima imagem (Seta para a direita)",
  },
  architecture: {
    title: "Arquitetura técnica",
    sectionAria: "Arquitetura técnica do projeto",
    infraFallback: "Infraestrutura",
  },
  resumePage: {
    title: "Currículo",
    back: "← Voltar ao portfólio",
    docButton: "Baixar / Imprimir PDF",
    docAria: "Baixar ou imprimir PDF do currículo (abre em nova aba)",
    docHint: "Abre o visualizador do PDF em uma nova aba para salvar ou imprimir.",
    contactAria: "Contato e perfis profissionais",
    summary: "Resumo profissional",
    skills: "Competências técnicas",
    experience: "Experiência profissional",
    projects: "Projetos selecionados",
    education: "Formação e idiomas",
    recognitionPrefix: "Reconhecimento: ",
  },
};

const en: ChromeDict = {
  skipLink: "Skip to main content",
  brandAria: "Go to the portfolio home",
  nav: [
    { label: "About", href: "/en#sobre" },
    { label: "Projects", href: "/en#projetos" },
    { label: "Experience", href: "/en#experiencia" },
    { label: "Technologies", href: "/en#tecnologias" },
    { label: "Contact", href: "/en#contato" },
    { label: "Resume", href: "/en/curriculo" },
  ],
  navPrimaryAria: "Primary navigation",
  navMobileAria: "Mobile navigation",
  menuOpenAria: "Open main menu",
  menuCloseAria: "Close main menu",
  themeToLightAria: "Switch to light theme",
  themeToDarkAria: "Switch to dark theme",
  hero: {
    eyebrowPrefix: "Software development · Since ",
    viewProjects: "View projects",
    contact: "Get in touch",
    viewResume: "View resume",
  },
  featured: {
    tag: "Selected work",
    title: "Selected projects",
    description:
      "Authored products and production engineering. Each case study presents the problem, my contribution, the deliverables, and the solution trade-offs.",
  },
  additional: {
    tag: "Other work",
    title: "Additional projects",
    description:
      "Tools, technical studies, and other applications to explore my implementations.",
  },
  card: {
    roleLabel: "My role",
    contextLabel: "Project context",
    deliverableLabel: "Key deliverable",
    studyFocusLabel: "Study focus",
    exploreCase: "Explore case",
    exploreCaseAriaPrefix: "Explore the case study for ",
    demoFallback: "View live demo",
    demoAriaMiddle: " for ",
    demoAriaSuffix: " (opens in a new tab)",
    githubAriaPrefix: "View the source code for ",
    githubAriaSuffix: " on GitHub",
  },
  demo: {
    howTo: "How to access the demo",
    email: "Email",
    password: "Password",
  },
  timeline: {
    tag: "Background",
    title: "Professional experience",
    description: "Where I have worked and the responsibilities I held at each step.",
    emptyFallback:
      "Detailed career history is available on LinkedIn, including roles, periods, and responsibilities per company.",
    linkedinCta: "View experience on LinkedIn",
    otherResponsibilities: "Other responsibilities",
    groupProduct: "Products I worked on",
    groupProductSingle: "Product I worked on",
    groupClient: "Client / Institution",
    externalSuffix: " (opens in a new tab)",
    education: "Education",
    languages: "Languages",
    techAriaPrefix: "Technologies at ",
  },
  skills: {
    tag: "Skills",
    title: "Applied skills",
    description:
      "My working stack, connected to implementation examples across projects and professional experience.",
  },
  contact: {
    tag: "Contact",
    title: "Let's talk?",
    intro:
      "For Full Stack, backend, and systems modernization opportunities, reach me by email or LinkedIn.",
    cardTitle: "Let's talk about your opportunity",
    cardText:
      "Share the role context, the team's challenges, and how I can contribute. My resume is also available to view and print.",
    viewResume: "View resume",
  },
  copyEmail: {
    copy: "Copy email",
    copying: "Copying…",
    success: "Email copied!",
    error: "Couldn't copy. Select the email above and copy it manually.",
  },
  footer: {
    resume: "Resume",
  },
  kindLabels: {
    product: "Product",
    modernization: "Corporate case",
    technicalStudy: "Technical study",
  },
  casePage: {
    back: "Back to projects",
    backAria: "Case study navigation",
    roleLabel: "My role",
    contextLabel: "Project context",
    navTitle: "In this case",
    briefTitle: "Case summary",
    roleSection: "My role",
    deliverables: "Deliverables and evidence",
    deliverablesSubDefault:
      "What the implementation delivers in this project's context.",
    deliverablesSubStudy:
      "What was implemented to explore the architecture and its trade-offs.",
    contextSection: "Context and problem",
    solutionSection: "Solution",
    challengesSection: "Key technical challenges",
    otherHighlights: "See other technical highlights",
    decisionsSection: "Decisions and trade-offs",
    benefitPrefix: "Benefit: ",
    costPrefix: "Cost: ",
    authNoteTitle: "Note on authentication",
    limitsTitle: "Implementation limits",
    stackTitle: "Project stack",
    stackAria: "Technologies used",
    ctaTitle: "Let's talk about this project?",
    ctaText:
      "Get in touch to discuss my role and the technical decisions behind this case study.",
    ctaButton: "Get in touch",
    prevCase: "Previous case",
    nextCase: "Next case",
    githubButton: "View on GitHub",
  },
  gallery: {
    sectionAria: "Project screenshots",
    title: "Project screens",
    hint: "Click to enlarge",
    enlargePrefix: "Enlarge image: ",
    dialogAria: "Expanded view of the project screens",
    screenWord: "Screen",
    closeAria: "Close expanded view (Esc)",
    prevAria: "Previous image (Left arrow)",
    nextAria: "Next image (Right arrow)",
  },
  architecture: {
    title: "Technical architecture",
    sectionAria: "Project technical architecture",
    infraFallback: "Infrastructure",
  },
  resumePage: {
    title: "Resume",
    back: "← Back to portfolio",
    docButton: "Download / Print PDF",
    docAria: "Download or print the resume PDF (opens in a new tab)",
    docHint: "Opens the PDF viewer in a new tab to save or print.",
    contactAria: "Contact and professional profiles",
    summary: "Professional summary",
    skills: "Technical skills",
    experience: "Professional experience",
    projects: "Selected projects",
    education: "Education and languages",
    recognitionPrefix: "Recognition: ",
  },
};

const dictionaries: Record<Locale, ChromeDict> = { pt, en };

export function getDictionary(locale: Locale): ChromeDict {
  return dictionaries[locale] ?? dictionaries.pt;
}
