export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export interface ProfilePhoto {
  src: string;
  alt: string;
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  yearsOfExperience: string;
  domain: string;
  summary: string;
  location: string;
  availableForWork: boolean;
  photo?: ProfilePhoto;
  socials: {
    github: SocialLink;
    linkedin: SocialLink;
    email?: string;
  };
}

export interface TechCategory {
  title: string;
  skills: readonly string[];
}
