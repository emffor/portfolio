import { Profile } from "@/types/profile";

export const PROFILE_DATA: Profile = {
  name: "Eloan Ferreira",
  title: "Full Stack Developer",
  positioning:
    "Backend, arquitetura e sistemas em produção.",
  headline:
    "Evoluo aplicações web, mobile e APIs, do legado à sustentação, principalmente com Laravel/PHP e TypeScript/Node.js.",
  experienceSince: "2019",
  domain: "eloandev.fyi",
  location: "Brasil",
  availableForWork: true,
  availabilityLabel: "Aberto a oportunidades",
  indicators: [
    {
      value: "11",
      label: "microsserviços consolidados na READI",
    },
    {
      value: "~40%",
      label: "menos tempo em rotinas manuais via automações",
    },
    {
      value: "2024 · 2025",
      label: "Destaque do Ano na READI",
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
    "Minha atuação conecta decisões técnicas à operação do produto. Trabalho na evolução de sistemas existentes, na modernização de arquitetura, na integração de APIs, na revisão de código e na sustentação de aplicações em produção, entre backend, web, mobile e infraestrutura.",
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
