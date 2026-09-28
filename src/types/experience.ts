export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  workModel?: string;
  description: string;
  responsibilities: readonly string[];
  technologies: readonly string[];
}
