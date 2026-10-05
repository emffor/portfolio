"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ProjectScreenshot } from "@/types/project";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

interface ProjectGalleryProps {
  screenshots?: readonly ProjectScreenshot[];
  lang?: Locale;
}

export function ProjectGallery({ screenshots, lang = "pt" }: ProjectGalleryProps) {
  const dict = getDictionary(lang);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = selectedIdx !== null;

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
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const trigger = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = originalOverflow;
      if (trigger instanceof HTMLElement && trigger.isConnected) {
        trigger.focus({ preventScroll: true });
      }
    };
  }, [isOpen]);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  const currentScreenshot =
    selectedIdx !== null ? screenshots[selectedIdx] : null;

  return (
    <section aria-label={dict.gallery.sectionAria} className="space-y-6">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
          {dict.gallery.title}
        </h2>
        <span className="font-sans text-xs text-muted">
          {dict.gallery.hint}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {screenshots.map((shot, idx) => (
          <figure
            key={shot.src}
            className="group cursor-zoom-in overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent/60"
          >
            <button
              type="button"
              onClick={() => setSelectedIdx(idx)}
              aria-label={`${dict.gallery.enlargePrefix}${shot.alt || `Tela ${idx + 1}`}`}
              aria-haspopup="dialog"
              className="relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden bg-surface-secondary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 639px) 100vw, 420px"
                className="object-contain object-center"
              />
            </button>
            {shot.caption && (
              <figcaption className="px-4 py-3 font-sans text-xs sm:text-sm text-muted">
                {shot.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={dict.gallery.dialogAria}
        className="fixed inset-0 m-auto max-h-[92svh] w-[calc(100%_-_2rem)] max-w-5xl overflow-y-auto rounded-xl border border-border bg-surface p-0 text-foreground shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm"
        onCancel={(event) => {
          event.preventDefault();
          closeModal();
        }}
        onClose={() => {
          if (!dialogRef.current?.open) closeModal();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            showNext();
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            showPrev();
          }
        }}
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          const bounds = e.currentTarget.getBoundingClientRect();
          if (e.clientX < bounds.left || e.clientX > bounds.right || e.clientY < bounds.top || e.clientY > bounds.bottom) {
            closeModal();
          }
        }}
      >
        {currentScreenshot && selectedIdx !== null && (
          <div className="relative flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between border-b border-border/70 px-4 py-3 sm:px-6">
              <span className="font-mono text-xs text-muted" aria-live="polite">
                {dict.gallery.screenWord} {selectedIdx + 1} de {screenshots.length}
              </span>
              <button
                type="button"
                onClick={closeModal}
                aria-label={dict.gallery.closeAria}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border/80 text-muted transition-colors hover:bg-surface-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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

            <div className="relative aspect-[16/10] w-full max-h-[70vh] bg-surface-secondary">
              <Image
                src={currentScreenshot.src}
                alt={currentScreenshot.alt}
                fill
                loading="eager"
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
                    aria-label={dict.gallery.prevAria}
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-md backdrop-blur-sm transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
                    aria-label={dict.gallery.nextAria}
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-md backdrop-blur-sm transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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

            {currentScreenshot.caption && (
              <div className="w-full border-t border-border/70 px-4 py-3 sm:px-6 bg-surface">
                <p className="font-sans text-xs sm:text-sm text-foreground/90">
                  {currentScreenshot.caption}
                </p>
              </div>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}
