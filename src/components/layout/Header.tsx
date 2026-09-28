import React from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/data/navigation";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/#inicio"
          className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-100 rounded"
          aria-label="Ir para o início do portfólio"
        >
          <span className="text-base sm:text-lg font-bold tracking-tight font-display text-zinc-900 dark:text-white">
            Eloan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
              Ferreira
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegação Principal"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400"
        >
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-100 rounded py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle & Mobile Nav */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
