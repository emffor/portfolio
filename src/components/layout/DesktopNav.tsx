"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavigationItems } from "@/data/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

export function DesktopNav({ lang = "pt" }: { lang?: Locale }) {
  const dict = getDictionary(lang);
  const items = getNavigationItems(lang);
  const homeHref = lang === "en" ? "/en" : "/";
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (pathname !== homeHref) return;

    const sections = items
      .map((item) => item.href.split("#")[1])
      .filter((section): section is string => Boolean(section));
    let frame: number | undefined;
    const handleScroll = () => {
      frame = undefined;
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        setActiveSection(sections[sections.length - 1] ?? "");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          if (element.getBoundingClientRect().top <= 160) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection("");
    };

    const scheduleUpdate = () => {
      if (frame === undefined) frame = window.requestAnimationFrame(handleScroll);
    };

    handleScroll();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname, homeHref, items]);

  return (
    <nav
      aria-label={dict.navPrimaryAria}
      className="hidden lg:flex items-center gap-5 font-sans text-sm font-medium"
    >
      {items.map((item) => {
        const targetId = item.href.split("#")[1] ?? "";
        const isPage = !item.href.includes("#");
        const isActive = isPage
          ? pathname === item.href
          : pathname === homeHref && activeSection === targetId;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? (isPage ? "page" : "location") : undefined}
            className={`relative inline-flex min-h-11 items-center transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded ${
              isActive ? "text-accent font-semibold" : "text-muted"
            }`}
          >
            {item.label}
            {isActive && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
                aria-hidden="true"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
