export type ProjectStatus = "finished" | "in-development";
export type ProjectVisibility = "public" | "private";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectScreenshot {
  label: string;
  path?: string;
  alt?: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  status: ProjectStatus;
  visibility: ProjectVisibility;
  featured: boolean;
  summary: string;
  description: string;
  challenge?: string;
  highlights?: readonly string[];
  stack: readonly string[];
  links?: readonly ProjectLink[];
  screenshots: readonly ProjectScreenshot[];
  privacyNote?: string;
}
