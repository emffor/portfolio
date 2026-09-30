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
        title="Projetos selecionados"
        description="Produtos autorais e engenharia em produção. Cada case apresenta o problema, minha contribuição, as entregas e os trade-offs da solução."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} spotlight={index === 0} />
        ))}
      </div>
    </section>
  );
}
