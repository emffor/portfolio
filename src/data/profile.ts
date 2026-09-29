import { Profile } from "@/types/profile";

export const PROFILE_DATA: Profile = {
  name: "Eloan Ferreira",
  title: "Full Stack Developer",
  headline:
    "Atuo com foco em backend, arquitetura e modernização de sistemas. Construo e evoluo aplicações web, mobile e APIs, das decisões arquiteturais à sustentação em produção.",
  experienceSince: "2019",
  domain: "eloandev.fyi",
  location: "Brasil",
  availableForWork: true,
  education: {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Estácio de Sá",
    completionYear: 2023,
  },
  photo: {
    src: "/assets/perfil.png",
    alt: "Eloan Ferreira - Full Stack Developer",
  },
  summary:
    "Minha atuação conecta decisões técnicas e operação: participo da modernização de sistemas, desenho e integração de APIs, reviso código e acompanho aplicações em produção. Trabalho entre backend, web e mobile, considerando as necessidades do negócio e a evolução das plataformas.",
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
    email: "contato@eloandev.fyi",
  },
};
