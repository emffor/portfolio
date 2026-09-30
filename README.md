# Eloan Ferreira — Portfólio Profissional

Portfólio profissional de **Eloan Ferreira | Full Stack Developer**, projetado com foco em clareza, alta performance, tipografia forte e apresentação direta para processos seletivos e oportunidades técnicas de alto impacto.

- **Domínio de produção:** [eloandev.fyi](https://eloandev.fyi)
- **GitHub:** [github.com/emffor](https://github.com/emffor)
- **LinkedIn:** [linkedin.com/in/eloanferreira](https://linkedin.com/in/eloanferreira)

---

## 🎯 Objetivo

Apresentar de maneira objetiva e estruturada a trajetória profissional de mais de 7 anos em engenharia de software, destacando competências com ecossistemas **TypeScript/Node.js** e **PHP/Laravel**, capacidade de modelagem de arquiteturas escaláveis e projetos reais em produção.

---

## 🛠️ Stack Tecnológica

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server Components por padrão)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Linter & Qualidade:** [ESLint](https://eslint.org/)
- **SEO & Metadados:** Metadata API nativa, Open Graph, `robots.ts` e `sitemap.ts`

---

## 📋 Requisitos Prévios

- **Node.js:** Versão 20.x ou superior (LTS recomendada)
- **pnpm:** Versão 10.x ou superior (`npm install -g pnpm`)

---

## 🚀 Instalação e Execução Local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/emffor/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   ```

3. **Configure as variáveis de ambiente (opcional):**
   ```bash
   cp .env.example .env.local
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   pnpm dev
   ```

5. **Acesse a aplicação no navegador:**
   [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Build e Verificações de Qualidade

Para validar tipagem, linter e gerar o bundle de produção:

```bash
# Gerar tipos das rotas em um clone novo
pnpm exec next typegen

# Verificação estática de tipos
pnpm typecheck

# Análise de linting (ESLint)
pnpm lint

# Compilação e build de produção
pnpm build

# Smoke tests HTTP sobre o build de produção (iniciam e encerram um servidor local)
pnpm test:smoke

# Execução do bundle gerado
pnpm start
```

O workflow `.github/workflows/quality.yml` executa geração de tipos do Next.js,
typecheck, lint, build e smoke tests em pushes e pull requests. Os smoke tests
verificam rotas, metadados, links internos, imagens, acesso à demonstração e 404.
Interações de teclado, tema, carrossel e galeria também devem ser verificadas no navegador.

## Apresentação dos projetos

- Os dois primeiros projetos em `featuredOrder` recebem destaque editorial na home.
- Os cards apresentam contexto, atuação, entrega principal e tecnologias selecionadas.
- Cada case inclui resumo, atuação, entregas, contexto, solução e stack. Arquitetura,
  decisões, limites e galeria aparecem conforme os dados disponíveis.
- A navegação por seções fica fixa na lateral em telas grandes.
- O carrossel inicia parado e permite navegação manual ou rotação opcional. A
  preferência de movimento reduzido desabilita a rotação automática.
- As prévias de compartilhamento são geradas em PNG para cada projeto em
  `/projetos/[slug]/opengraph-image`.

Ao editar o conteúdo, diferencie produto, case corporativo e estudo técnico.
Descreva entregas verificáveis e sua participação; inclua métricas somente quando
houver contexto e dados que as sustentem. Capturas de demonstração e diagramas
conceituais devem ser identificados nas legendas.

---

## 📁 Estrutura do Projeto

```
portfolio/
├── public/                     # Arquivos estáticos públicos
│   └── assets/                 # Capturas de tela e imagens dos projetos
├── src/
│   ├── app/                    # Rotas e configurações do App Router
│   │   ├── globals.css         # Variáveis de tema e estilos globais
│   │   ├── layout.tsx          # Layout raiz (SEO, fontes, tema, semântica)
│   │   ├── page.tsx            # Página inicial (composição de seções)
│   │   ├── robots.ts           # Configuração programática de robots.txt
│   │   └── sitemap.ts          # Geração dinâmica do sitemap.xml
│   ├── components/
│   │   ├── layout/             # Componentes estruturais (Header, Footer, Nav)
│   │   ├── sections/           # Seções da página (Hero, Projetos, Experiência, Techs, Contato)
│   │   └── ui/                 # Componentes de interface reutilizáveis (Button, Badge, ProjectCard)
│   ├── data/                   # Conteúdo tipado e funções de busca desacopladas
│   │   ├── navigation.ts       # Itens de menu e navegação
│   │   ├── profile.ts          # Dados profissionais, bio e links sociais
│   │   ├── projects.ts         # Catálogo de projetos e queries assíncronas
│   │   └── skills.ts           # Categorização da stack tecnológica
│   ├── lib/                    # Constantes e utilitários
│   │   ├── constants.ts
│   │   └── utils.ts
│   └── types/                  # Definições estritas de tipos TypeScript
│       ├── navigation.ts
│       ├── profile.ts
│       └── project.ts
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

---

## ➕ Como Adicionar Novos Projetos

A arquitetura foi projetada para separar dados de apresentação. Para adicionar um novo projeto:

1. **Adicione o asset visual:**
   Insira a imagem ou mockup em `public/assets/seu-projeto.png` (ou `.svg`).

2. **Cadastre os dados em `src/data/projects.ts`:**
   Adicione um novo objeto ao array `PROJECTS` seguindo a interface `Project`:

   ```typescript
   {
     title: "Nome do Projeto",
     slug: "nome-do-projeto",
     kind: "product", // product, modernization ou technical-study
     category: "SaaS / Mobile / API",
     status: "Descreva a etapa real do projeto",
     featured: true, // true para exibir na seção de destaque
     shortDescription: "Resumo em uma linha para o cabeçalho do card.",
     fullDescription: "Descrição detalhada do propósito e escopo.",
     image: "/assets/seu-projeto.png",
     imageAlt: "Descrição do que a captura mostra",
     imageCaption: "Contexto da imagem e identificação de dados de demonstração, se aplicável.",
     technologies: ["TypeScript", "Next.js", "PostgreSQL", "Docker"],
     primaryTechnologies: ["TypeScript", "Next.js", "PostgreSQL"],
     roleLabel: "Arquitetura e desenvolvimento Full Stack",
     outcomeSummary: "Entrega principal em uma frase, sem métricas não verificadas.",
     outcomes: [
       { title: "Entrega verificável", description: "O que foi implementado e qual necessidade atende." },
     ],
     context: "Problema real de negócio ou desafio enfrentado.",
     solution: "Abordagem arquitetural e técnica aplicada.",
     technicalChallenges: [
       "Desafio relevante 1 (ex: concorrência, performance, isolamento)",
       "Desafio relevante 2"
     ],
     myRole: "Responsabilidades técnicas assumidas na construção.",
     projectUrl: "https://exemplo.com", // Opcional
     githubUrl: "https://github.com/emffor/exemplo", // Opcional
   }
   ```

3. **Pronto!** O projeto será automaticamente renderizado no feed de projetos em destaque e incluído nas rotas do `sitemap.xml`.
   *Caso futuramente os projetos sejam migrados para um CMS (Sanity, Strapi) ou Supabase, apenas as funções em `src/data/projects.ts` precisarão ser atualizadas, sem alterar os componentes visuais.*

---

## 📜 Licença

Distribuído sob a licença MIT. Consulte os arquivos do projeto para mais informações.
