import { SkillArea } from "@/types/profile";

export const SKILL_AREAS: readonly SkillArea[] = [
  {
    title: "Backend",
    icon: "laravel",
    items: ["PHP", "Laravel", "Node.js", "NestJS", "Python", "REST APIs"],
  },
  {
    title: "Frontend & Mobile",
    icon: "react",
    items: [
      "React",
      "Next.js",
      "Angular",
      "React Native",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    title: "Dados & Plataforma",
    icon: "database",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "AWS",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Arquitetura & Qualidade",
    icon: "architecture",
    items: [
      "Arquitetura de Software",
      "SOLID",
      "Clean Code",
      "Design Patterns",
      "Code Review",
      "Testes",
    ],
  },
  {
    title: "IA & Automação",
    icon: "ai",
    items: ["LLMs", "AI Agents", "APIs de LLMs", "Automações"],
  },
] as const;
