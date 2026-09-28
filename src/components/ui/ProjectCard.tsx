import React from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="group relative rounded-xl border border-zinc-200/80 bg-white dark:border-zinc-800 dark:bg-zinc-900/40 p-6 sm:p-8 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">
            <Image
              src={project.image}
              alt={`Demonstração visual do projeto ${project.title}`}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.01]"
            />
          </div>

          <div
            className="flex flex-wrap gap-1.5 pt-1"
            aria-label="Tecnologias utilizadas"
          >
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded">
                  Destaque
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {project.title}
            </h3>

            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              href={`/projetos/${project.slug}`}
              variant="primary"
              size="sm"
              aria-label={`Ver case do projeto ${project.title}`}
            >
              Ver case
              <svg
                className="w-3.5 h-3.5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>

            {project.projectUrl && (
              <Button href={project.projectUrl} variant="outline" size="sm">
                Acessar Projeto
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
