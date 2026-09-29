export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export interface ProfilePhoto {
  src: string;
  alt: string;
}

export interface Education {
  degree: string;
  institution: string;
  completionYear: number;
}

export interface ProfessionalIndicator {
  value: string;
  label: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Profile {
  name: string;
  title: string;
  positioning: string;
  headline: string;
  experienceSince: string;
  domain: string;
  summary: string;
  location: string;
  availableForWork: boolean;
  availabilityLabel: string;
  indicators: readonly ProfessionalIndicator[];
  education: Education;
  languages?: readonly Language[];
  photo?: ProfilePhoto;
  socials: {
    github: SocialLink;
    linkedin: SocialLink;
    email?: string;
  };
}

export type SkillIconName =
  | "php"
  | "laravel"
  | "javascript"
  | "typescript"
  | "nodejs"
  | "python"
  | "react"
  | "nextjs"
  | "mobile"
  | "database"
  | "aws"
  | "docker"
  | "cicd"
  | "tests"
  | "ai"
  | "architecture";

export interface SkillArea {
  title: string;
  icon: SkillIconName;
  items: readonly string[];
}
