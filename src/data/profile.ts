import { Profile } from "@/types/profile";

export const PROFILE_DATA: Profile = {
  name: "Eloan Ferreira",
  title: "Full Stack Developer",
  positioning:
    "Backend e modernização de sistemas em produção.",
  headline:
    "Transformo regras de negócio complexas em aplicações com Laravel, Node.js e TypeScript — da modelagem de dados à interface e ao deploy.",
  experienceSince: "2019",
  domain: "me.emfsystems.com.br",
  location: "Brasil",
  availableForWork: true,
  availabilityLabel: "Aberto a oportunidades",
  indicators: [
    {
      value: "11",
      label: "microsserviços consolidados na READI",
      href: "/projetos/consolidacao-arquitetural",
      linkLabel: "Conhecer a modernização",
    },
    {
      value: "~40%",
      label: "menos tempo em consultas e validações manuais na READI",
      href: "/#experiencia",
      linkLabel: "Ver contexto na experiência",
    },
    {
      value: "2024 · 2025",
      label: "Destaque do Ano na READI",
      href: "https://www.linkedin.com/posts/eloanferreira_destaquetech-gratidaeto-inovaaexaeto-activity-7275562861198790656-ngqM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1Jm_sBcLwJPBGBts8leF2NMZAPHQY_uR8",
      linkLabel: "Ver publicação no LinkedIn",
    },
  ],
  education: {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Estácio de Sá",
    completionYear: 2023,
  },
  languages: [
    {
      name: "Inglês",
      level: "Intermediário B1",
    },
  ],
  photo: {
    src: "/assets/perfil.png",
    alt: "Eloan Ferreira - Full Stack Developer",
  },
  summary:
    "Atuo em desenvolvimento de software desde 2019, com experiência em aplicações web e mobile, APIs e sistemas em produção. Na READI, sou responsável técnico pela consolidação da plataforma em um monólito modular Laravel. Meu foco é reduzir a complexidade da operação, preservar as regras do negócio e entregar soluções que a equipe consiga manter e evoluir.",
  socials: {
    github: {
      name: "GitHub",
      url: "https://github.com/emffor",
      label: "Acessar perfil de Eloan Ferreira no GitHub",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/eloanferreira",
      label: "Acessar perfil de Eloan Ferreira no LinkedIn",
    },
    email: "emfeloan@gmail.com",
  },
};
