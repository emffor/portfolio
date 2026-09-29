"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ProjectScreenshot } from "@/types/project";

interface ProjectImageCarouselProps {
  images: readonly ProjectScreenshot[];
  projectTitle: string;
  priority: boolean;
}

export function ProjectImageCarousel({
  images,
  projectTitle,
  priority,
}: ProjectImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (
      images.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative h-full w-full" aria-live="off">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt || `Demonstração visual do projeto ${projectTitle}`}
          fill
          priority={priority && index === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
          className={`object-contain object-center transition-opacity duration-700 ease-in-out ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={activeIndex !== index}
        />
      ))}

      {images.length > 1 && (
        <div
          className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/15 bg-black/65 px-2.5 py-1.5 shadow-sm backdrop-blur-sm"
          role="group"
          aria-label={`Imagens do projeto ${projectTitle}`}
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Mostrar imagem ${index + 1} de ${images.length}`}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                activeIndex === index
                  ? "w-5 bg-white"
                  : "w-1.5 bg-white/55 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
