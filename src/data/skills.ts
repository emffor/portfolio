import { Skill } from "@/types/profile";

export const SKILLS: readonly Skill[] = [
  {
    title: "PHP",
    description: "Backend, regras de negócio e sistemas web no ecossistema PHP.",
    icon: "php",
    rating: 5.0,
  },
  {
    title: "Laravel",
    description: "APIs, ORM, autenticação e evolução de produtos.",
    icon: "laravel",
    rating: 5.0,
  },
  {
    title: "JavaScript",
    description: "Interfaces, scripts e automações no ecossistema web.",
    icon: "javascript",
    rating: 5.0,
  },
  {
    title: "TypeScript",
    description: "Contratos tipados, generics e refatorações seguras.",
    icon: "typescript",
    rating: 5.0,
  },
  {
    title: "Node.js",
    description: "Serviços, APIs e automações no servidor.",
    icon: "nodejs",
    rating: 5.0,
  },
  {
    title: "Python",
    description: "Scripts, automações e backend.",
    icon: "code",
    rating: 4.0,
  },
  {
    title: "React",
    description: "Interfaces componentizadas e experiência do usuário.",
    icon: "react",
    rating: 5.0,
  },
  {
    title: "Next.js",
    description: "App Router, renderização no servidor e apps full-stack.",
    icon: "nextjs",
    rating: 4.5,
  },
  {
    title: "React Native",
    description: "Aplicações mobile com o ecossistema React.",
    icon: "mobile",
    rating: 4.0,
  },
  {
    title: "SQL",
    description: "Modelagem e consultas em PostgreSQL, MySQL, SQL Server e MongoDB.",
    icon: "database",
    rating: 4.5,
  },
  {
    title: "AWS",
    description: "Cloud, deploy e arquitetura na nuvem.",
    icon: "aws",
    rating: 4.0,
  },
  {
    title: "Docker",
    description: "Ambientes reproduzíveis e entrega de aplicações.",
    icon: "docker",
    rating: 4.0,
  },
  {
    title: "CI/CD",
    description: "Pipelines de build, teste e deploy.",
    icon: "cicd",
  },
  {
    title: "Tests",
    description: "Testes unitários, de integração e E2E para código robusto.",
    icon: "tests",
    rating: 4.0,
  },
  {
    title: "AI & LLMs",
    description: "LLMs, APIs de IA, agentes e automações.",
    icon: "ai",
    rating: 4.5,
  },
  {
    title: "Inglês",
    description: "Proficiência B1 para leitura técnica e comunicação.",
    icon: "english",
  },
] as const;

export const FEATURED_TECH_TAGS: readonly string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PHP",
  "Laravel",
  "SQL",
  "Docker",
  "AWS",
] as const;
