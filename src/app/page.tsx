import React from "react";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ExperienceSummary } from "@/components/sections/ExperienceSummary";
import { TechStack } from "@/components/sections/TechStack";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      <Hero />
      <FeaturedProjects />
      <ExperienceSummary />
      <TechStack />
      <ContactCta />
    </div>
  );
}
