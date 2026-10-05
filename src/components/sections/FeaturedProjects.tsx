import React from "react";
import { getFeaturedProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

export async function FeaturedProjects({ lang = "pt" }: { lang?: Locale }) {
  const projects = await getFeaturedProjects();
  const dict = getDictionary(lang);

  return (
    <section
      id="projetos"
      aria-label={lang === "en" ? "Featured projects" : "Projetos em destaque"}
      className="scroll-mt-20 py-10 sm:py-16"
    >
      <SectionHeading
        tag={dict.featured.tag}
        title={dict.featured.title}
        description={dict.featured.description}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} spotlight={index === 0} lang={lang} />
        ))}
      </div>
    </section>
  );
}
