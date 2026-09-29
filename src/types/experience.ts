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
}
