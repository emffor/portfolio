import React from "react";
import Image from "next/image";
import { ProjectScreenshot } from "@/types/project";

interface ProjectGalleryProps {
  screenshots?: readonly ProjectScreenshot[];
}

export function ProjectGallery({ screenshots }: ProjectGalleryProps) {
  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <section aria-label="Capturas de tela do projeto" className="space-y-6">
      <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
        Screenshots
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {screenshots.map((shot) => (
          <figure
            key={shot.src}
            className="overflow-hidden rounded-xl border border-border bg-surface"
          >
            <div className="relative aspect-[16/10] w-full bg-surface-secondary">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
            {shot.caption && (
              <figcaption className="px-4 py-3 font-sans text-sm text-muted">
                {shot.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
