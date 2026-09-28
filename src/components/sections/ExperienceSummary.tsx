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
      className="scroll-mt-20 border-t border-slate-200/70 py-16 sm:py-24 dark:border-white/[0.06]"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        {/* Coluna esquerda: indicadores profissionais */}
        <div className="flex flex-row gap-8 md:flex-col md:justify-center md:gap-10">
          {indicators.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                {item.value}
              </p>
              <p className="font-sans text-sm text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Coluna direita: texto profissional */}
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Sobre
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Sobre mim
          </h2>
          <div
            aria-hidden="true"
            className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-slate-300 to-slate-500 dark:from-slate-500 dark:to-slate-700"
          />
          <p className="mt-6 font-sans text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {PROFILE_DATA.summary}
          </p>
          <a
            href={PROFILE_DATA.socials.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={PROFILE_DATA.socials.linkedin.label}
            className="mt-6 inline-flex items-center font-sans text-sm font-medium text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded dark:text-slate-100 dark:decoration-white/20 dark:hover:decoration-slate-300"
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
