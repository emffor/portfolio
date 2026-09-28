import React from "react";
import { PROFILE_DATA } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="mt-auto w-full border-t border-slate-200/70 py-10 transition-colors dark:border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="font-display text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Eloan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400">
              Ferreira
            </span>
            <span className="ml-3 font-sans text-xs font-normal text-slate-500 dark:text-slate-400">
              © {currentYear}
            </span>
          </p>

          <div className="flex items-center gap-5 font-sans text-sm font-medium text-slate-500 dark:text-slate-400">
            <a
              href={PROFILE_DATA.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={PROFILE_DATA.socials.github.label}
              className="transition-colors hover:text-slate-900 dark:hover:text-slate-100"
            >
              GitHub
            </a>
            <a
              href={PROFILE_DATA.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={PROFILE_DATA.socials.linkedin.label}
              className="transition-colors hover:text-slate-900 dark:hover:text-slate-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
