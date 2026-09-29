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
      className="scroll-mt-20 py-10 sm:py-16"
    >
      <SectionHeading
        tag="Trabalhos selecionados"
        title="Projetos em Destaque"
        description="Produto autoral, modernização em produção e estudo técnico: diferentes contextos para decisões de engenharia."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
