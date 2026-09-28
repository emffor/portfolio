export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectArchitectureLayer {
  label: string;
  description?: string;
}

export interface ProjectArchitecture {
  layers: readonly ProjectArchitectureLayer[];
  infrastructureTitle?: string;
  infrastructureServices?: readonly string[];
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
  myRole: string;
  screenshots?: readonly ProjectScreenshot[];
  architecture?: ProjectArchitecture;
}
