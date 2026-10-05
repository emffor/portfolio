import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseView } from "@/components/case/ProjectCaseView";
import {
  getAllProjects,
  getProjectBySlug,
} from "@/data/projects";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

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
      title: "Project not found",
    };
  }

  const url = `${SITE_URL}/en/projetos/${project.slug}`;

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `/en/projetos/${project.slug}`,
      languages: {
        pt: `/projetos/${project.slug}`,
        en: `/en/projetos/${project.slug}`,
      },
    },
    openGraph: {
      type: "article",
      url,
      title: project.title,
      description: project.shortDescription,
      siteName: SITE_NAME,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
    },
  };
}

export default async function EnglishProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseView project={project} lang="en" />;
}
