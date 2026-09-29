"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ProjectScreenshot } from "@/types/project";

interface ProjectImageCarouselProps {
  images: readonly ProjectScreenshot[];
  projectTitle: string;
  priority: boolean;
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
}: ProjectImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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

  return (
    <div
      className="relative h-full w-full"
      role="group"
      aria-roledescription="carrossel"
      aria-label={`Imagens de ${projectTitle}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
      }}
    >
      <div className="relative h-full w-full" aria-live={isPlaying ? "off" : "polite"}>
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt || `Demonstração visual do projeto ${projectTitle}`}
            fill
            preload={priority && index === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 360px"
            className={`object-contain object-center transition-opacity duration-700 ease-in-out ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={activeIndex !== index}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div
          className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-black/65 px-2 py-1 shadow-sm backdrop-blur-sm"
          role="group"
          aria-label={`Imagens do projeto ${projectTitle}`}
        >
          <button
            type="button"
            disabled={reducedMotion}
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={
              reducedMotion
                ? "Rotação desativada: movimento reduzido"
                : isPaused ? "Retomar rotação de imagens" : "Pausar rotação de imagens"
            }
            className="flex h-11 w-11 items-center justify-center rounded-full text-white focus-visible:ring-2 focus-visible:ring-white disabled:opacity-60"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {reducedMotion || isPaused ? (
                <path d="M8 5v14l11-7z" />
              ) : (
                <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
              )}
            </svg>
          </button>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Mostrar imagem ${index + 1} de ${images.length}`}
              aria-pressed={activeIndex === index}
              onClick={() => {
                setIsPaused(true);
                setActiveIndex(index);
              }}
              className="flex h-11 w-11 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
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
