export interface SocialLink {
  name: string;
  url: string;
  label: string;
  labelEn?: string;
}

export interface ProfilePhoto {
  src: string;
  alt: string;
  altEn?: string;
}

export interface Education {
  degree: string;
  degreeEn?: string;
  institution: string;
  completionYear: number;
}

export interface ProfessionalIndicator {
  value: string;
  label: string;
  labelEn?: string;
  href?: string;
  linkLabel?: string;
  linkLabelEn?: string;
}

export interface Language {
  name: string;
  nameEn?: string;
  level: string;
  levelEn?: string;
}

export interface Profile {
  name: string;
  title: string;
  positioning: string;
  positioningEn?: string;
  headline: string;
  headlineEn?: string;
  experienceSince: string;
  domain: string;
  summary: string;
  summaryEn?: string;
  location: string;
  availableForWork: boolean;
  availabilityLabel: string;
  availabilityLabelEn?: string;
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
  description?: string;
  descriptionEn?: string;
  items: readonly string[];
  evidence?: {
    label: string;
    labelEn?: string;
    href: string;
  };
}
