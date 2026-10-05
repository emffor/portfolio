import React from "react";
import Link from "next/link";
import { PROFILE_DATA } from "@/data/profile";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref, type Locale } from "@/i18n/locale";

export function ExperienceSummary({ lang = "pt" }: { lang?: Locale }) {
  const dict = getDictionary(lang);
  const summary =
    lang === "en"
      ? (PROFILE_DATA.summaryEn ?? PROFILE_DATA.summary)
      : PROFILE_DATA.summary;
  return (
    <section
      id="sobre"
      aria-label={dict.aboutHeading}
      className="section-highlight scroll-mt-20 py-10 sm:py-16"
    >
      <div className="space-y-8">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {PROFILE_DATA.indicators.map((item) => (
            <li key={item.label} className="space-y-1">
              <p className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {item.value}
              </p>
              <p className="max-w-[16rem] font-sans text-sm text-muted">
                {lang === "en" ? (item.labelEn ?? item.label) : item.label}
              </p>
              {item.href && item.linkLabel && (
                <Link
                  href={localizedHref(item.href, lang)}
                  target={item.href.startsWith("https://") ? "_blank" : undefined}
                  rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                  className="inline-block py-2 text-xs font-medium text-accent underline underline-offset-4"
                >
                  {lang === "en" ? (item.linkLabelEn ?? item.linkLabel) : item.linkLabel}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="grid gap-4 border-t border-border pt-6 md:grid-cols-[1fr_2fr] md:gap-8">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            {dict.aboutHeading}
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
}
