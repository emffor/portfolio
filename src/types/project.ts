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
}
