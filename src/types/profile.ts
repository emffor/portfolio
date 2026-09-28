export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export interface ProfilePhoto {
  src: string;
  alt: string;
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  yearsOfExperience: string;
  domain: string;
  summary: string;
  location: string;
  availableForWork: boolean;
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
  | "english";

export interface Skill {
  title: string;
  description: string;
  icon: SkillIconName;
  rating?: number;
}
