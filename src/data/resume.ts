import { Resume } from "@/types/resume";
import { documentUrl } from "@/lib/storage";

export const RESUME_DATA: Resume = {
  title: "Desenvolvedor Full Stack",
  location: "Fortaleza/CE",
  summary:
    "Desenvolvedor Full Stack com experiência profissional desde 2019, com foco em backend, arquitetura e modernização de sistemas. Atuação com PHP/Laravel, Node.js, TypeScript, React e Next.js no desenvolvimento de APIs, aplicações web e consolidação de arquiteturas distribuídas. Experiência como referência técnica em projetos de alta complexidade, conduzindo decisões de arquitetura, Code Review, evolução de sistemas e sustentação em produção.",
  phone: {
    label: "(85) 98880-0005",
    href: "tel:+5585988800005",
  },
  document: {
    href: documentUrl("EloanFerreira.pdf"),
    fileName: "EloanFerreira.pdf",
  },
  skillAreas: [
    {
      title: "Backend",
      items: ["PHP", "Laravel", "Node.js", "NestJS", "REST APIs"],
    },
    {
      title: "Frontend/Mobile",
      items: ["React", "Next.js", "React Native", "TypeScript", "JavaScript"],
    },
    {
      title: "Dados e Infraestrutura",
      items: ["PostgreSQL", "MySQL", "SQL Server", "AWS", "Docker", "CI/CD"],
    },
    {
      title: "IA e Automação",
      items: ["Python", "Generative AI", "LLMs", "AI APIs", "AI Agents"],
    },
    {
      title: "Arquitetura e Qualidade",
      items: ["Arquitetura de Software", "SOLID", "Design Patterns", "Code Review"],
    },
  ],
};
