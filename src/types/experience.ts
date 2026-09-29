export type ExperienceRelatedLinkType = "company" | "product" | "client";

export interface ExperienceRelatedLink {
  label: string;
  url?: string;
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
  contextLabel?: string;
  description: string;
  impactLabel?: string;
  responsibilities: readonly string[];
  recognitionLabel?: string;
  technologies: readonly string[];
  relatedLinks?: readonly ExperienceRelatedLink[];
}
