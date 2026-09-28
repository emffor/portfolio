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
      <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        Screenshots
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {screenshots.map((shot) => (
          <figure
            key={shot.src}
            className="overflow-hidden rounded-xl border border-slate-200/80 bg-white dark:border-white/[0.07] dark:bg-[#0e1730]"
          >
            <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-[#0a1020]">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            {shot.caption && (
              <figcaption className="px-4 py-3 font-sans text-sm text-slate-600 dark:text-slate-400">
                {shot.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
