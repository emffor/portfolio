"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ProjectScreenshot } from "@/types/project";

interface ProjectGalleryProps {
  screenshots?: readonly ProjectScreenshot[];
}

export function ProjectGallery({ screenshots }: ProjectGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const closeModal = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  const showNext = useCallback(() => {
    if (!screenshots || screenshots.length === 0) return;
    setSelectedIdx((prev) =>
      prev === null ? 0 : (prev + 1) % screenshots.length
    );
  }, [screenshots]);

  const showPrev = useCallback(() => {
    if (!screenshots || screenshots.length === 0) return;
    setSelectedIdx((prev) =>
      prev === null
        ? 0
        : (prev - 1 + screenshots.length) % screenshots.length
    );
  }, [screenshots]);

  useEffect(() => {
    if (selectedIdx === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIdx, closeModal, showNext, showPrev]);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  const currentScreenshot =
    selectedIdx !== null ? screenshots[selectedIdx] : null;

  return (
    <section aria-label="Telas e capturas do projeto" className="space-y-6">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
          Telas do projeto
        </h2>
        <span className="font-sans text-xs text-muted">
          Clique para ampliar
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {screenshots.map((shot, idx) => (
          <figure
            key={shot.src}
            className="group cursor-zoom-in overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent/60"
            onClick={() => setSelectedIdx(idx)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedIdx(idx);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Ampliar imagem: ${shot.alt || `Tela ${idx + 1}`}`}
          >
            <div className="relative aspect-[16/10] w-full bg-surface-secondary overflow-hidden">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            {shot.caption && (
              <figcaption className="px-4 py-3 font-sans text-xs sm:text-sm text-muted">
                {shot.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {currentScreenshot && selectedIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada da tela ${selectedIdx + 1}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 md:p-8 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative flex max-h-[92vh] max-w-5xl w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/80 bg-surface/95 shadow-2xl">
            {/* Header com controles */}
            <div className="flex w-full items-center justify-between border-b border-border/70 px-4 py-3 sm:px-6">
              <span className="font-mono text-xs text-muted">
                Tela {selectedIdx + 1} de {screenshots.length}
              </span>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Fechar visualização ampliada (Esc)"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 text-muted transition-colors hover:bg-surface-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Imagem em tamanho ampliado */}
            <div className="relative aspect-[16/10] w-full max-h-[70vh] bg-surface-secondary">
              <Image
                src={currentScreenshot.src}
                alt={currentScreenshot.alt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain object-center"
              />

              {screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      showPrev();
                    }}
                    aria-label="Imagem anterior (Seta para a esquerda)"
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-md backdrop-blur-sm transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <svg
                      className="h-5 w-5"
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
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      showNext();
                    }}
                    aria-label="Próxima imagem (Seta para a direita)"
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-md backdrop-blur-sm transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Legenda técnica */}
            {currentScreenshot.caption && (
              <div className="w-full border-t border-border/70 px-4 py-3 sm:px-6 bg-surface">
                <p className="font-sans text-xs sm:text-sm text-foreground/90">
                  {currentScreenshot.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
