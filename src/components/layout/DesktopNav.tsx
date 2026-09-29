"use client";

import React, { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAVIGATION_ITEMS } from "@/data/navigation";

export function DesktopNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const sections = NAVIGATION_ITEMS.map((item) =>
        item.href.replace("/#", "")
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection("");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");

      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 76;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          setActiveSection(targetId);
          window.history.pushState(null, "", href);
        }
      } else {
        e.preventDefault();
        startTransition(() => {
          router.push(href);
        });
      }
    }
  };

  return (
    <nav
      aria-label="Navegação Principal"
      className="hidden md:flex items-center gap-6 font-sans text-sm font-medium"
    >
      {NAVIGATION_ITEMS.map((item) => {
        const targetId = item.href.replace("/#", "");
        const isActive = activeSection === targetId;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={`relative py-1.5 transition-all duration-200 hover:text-accent hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded ${
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
