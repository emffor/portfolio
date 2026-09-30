"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ProjectScreenshot } from "@/types/project";

interface ProjectImageCarouselProps {
  images: readonly ProjectScreenshot[];
  projectTitle: string;
  priority: boolean;
  sizes?: string;
}

function subscribeToMotionPreference(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ProjectImageCarousel({
  images,
  projectTitle,
  priority,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 360px",
}: ProjectImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    () => true
  );
  const isPlaying = images.length > 1 && !isPaused && !isHovered && !isFocused && !reducedMotion;

  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [images.length, isPlaying]);

  const activeImage = images[activeIndex];
  if (!activeImage) return null;

  function showImage(direction: number) {
    setIsPaused(true);
    setActiveIndex((index) => (index + direction + images.length) % images.length);
  }

  return (
    <figure
      className="overflow-hidden rounded-xl border border-border bg-surface"
      aria-roledescription="carrossel"
      aria-label={`Imagens de ${projectTitle}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
      }}
    >
      <div className="relative aspect-[16/9] w-full bg-surface-secondary">
        <Image
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt || `Demonstração visual do projeto ${projectTitle}`}
          fill
          preload={priority && activeIndex === 0}
          sizes={sizes}
          className="object-contain object-center"
        />
      </div>

      {(activeImage.caption || images.length > 1) && (
        <figcaption className="flex flex-col gap-3 border-t border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-xs leading-relaxed text-muted sm:text-sm" aria-live={isPlaying ? "off" : "polite"}>
            {activeImage.caption ?? activeImage.alt}
          </p>
          {images.length > 1 && (
            <div className="flex shrink-0 items-center gap-2" role="group" aria-label="Controles das imagens">
              <button
                type="button"
                disabled={reducedMotion}
                onClick={() => setIsPaused((paused) => !paused)}
                aria-label={reducedMotion ? "Rotação desativada: movimento reduzido" : isPaused ? "Iniciar rotação de imagens" : "Pausar rotação de imagens"}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-muted hover:bg-surface-secondary focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {reducedMotion || isPaused ? <path d="M8 5v14l11-7z" /> : <path d="M6 5h4v14H6zm8 0h4v14h-4z" />}
                </svg>
              </button>
              <button
                type="button"
                onClick={() => showImage(-1)}
                aria-label="Mostrar imagem anterior"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border hover:bg-surface-secondary focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span aria-hidden="true">←</span>
              </button>
              <span className="min-w-12 text-center font-mono text-xs text-muted" aria-live={isPlaying ? "off" : "polite"} aria-atomic="true">
                <span className="sr-only">Imagem </span>{activeIndex + 1} / {images.length}
              </span>
              <button
                type="button"
                onClick={() => showImage(1)}
                aria-label="Mostrar próxima imagem"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border hover:bg-surface-secondary focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </figcaption>
      )}
    </figure>
  );
}
