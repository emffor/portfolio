import React from "react";
import { PROFILE_DATA } from "@/data/profile";

const indicators = [
  {
    value: PROFILE_DATA.yearsOfExperience,
    label: "Anos de experiência",
  },
  {
    value: "Full Stack",
    label: "Web & Mobile",
  },
];

export function ExperienceSummary() {
  return (
    <section
      id="sobre"
      aria-label="Sobre mim"
      className="scroll-mt-20 bg-[radial-gradient(ellipse_75%_65%_at_50%_45%,var(--surface-secondary)_0%,transparent_72%)] py-16 sm:py-24"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        {/* Coluna esquerda: indicadores profissionais */}
        <div className="flex flex-row gap-8 md:flex-col md:justify-center md:gap-10">
          {indicators.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                {item.value}
              </p>
              <p className="font-sans text-sm text-muted">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Coluna direita: texto profissional */}
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Sobre
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Sobre mim
          </h2>
          <div
            aria-hidden="true"
            className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-accent to-[#a6c5bf]"
          />
          <p className="mt-6 font-sans text-sm sm:text-base text-muted leading-relaxed">
            {PROFILE_DATA.summary}
          </p>
          <a
            href={PROFILE_DATA.socials.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={PROFILE_DATA.socials.linkedin.label}
            className="mt-6 inline-flex items-center font-sans text-sm font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            LinkedIn
            <svg
              className="w-3.5 h-3.5 ml-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
