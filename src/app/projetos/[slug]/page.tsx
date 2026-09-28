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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <nav aria-label="Navegação do case">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-100 rounded"
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
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {project.category}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
            {project.shortDescription}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
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

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">
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
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Visão geral
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </section>

        <section aria-label="Contexto e problema" className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Contexto e problema
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {project.context}
          </p>
        </section>

        <section aria-label="Solução" className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Solução
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {project.solution}
          </p>
        </section>

        <section aria-label="Desafios técnicos" className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Principais desafios técnicos
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
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
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Minha atuação
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {project.myRole}
          </p>
        </section>

        <ProjectArchitectureDiagram architecture={project.architecture} />

        <ProjectGallery screenshots={project.screenshots} />

        <section aria-label="Links do projeto" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Links
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            {project.projectUrl && (
              <Button href={project.projectUrl} variant="primary" size="md">
                Acessar projeto
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="outline" size="md">
                Código fonte
              </Button>
            )}
            {!project.projectUrl && !project.githubUrl && (
              <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">
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
