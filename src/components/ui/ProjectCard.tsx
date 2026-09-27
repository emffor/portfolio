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
        {/* Preview Visual */}
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

          {/* Badges de Tecnologias */}
          <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Tecnologias utilizadas">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Informações Estruturadas */}
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

          {/* Contexto & Solução */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="rounded-lg border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/60 p-3.5 space-y-1">
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Contexto & Desafio
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 leading-normal">
                {project.context}
              </p>
            </div>

            <div className="rounded-lg border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/60 p-3.5 space-y-1">
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Solução Implementada
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 leading-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Desafios Técnicos */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Desafios Técnicos Enfrentados:
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              {project.technicalChallenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">
                    ›
                  </span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Atuação Técnica */}
          <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
              Minha Atuação:
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.myRole}
            </p>
          </div>

          {/* Ações / Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.projectUrl && (
              <Button href={project.projectUrl} variant="primary" size="sm">
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

            {project.githubUrl && (
              <Button href={project.githubUrl} variant="outline" size="sm">
                Código Fonte
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </Button>
            )}

            {!project.projectUrl && !project.githubUrl && (
              <span className="text-xs text-zinc-500 dark:text-zinc-400 italic">
                Projeto corporativo proprietário
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
