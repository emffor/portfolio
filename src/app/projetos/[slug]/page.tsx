import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllProjects,
  getProjectBySlug,
} from "@/data/projects";
import { SITE_URL, AUTHOR_NAME } from "@/lib/constants";
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
      siteName: SITE_URL,
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

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16 space-y-12">
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
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
            {project.category}
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
          <p className="font-sans text-sm text-muted">
            Por {AUTHOR_NAME}
          </p>
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

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-surface-secondary">
          <Image
            src={project.image}
            alt={`Imagem principal do projeto ${project.title}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover object-center"
          />
        </div>
      </header>

      <main className="space-y-12">
        <section aria-label="Visão geral" className="space-y-3">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            Visão geral
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
            {project.fullDescription}
          </p>
        </section>

        <section aria-label="Contexto e problema" className="space-y-3">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            Contexto e problema
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
            {project.context}
          </p>
        </section>

        <section aria-label="Solução" className="space-y-3">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            Solução
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
            {project.solution}
          </p>
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

        <section aria-label="Minha atuação" className="space-y-3">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            Minha atuação
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
            {project.myRole}
          </p>
        </section>

        <ProjectArchitectureDiagram architecture={project.architecture} />

        {project.technicalHighlights &&
          project.technicalHighlights.length > 0 && (
            <section aria-label="Destaques técnicos" className="space-y-3">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                Destaques técnicos
              </h2>
              <ul className="space-y-2 font-sans text-sm sm:text-base text-muted">
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
            </section>
          )}

        {project.decisions && project.decisions.length > 0 && (
          <section aria-label="Decisões e trade-offs" className="space-y-4">
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

        <ProjectGallery screenshots={project.screenshots} />

        <section aria-label="Links do projeto" className="space-y-4">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            Links
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            {project.projectUrl && (
              <Button href={project.projectUrl} variant="primary" size="md">
                Acessar demonstração
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="outline" size="md">
                Código fonte
              </Button>
            )}
            {!project.projectUrl && !project.githubUrl && (
              <p className="font-sans text-sm text-muted italic">
                Projeto corporativo proprietário — demonstração mediante
                contato.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
