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
        title="Projetos que mostram como trabalho"
        description="Do problema à entrega: minha atuação, decisões de arquitetura e os trade-offs de cada solução. Produtos autorais, modernização em produção e um estudo de sistemas distribuídos."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} spotlight={index < 2} />
        ))}
      </div>
    </section>
  );
}
