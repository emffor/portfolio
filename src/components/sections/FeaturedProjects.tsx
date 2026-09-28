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
      className="scroll-mt-20 border-t border-slate-200/70 py-16 sm:py-24 dark:border-white/[0.06]"
    >
      <SectionHeading
        tag="Portfólio"
        title="Projetos em Destaque"
        description="Seleção de aplicações em produção e sistemas corporativos com foco em escalabilidade, arquitetura limpa e entrega de valor real."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
