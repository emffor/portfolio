import { TechCategory } from "@/types/profile";

export const TECH_CATEGORIES: readonly TechCategory[] = [
  {
    title: "Linguagens & Core",
    skills: ["TypeScript", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "NestJS", "Laravel", "RESTful APIs", "Arquitetura Hexagonal"],
  },
  {
    title: "Bancos de Dados",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "Modelagem Relacional"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "AWS", "CI/CD", "Git & GitHub Actions"],
  },
] as const;

export const FEATURED_TECH_TAGS: readonly string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "PHP",
  "Laravel",
  "PostgreSQL",
  "Docker",
  "AWS",
] as const;
