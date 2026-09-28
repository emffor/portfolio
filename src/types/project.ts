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

export interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: readonly string[];
  category: string;
  featured: boolean;
  projectUrl?: string;
  githubUrl?: string;
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
