import type { Metadata } from "next";
import { PROFILE_DATA } from "@/data/profile";
import { getExperiences } from "@/data/experience";
import { getFeaturedProjects } from "@/data/projects";
import { RESUME_DATA } from "@/data/resume";
import { ResumeView } from "@/components/case/ResumeView";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

const title = `${PROFILE_DATA.name}'s Resume`;
const description = `${RESUME_DATA.titleEn ?? RESUME_DATA.title} working with backend, APIs, and systems modernization. Professional experience, skills, projects, and education.`;

export const metadata: Metadata = {
  title: "Resume",
  description,
  alternates: {
    canonical: "/en/curriculo",
    languages: {
      pt: "/curriculo",
      en: "/en/curriculo",
    },
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/en/curriculo`,
    type: "profile",
    locale: "en_US",
    siteName: SITE_NAME,
  },
  twitter: { card: "summary_large_image", title, description },
};

export default async function EnglishResumePage() {
  const [experiences, projects] = await Promise.all([
    getExperiences(),
    getFeaturedProjects(),
  ]);

  return <ResumeView experiences={experiences} projects={projects} lang="en" />;
}
