import React from "react";
import { getAdditionalProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

export async function AdditionalProjects({ lang = "pt" }: { lang?: Locale }) {
  const projects = await getAdditionalProjects();
  const dict = getDictionary(lang);

  if (projects.length === 0) return null;

  return (
    <section
      id="projetos-adicionais"
      aria-label={lang === "en" ? "Additional projects" : "Projetos adicionais"}
      className="scroll-mt-20 py-3 sm:py-6"
    >
      <div className="mb-5 sm:mb-7">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted">
          {dict.additional.tag}
        </p>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          {dict.additional.title}
        </h2>
        <div aria-hidden="true" className="mt-3 h-1 w-12 rounded-full bg-accent" />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          {dict.additional.description}
        </p>
      </div>

      <div className="w-full space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} compact lang={lang} />
        ))}
      </div>
    </section>
  );
}
