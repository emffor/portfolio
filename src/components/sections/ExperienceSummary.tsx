import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Button } from "@/components/ui/Button";

export function ExperienceSummary() {
  return (
    <section
      id="sobre"
      aria-label="Sobre mim"
      className="section-highlight scroll-mt-20 py-10 sm:py-16"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        <ul className="flex flex-col gap-6 md:justify-center md:gap-8">
          {PROFILE_DATA.indicators.map((item) => (
            <li key={item.label} className="space-y-1">
              <p className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {item.value}
              </p>
              <p className="max-w-[16rem] font-sans text-sm text-muted">
                {item.label}
              </p>
            </li>
          ))}
        </ul>

        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Sobre
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Sobre mim
          </h2>
          <div
            aria-hidden="true"
            className="mt-4 h-1 w-14 rounded-full bg-accent"
          />
          <p className="mt-6 font-sans text-sm sm:text-base text-muted leading-relaxed">
            {PROFILE_DATA.summary}
          </p>
          <Button
            href={PROFILE_DATA.socials.linkedin.url}
            variant="outline"
            size="lg"
            className="mt-6"
            aria-label={PROFILE_DATA.socials.linkedin.label}
          >
            Visitar LinkedIn
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M5 12h14m-7-7 7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
