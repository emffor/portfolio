export type ExperienceRelatedLinkType = "company" | "product" | "client";

export interface ExperienceRelatedLink {
  label: string;
  labelEn?: string;
  url?: string;
  type: ExperienceRelatedLinkType;
}

export interface Experience {
  company: string;
  role: string;
  roleEn?: string;
  period: string;
  periodEn?: string;
  featured?: boolean;
  recognition?: string;
  recognitionEn?: string;
  location?: string;
  workModel?: string;
  contextLabel?: string;
  description: string;
  descriptionEn?: string;
  impactLabel?: string;
  responsibilities: readonly string[];
  responsibilitiesEn?: readonly string[];
  resumeResponsibilities?: readonly string[];
  resumeResponsibilitiesEn?: readonly string[];
  recognitionLabel?: string;
  technologies: readonly string[];
  relatedLinks?: readonly ExperienceRelatedLink[];
}
