import React from "react";
import { getAdditionalProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export async function AdditionalProjects() {
  const projects = await getAdditionalProjects();

  if (projects.length === 0) return null;

  return (
    <section
      id="projetos-adicionais"
      aria-label="Projetos adicionais"
      className="scroll-mt-20 py-3 sm:py-6"
    >
      <div className="mb-5 sm:mb-7">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted">
          Outros trabalhos
        </p>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Projetos adicionais
        </h2>
        <div aria-hidden="true" className="mt-3 h-1 w-12 rounded-full bg-accent" />
      </div>

      <div className="w-full">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} compact />
        ))}
      </div>
    </section>
  );
}
