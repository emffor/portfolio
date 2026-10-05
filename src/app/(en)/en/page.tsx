import React from "react";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { AdditionalProjects } from "@/components/sections/AdditionalProjects";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { TechStack } from "@/components/sections/TechStack";
import { ExperienceSummary } from "@/components/sections/ExperienceSummary";
import { ContactCta } from "@/components/sections/ContactCta";
import { PROFILE_DATA } from "@/data/profile";
import { SKILL_AREAS } from "@/data/skills";
import { SITE_URL } from "@/lib/constants";
import { profilePhotoUrl } from "@/lib/storage";

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/en#profile`,
  url: `${SITE_URL}/en`,
  name: `${PROFILE_DATA.name} — Professional portfolio`,
  inLanguage: "en",
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PROFILE_DATA.name,
    url: SITE_URL,
    jobTitle: PROFILE_DATA.title,
    description: PROFILE_DATA.summaryEn ?? PROFILE_DATA.summary,
    ...(PROFILE_DATA.photo && {
      image: profilePhotoUrl(PROFILE_DATA.photo.src),
    }),
    sameAs: [PROFILE_DATA.socials.github.url, PROFILE_DATA.socials.linkedin.url],
    knowsAbout: [...new Set(SKILL_AREAS.flatMap((area) => area.itemsEn ?? area.items))],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: PROFILE_DATA.education.institution,
    },
  },
};

export default function EnglishHome() {
  return (
    <div className="mx-auto min-w-0 max-w-[1200px] px-5 sm:px-8 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Hero lang="en" />
      <ExperienceSummary lang="en" />
      <FeaturedProjects lang="en" />
      <AdditionalProjects lang="en" />
      <ExperienceTimeline lang="en" />
      <TechStack lang="en" />
      <ContactCta lang="en" />
    </div>
  );
}
