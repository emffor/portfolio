export interface ProjectScreenshot {
  src: string;
  alt: string;
  altEn?: string;
  caption?: string;
  captionEn?: string;
}

export interface ProjectArchitectureLayer {
  label: string;
  labelEn?: string;
  description?: string;
  descriptionEn?: string;
}

export interface ProjectArchitectureService {
  name: string;
  description?: string;
  descriptionEn?: string;
  dependency?: string;
}

export interface ProjectArchitecture {
  layers: readonly ProjectArchitectureLayer[];
  services?: readonly ProjectArchitectureService[];
  infrastructureTitle?: string;
  infrastructureTitleEn?: string;
  infrastructureServices?: readonly string[];
  infrastructureServicesEn?: readonly string[];
}

export interface ProjectDecision {
  title: string;
  titleEn?: string;
  benefit: string;
  benefitEn?: string;
  cost: string;
  costEn?: string;
}

export type ProjectKind = "product" | "modernization" | "technical-study";

export interface ProjectBriefItem {
  label: string;
  labelEn?: string;
  text: string;
  textEn?: string;
}

export interface ProjectDemoAccess {
  email: string;
  password: string;
}

export interface ProjectOutcome {
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
}

export interface Project {
  title: string;
  titleEn?: string;
  slug: string;
  shortDescription: string;
  shortDescriptionEn?: string;
  fullDescription: string;
  fullDescriptionEn?: string;
  image: string;
  imageAlt?: string;
  imageAltEn?: string;
  imageCaption?: string;
  imageCaptionEn?: string;
  technologies: readonly string[];
  primaryTechnologies?: readonly string[];
  kind: ProjectKind;
  category: string;
  categoryEn?: string;
  featured: boolean;
  featuredOrder?: number;
  status?: string;
  statusEn?: string;
  brief?: readonly ProjectBriefItem[];
  projectUrl?: string;
  projectUrlLabel?: string;
  projectUrlLabelEn?: string;
  githubUrl?: string;
  demoAccess?: ProjectDemoAccess;
  accessNote?: string;
  accessNoteEn?: string;
  sourceNote?: string;
  sourceNoteEn?: string;
  context: string;
  contextEn?: string;
  solution: string;
  solutionEn?: string;
  technicalChallenges: readonly string[];
  technicalChallengesEn?: readonly string[];
  technicalHighlights?: readonly string[];
  technicalHighlightsEn?: readonly string[];
  decisions?: readonly ProjectDecision[];
  authNote?: string;
  authNoteEn?: string;
  limitationNote?: string;
  limitationNoteEn?: string;
  roleLabel?: string;
  roleLabelEn?: string;
  outcomeSummary?: string;
  outcomeSummaryEn?: string;
  outcomes?: readonly ProjectOutcome[];
  myRole: string;
  myRoleEn?: string;
  screenshots?: readonly ProjectScreenshot[];
  architecture?: ProjectArchitecture;
}
