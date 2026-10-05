"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

function counterpartPath(pathname: string, lang: Locale): string {
  if (lang === "pt") {
    if (pathname === "/") return "/en";
    return `/en${pathname}`;
  }
  const stripped = pathname.replace(/^\/en(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export function LocaleToggle({ lang = "pt" }: { lang?: Locale }) {
  const dict = getDictionary(lang);
  const pathname = usePathname();
  const target = counterpartPath(pathname ?? (lang === "en" ? "/en" : "/"), lang);

  return (
    <Link
      href={target}
      aria-label={dict.localeToggleAria}
      title={dict.localeToggleAria}
      className="inline-flex items-center justify-center h-11 min-w-11 gap-1.5 rounded-md border border-border px-2.5 font-mono text-xs font-semibold text-muted transition-colors hover:bg-surface-secondary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
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
          strokeWidth={1.75}
          d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3 7.5 7.03 7.5 12s2.015 9 4.5 9zm-8.5-9h17"
        />
      </svg>
      {dict.localeToggleShort}
    </Link>
  );
}
