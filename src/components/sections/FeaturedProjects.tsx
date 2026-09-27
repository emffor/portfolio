import React from "react";
import { getFeaturedProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  return (
    <section
      id="projetos"
      aria-label="Projetos em destaque"
      className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <SectionHeading
        tag="Portfólio"
        title="Projetos em Destaque"
        description="Seleção de aplicações em produção e sistemas corporativos com foco em escalabilidade, arquitetura limpa e entrega de valor real."
      />

      <div className="space-y-12">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={idx === 0}
          />
        ))}
      </div>
    </section>
  );
}
