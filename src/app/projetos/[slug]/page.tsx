import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectImageCarousel } from "@/components/ui/ProjectImageCarousel";
import { ProjectScreenshot } from "@/types/project";
import {
  getAllProjects,
  getProjectBySlug,
} from "@/data/projects";
import { SITE_URL, SITE_NAME, AUTHOR_NAME } from "@/lib/constants";
import { getProjectKindLabel } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { ProjectArchitectureDiagram } from "@/components/ui/ProjectArchitecture";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  const url = `${SITE_URL}/projetos/${project.slug}`;

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `/projetos/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      title: project.title,
      description: project.shortDescription,
      siteName: SITE_NAME,
      images: [
        {
          url: project.image,
          alt: `Imagem do projeto ${project.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = await getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    allProjects.length > 1
      ? allProjects[(currentIndex + 1) % allProjects.length]
      : undefined;
  const prevProject =
    allProjects.length > 1
      ? allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length]
      : undefined;

  const projectImages: readonly ProjectScreenshot[] = [
    {
      src: project.image,
      alt: `Imagem principal do projeto ${project.title}`,
    },
    ...(project.screenshots ?? []).filter(
      (image) => image.src !== project.image
    ),
  ];

  return (
    <article className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16 space-y-12">
      <nav aria-label="Navegação do case">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-1.5 font-sans text-sm text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar para projetos
        </Link>
      </nav>

      <header className="space-y-6">
        <div className="space-y-3">
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
            {getProjectKindLabel(project.kind)}
            <span className="mx-1.5 text-border" aria-hidden="true">
              ·
            </span>
            <span className="text-accent">{project.category}</span>
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
          <div
            aria-hidden="true"
            className="h-1 w-14 rounded-full bg-accent"
          />
          <p className="font-sans text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
            <p className="font-sans text-sm text-muted">
              Por {AUTHOR_NAME}
            </p>
            {project.status && (
              <span className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                {project.status}
              </span>
            )}
          </div>
        </div>

        <div
          className="flex flex-wrap gap-1.5"
          aria-label="Tecnologias utilizadas"
        >
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        {(project.projectUrl || project.githubUrl) && (
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.projectUrl && (
              <Button href={project.projectUrl} variant="primary" size="sm">
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
                Ver no GitHub
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
        )}

        {project.demoAccess && (
          <details className="max-w-md rounded-lg border border-border bg-surface px-4 py-3">
            <summary className="cursor-pointer rounded py-1 text-sm font-medium focus-visible:ring-2 focus-visible:ring-accent">
              Como acessar a demonstração
            </summary>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-muted">E-mail</dt>
                <dd className="break-all">{project.demoAccess.email}</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-muted">Senha</dt>
                <dd>{project.demoAccess.password}</dd>
              </div>
            </dl>
          </details>
        )}
        {project.sourceNote && (
          <p className="text-sm leading-relaxed text-muted">{project.sourceNote}</p>
        )}

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-surface-secondary">
          <ProjectImageCarousel
            images={projectImages}
            projectTitle={project.title}
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </header>

      <nav aria-label="Seções do case" className="flex flex-wrap gap-x-6 gap-y-3 border-y border-border py-4 text-sm text-muted">
        <a href="#contexto" className="hover:text-accent">Contexto</a>
        <a href="#solucao" className="hover:text-accent">Solução</a>
        {project.architecture && <a href="#arquitetura" className="hover:text-accent">Arquitetura</a>}
        {!!project.decisions?.length && <a href="#decisoes" className="hover:text-accent">Decisões</a>}
        {!!project.screenshots?.length && <a href="#telas" className="hover:text-accent">Telas do projeto</a>}
      </nav>

      <div className="space-y-12">
        {project.brief && project.brief.length > 0 && (
          <section aria-label="Síntese do case">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.brief.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-surface px-4 py-3"
                >
                  <dt className="font-sans text-xs font-medium text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 font-sans text-sm leading-relaxed text-foreground">
                    {item.text}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section aria-label="Minha atuação" className="space-y-3">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            Minha atuação
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
            {project.myRole}
          </p>
        </section>

        <section id="contexto" aria-label="Contexto e problema" className="scroll-mt-20 space-y-3">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            Contexto e problema
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
            {project.context}
          </p>
          <details className="rounded-lg border border-border px-4 py-3">
            <summary className="cursor-pointer text-sm font-medium">Visão geral do projeto</summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.fullDescription}</p>
          </details>
        </section>

        <section id="solucao" aria-label="Solução" className="scroll-mt-20 space-y-3">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            Solução
          </h2>
          {project.solution.split("\n\n").map((paragraph) => (
            <p key={paragraph} className="font-sans text-sm sm:text-base text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        <section aria-label="Desafios técnicos" className="space-y-3">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            Principais desafios técnicos
          </h2>
          <ul className="space-y-2 font-sans text-sm sm:text-base text-muted">
            {project.technicalChallenges.map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span
                  className="text-emerald-500 font-bold shrink-0"
                  aria-hidden="true"
                >
                  ›
                </span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.architecture && (
          <div id="arquitetura" className="scroll-mt-20">
            <ProjectArchitectureDiagram architecture={project.architecture} />
          </div>
        )}

        {project.technicalHighlights &&
          project.technicalHighlights.length > 0 && (
            <details className="rounded-lg border border-border bg-surface p-5">
              <summary className="cursor-pointer font-display text-base font-semibold text-foreground">
                Ver outros destaques técnicos
              </summary>
              <ul className="mt-4 space-y-2 font-sans text-sm sm:text-base text-muted">
                {project.technicalHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span
                      className="text-emerald-500 font-bold shrink-0"
                      aria-hidden="true"
                    >
                      ›
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </details>
          )}

        {project.decisions && project.decisions.length > 0 && (
          <section id="decisoes" aria-label="Decisões e trade-offs" className="scroll-mt-20 space-y-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
              Decisões e trade-offs
            </h2>
            <div className="space-y-4">
              {project.decisions.map((decision) => (
                <div
                  key={decision.title}
                  className="rounded-lg border border-border bg-surface px-4 py-3 space-y-2"
                >
                  <p className="font-sans text-sm font-semibold text-foreground">
                    {decision.title}
                  </p>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      Benefício:{" "}
                    </span>
                    {decision.benefit}
                  </p>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    <span className="font-medium text-foreground">
                      Custo:{" "}
                    </span>
                    {decision.cost}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.authNote && (
          <section
            aria-label="Observação sobre autenticação"
            className="space-y-3"
          >
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
              Nota sobre autenticação
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
              {project.authNote}
            </p>
          </section>
        )}

        {!!project.screenshots?.length && (
          <div id="telas" className="scroll-mt-20">
            <ProjectGallery screenshots={project.screenshots} />
          </div>
        )}

        <section aria-label="Conversar sobre o projeto" className="space-y-4 rounded-xl border border-border bg-surface p-6">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            Vamos conversar sobre este projeto?
          </h2>
          <p className="text-sm leading-relaxed text-muted">
            Entre em contato para conversar sobre minha atuação e as decisões técnicas deste case.
          </p>
          <Button href="/#contato" variant="primary" size="md">Entrar em contato</Button>
        </section>

        {(prevProject || nextProject) && (
          <nav
            aria-label="Navegação entre cases"
            className="border-t border-border pt-8 mt-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevProject && prevProject.slug !== project.slug && (
                <Link
                  href={`/projetos/${prevProject.slug}`}
                  className="group flex flex-col gap-1 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/60"
                >
                  <span className="font-mono text-xs text-muted">
                    ← Case anterior
                  </span>
                  <span className="font-display text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {prevProject.title}
                  </span>
                </Link>
              )}
              {nextProject && nextProject.slug !== project.slug && (
                <Link
                  href={`/projetos/${nextProject.slug}`}
                  className="group flex flex-col gap-1 sm:text-right rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/60"
                >
                  <span className="font-mono text-xs text-muted">
                    Próximo case →
                  </span>
                  <span className="font-display text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {nextProject.title}
                  </span>
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </article>
  );
}
