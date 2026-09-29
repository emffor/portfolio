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
        tag="Projetos autorais"
        title="Projetos em Destaque"
        description="Cases de produto e de estudo técnico, com decisões de arquitetura, backend e resolução de problemas."
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
