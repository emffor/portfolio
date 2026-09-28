import React from "react";
import Link from "next/link";
import { PROFILE_DATA } from "@/data/profile";
import { NAVIGATION_ITEMS } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/60 py-12 transition-colors mt-auto"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <div>
            {PROFILE_DATA.availableForWork && (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  Disponível para oportunidades
                </span>
              </div>
            )}
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
              {PROFILE_DATA.name} &bull; {PROFILE_DATA.title} &bull; {PROFILE_DATA.domain}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={PROFILE_DATA.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PROFILE_DATA.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>
            &copy; {currentYear} {PROFILE_DATA.name}. Todos os direitos reservados.
          </p>
          <p className="font-mono text-zinc-400 dark:text-zinc-500">
            Next.js &bull; TypeScript &bull; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
