"use client";

import React, { useTransition } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAVIGATION_ITEMS } from "@/data/navigation";

export function DesktopNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();

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
          element.scrollIntoView({ behavior: "smooth", block: "start" });
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
      className="hidden md:flex items-center gap-6 font-sans text-sm font-medium text-muted"
    >
      {NAVIGATION_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={(e) => handleNavClick(e, item.href)}
          className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded py-1"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
