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
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (
      images.length < 2 ||
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [images.length, isPaused]);

  return (
    <div
      className="relative h-full w-full"
      aria-live="polite"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
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
          className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-black/65 px-2 py-1 shadow-sm backdrop-blur-sm"
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
              className="flex items-center justify-center p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-5 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
