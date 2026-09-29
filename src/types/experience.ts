export type ExperienceRelatedLinkType = "company" | "product" | "client";

export interface ExperienceRelatedLink {
  label: string;
  url: string;
  type: ExperienceRelatedLinkType;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  featured?: boolean;
  recognition?: string;
  location?: string;
  workModel?: string;
  description: string;
  responsibilities: readonly string[];
  technologies: readonly string[];
  relatedLinks?: readonly ExperienceRelatedLink[];
}
