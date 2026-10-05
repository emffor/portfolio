import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectKindLabel } from "@/data/projects";
import { AUTHOR_NAME } from "@/lib/constants";
import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt = `Project case study — ${AUTHOR_NAME}`;
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return createSocialImage({
    title: project.title,
    subtitle: `${getProjectKindLabel(project.kind, "en")} · ${AUTHOR_NAME}`,
    description: project.outcomeSummary ?? project.shortDescription,
  });
}
