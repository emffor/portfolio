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
# Verificação estática de tipos
pnpm typecheck

# Análise de linting (ESLint)
pnpm lint

# Compilação e build de produção
pnpm build

# Execução do bundle gerado
pnpm start
```

---

## 📁 Estrutura do Projeto

```
portfolio/
├── public/                     # Arquivos estáticos públicos
│   ├── favicon.ico
│   ├── icon.svg                # Monograma vetorial
│   └── images/
│       └── projects/           # Imagens e mockups dos projetos
│           └── laflora-agro.svg
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
   Insira a imagem ou mockup em `public/images/projects/seu-projeto.png` (ou `.svg`).

2. **Cadastre os dados em `src/data/projects.ts`:**
   Adicione um novo objeto ao array `PROJECTS` seguindo a interface `Project`:

   ```typescript
   {
     title: "Nome do Projeto",
     slug: "nome-do-projeto",
     category: "SaaS / Mobile / API",
     featured: true, // true para exibir na seção de destaque
     shortDescription: "Resumo em uma linha para o cabeçalho do card.",
     fullDescription: "Descrição detalhada do propósito e escopo.",
     image: "/images/projects/seu-projeto.svg",
     technologies: ["TypeScript", "Next.js", "PostgreSQL", "Docker"],
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
