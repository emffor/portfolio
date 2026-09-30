export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectArchitectureLayer {
  label: string;
  description?: string;
}

export interface ProjectArchitectureService {
  name: string;
  description?: string;
  dependency?: string;
}

export interface ProjectArchitecture {
  layers: readonly ProjectArchitectureLayer[];
  services?: readonly ProjectArchitectureService[];
  infrastructureTitle?: string;
  infrastructureServices?: readonly string[];
}

export interface ProjectDecision {
  title: string;
  benefit: string;
  cost: string;
}

export type ProjectKind = "product" | "modernization" | "technical-study";

export interface ProjectBriefItem {
  label: string;
  text: string;
}

export interface ProjectDemoAccess {
  email: string;
  password: string;
}

export interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: readonly string[];
  kind: ProjectKind;
  category: string;
  featured: boolean;
  featuredOrder?: number;
  status?: string;
  brief?: readonly ProjectBriefItem[];
  projectUrl?: string;
  projectUrlLabel?: string;
  githubUrl?: string;
  demoAccess?: ProjectDemoAccess;
  sourceNote?: string;
  context: string;
  solution: string;
  technicalChallenges: readonly string[];
  technicalHighlights?: readonly string[];
  decisions?: readonly ProjectDecision[];
  authNote?: string;
  myRole: string;
  screenshots?: readonly ProjectScreenshot[];
  architecture?: ProjectArchitecture;
}
