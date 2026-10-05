"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LocaleToggle } from "@/components/layout/LocaleToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

export function Header({ lang = "pt" }: { lang?: Locale }) {
  const dict = getDictionary(lang);
  const homeHref = lang === "en" ? "/en#inicio" : "/#inicio";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-assembly="header"
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background/85 backdrop-blur-sm transition-colors",
        scrolled ? "border-border" : "border-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between gap-4">
        <Link
          href={homeHref}
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          aria-label={dict.brandAria}
        >
          <span className="text-base sm:text-lg font-bold tracking-tight font-display text-foreground">
            Eloan{" "}
            <span className="text-accent">Ferreira</span>
          </span>
        </Link>

        <DesktopNav lang={lang} />

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LocaleToggle lang={lang} />
          <ThemeToggle lang={lang} />
          <MobileNav lang={lang} />
        </div>
      </div>
    </header>
  );
}
