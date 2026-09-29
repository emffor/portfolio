import React from "react";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { TechStack } from "@/components/sections/TechStack";
import { ExperienceSummary } from "@/components/sections/ExperienceSummary";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <div className="mx-auto min-w-0 max-w-[1200px] px-5 sm:px-8 lg:px-10">
      <Hero />
      <ExperienceSummary />
      <FeaturedProjects />
      <ExperienceTimeline />
      <TechStack />
      <ContactCta />
    </div>
  );
}
