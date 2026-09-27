"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/data/navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        onClick={toggle}
        type="button"
        className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-100"
        aria-expanded={isOpen}
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

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          <nav
            aria-label="Navegação móvel"
            className="flex flex-col space-y-4"
          >
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="text-base font-medium text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
