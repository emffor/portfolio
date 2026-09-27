<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Diretrizes do Projeto — Portfólio Profissional

## 1. Visão Geral
Portfólio profissional de **Eloan Ferreira (Full Stack Developer)**, voltado para apresentação em processos seletivos e entrevistas técnicas de alto nível.
- **Domínio planejado:** `eloandev.fyi`
- **GitHub:** `github.com/emffor/portfolio`
- **Público-alvo:** Recrutadores técnicos, Tech Leads e Engineering Managers.

---

## 2. Stack Tecnológica
- **Framework:** Next.js (App Router, Server Components por padrão)
- **Linguagem:** TypeScript (Strict mode ativo, evitar `any`)
- **Estilização:** Tailwind CSS v4
- **Gerenciador de Pacotes:** `pnpm`
- **Qualidade de Código:** ESLint e TypeScript compiler (`tsc --noEmit`)
- **SEO & Metadados:** Next.js Metadata API, `robots.ts`, `sitemap.ts`

---

## 3. Arquitetura e Estrutura de Código

### Diretórios
- `src/app/`: Rotas, layout raiz, SEO e estilos globais.
- `src/components/layout/`: Componentes estruturais (`Header`, `Footer`, `MobileNav`, `ThemeToggle`).
- `src/components/sections/`: Seções da página (`Hero`, `FeaturedProjects`, `ExperienceSummary`, `TechStack`, `ContactCta`).
- `src/components/ui/`: Componentes reutilizáveis atômicos (`Button`, `Badge`, `ProjectCard`, `SectionHeading`).
- `src/data/`: Camada de dados tipada e desacoplada (`profile.ts`, `projects.ts`, `skills.ts`, `navigation.ts`).
- `src/types/`: Interfaces e definições estritas de TypeScript.
- `src/lib/`: Constantes globais e utilitários compartilhados.
- `public/`: Mockups, imagens e assets estáticos.

### Princípios de Implementação
1. **Server Components por Padrão**: Todas as páginas e seções de dados devem ser Server Components. Usar Client Components (`"use client"`) exclusivamente quando houver necessidade de interatividade no navegador (ex.: `ThemeToggle`, `MobileNav`).
2. **Desacoplamento de Dados**: Os dados de projetos e perfil ficam em `src/data/` com funções assíncronas de busca (`getFeaturedProjects()`, `getProjectBySlug()`). A interface não deve acoplar a origem dos dados, permitindo futura migração para CMS, Supabase ou API externa sem reestruturar componentes visuais.
3. **Sem Backend Próprio**: Não criar API Routes ou backend nesta etapa do projeto.

---

## 4. Diretrizes Visuais e UX
- **Estética:** Moderna, minimalista, com bastante espaço em branco, tipografia forte e foco nos projetos reais.
- **Proibido:**
  - Barras de porcentagem ou notas de habilidades (ex.: "React 5/5", "TypeScript 90%").
  - Terminais falsos ou animações exageradas de digitação.
  - Excesso de gradientes e cards excessivamente arredondados com aspecto de dashboard SaaS.
- **Tema:** Suporte nativo e sem flash a Dark Mode e Light Mode.
- **Acessibilidade:**
  - Manter suporte estrito a `@media (prefers-reduced-motion: reduce)`.
  - Tags semânticas do HTML5 (`header`, `main`, `footer`, `nav`, `article`).
  - Anéis de foco visíveis (`focus-visible:ring-2`) e rótulos acessíveis (`aria-label`).

---

## 5. Comandos e Validações

Sempre validar alterações executando:
```bash
# Validação estática de tipos
pnpm typecheck

# Análise de linting
pnpm lint

# Compilação e build de produção
pnpm build
```

---

## 6. Padrões Git e Commits
- Mensagens de commit **estritamente em português (pt-BR)** no modo imperativo.
- Utilizar o padrão **Conventional Commits**:
  - `feat: adiciona nova seção de certificações`
  - `fix: corrige contraste de cor no card de projetos`
  - `docs: atualiza instruções no README`
- **Nunca** commitar arquivos `.env`, credenciais, segredos ou dependências vendorizadas.
