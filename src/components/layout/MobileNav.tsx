"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/data/navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        buttonRef.current?.focus();
      }
    };
    const handlePointerDown = (e: PointerEvent) => {
      if (e.target instanceof Node && !containerRef.current?.contains(e.target)) {
        close();
      }
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (media.matches) close();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    media.addEventListener("change", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      media.removeEventListener("change", handleResize);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="lg:hidden"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
    >
      <button
        ref={buttonRef}
        onClick={toggle}
        type="button"
        className="inline-flex items-center justify-center w-11 h-11 rounded-md border border-border text-muted hover:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        aria-label={isOpen ? "Fechar menu principal" : "Abrir menu principal"}
      >
        {isOpen ? (
          <svg
            className="w-4 h-4"
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
        ) : (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <div
        id="mobile-navigation-menu"
        hidden={!isOpen}
        className="absolute top-16 left-0 right-0 z-50 max-h-[calc(100svh_-_4rem)] overflow-y-auto border-b border-border bg-background/95 px-6 py-4 shadow-xl backdrop-blur-sm"
      >
        <nav
          aria-label="Navegação móvel"
          className="flex flex-col gap-1"
        >
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                close();
                buttonRef.current?.focus({ preventScroll: true });
              }}
              className="flex min-h-11 items-center rounded-sm py-2 font-sans text-base font-medium text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
