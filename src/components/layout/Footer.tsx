import React from "react";
import Link from "next/link";
import { PROFILE_DATA } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="mt-auto w-full border-t border-border py-8 transition-colors"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="font-display text-sm font-bold tracking-tight text-foreground">
            Eloan{" "}
            <span className="text-accent">Ferreira</span>
            <span className="ml-3 font-sans text-xs font-normal text-muted">
              © {currentYear}
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-5 font-sans text-sm font-medium text-muted">
            <Link href="/curriculo" className="inline-flex min-h-11 items-center transition-colors hover:text-accent">
              Currículo
            </Link>
            <a
              href={PROFILE_DATA.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={PROFILE_DATA.socials.github.label}
              className="inline-flex min-h-11 items-center transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={PROFILE_DATA.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={PROFILE_DATA.socials.linkedin.label}
              className="inline-flex min-h-11 items-center transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
