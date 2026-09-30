import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { getProjectKindLabel } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  compact?: boolean;
  spotlight?: boolean;
}

const VISIBLE_TECHNOLOGIES = 6;

export function ProjectCard({
  project,
  priority = false,
  compact = false,
  spotlight = false,
}: ProjectCardProps) {
  const visibleTechnologies =
    project.primaryTechnologies ??
    project.technologies.slice(0, compact ? 4 : VISIBLE_TECHNOLOGIES);

  return (
    <article
      aria-labelledby={`project-${project.slug}`}
      className={`group min-w-0 overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-200 hover:border-accent/60 ${
        spotlight
          ? "grid md:col-span-2 lg:grid-cols-[1.05fr_1fr]"
          : compact ? "flex flex-col sm:flex-row" : "flex flex-col"
      }`}
    >
      <Link
        href={`/projetos/${project.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className={`relative block w-full overflow-hidden bg-surface-secondary ${
          compact
            ? "aspect-[16/10] sm:aspect-auto sm:w-48 sm:shrink-0"
            : spotlight ? "aspect-[16/10] lg:aspect-auto lg:min-h-80" : "aspect-[16/9]"
        }`}
      >
        <Image
          src={project.image}
          alt=""
          fill
          preload={priority}
          sizes={compact
            ? "(max-width: 639px) 100vw, 192px"
            : spotlight
              ? "(max-width: 1023px) 100vw, 560px"
              : "(max-width: 767px) 100vw, 548px"}
          className="object-contain object-center"
        />
      </Link>

      <div
        className={`flex flex-1 flex-col ${
          compact ? "gap-3 p-4 sm:p-5" : spotlight ? "gap-5 p-5 sm:p-8" : "gap-4 p-5 sm:p-6"
        }`}
      >
        <div>
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-wider text-muted">
            {getProjectKindLabel(project.kind)}
            <span className="mx-1.5 text-border" aria-hidden="true">
              ·
            </span>
            <span className="text-accent">{project.category}</span>
          </p>

          <h3 id={`project-${project.slug}`} className={`font-display font-bold tracking-tight text-foreground ${spotlight ? "text-2xl sm:text-3xl" : "text-xl"}`}>
            <Link href={`/projetos/${project.slug}`} className="rounded-sm transition-colors hover:text-accent">
              {project.title}
            </Link>
          </h3>

          {project.status && (
            <p className="mt-1.5 flex items-center gap-1.5 font-sans text-xs text-muted">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              {project.status}
            </p>
          )}

          <p className="mt-2.5 font-sans text-sm leading-relaxed text-muted">
            {project.shortDescription}
          </p>
        </div>

        {!compact && (project.roleLabel || project.outcomeSummary) && (
          <dl className="space-y-3 border-t border-border pt-4 text-sm">
            {project.roleLabel && (
              <div>
                <dt className="text-xs text-muted">Minha atuação</dt>
                <dd className="mt-1 font-medium text-foreground">{project.roleLabel}</dd>
              </div>
            )}
            {project.outcomeSummary && (
              <div>
                <dt className="text-xs text-muted">{project.kind === "technical-study" ? "Foco do estudo" : "Entrega principal"}</dt>
                <dd className="mt-1 leading-relaxed text-foreground">{project.outcomeSummary}</dd>
              </div>
            )}
          </dl>
        )}

        <div
          className="flex flex-wrap items-center gap-1.5"
          aria-label={`Principais tecnologias de ${project.title}`}
        >
          {visibleTechnologies.map((tech) => (
            <Badge key={tech} variant="subtle">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-2">
          <Button
            href={`/projetos/${project.slug}`}
            variant="primary"
            size="sm"
            aria-label={`Explorar case do projeto ${project.title}`}
          >
            Explorar case
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
            <Button
              href={project.projectUrl}
              variant="outline"
              size="sm"
              aria-label={`${project.projectUrlLabel ?? "Acessar demonstração"} de ${project.title} (abre em nova aba)`}
            >
              {project.projectUrlLabel ?? "Acessar demonstração"}
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
            <Button
              href={project.githubUrl}
              variant="outline"
              size="sm"
              aria-label={`Ver código do projeto ${project.title} no GitHub`}
            >
              GitHub
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
        </div>
      </div>
    </article>
  );
}
