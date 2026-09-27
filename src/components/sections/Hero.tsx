import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Apresentação inicial"
      className="relative pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-20"
    >
      <div className="max-w-4xl space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200/80 dark:border-emerald-800/60 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Disponível para novos projetos e oportunidades</span>
        </div>

        {/* Nome & Título Principal */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {PROFILE_DATA.name}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-zinc-600 dark:text-zinc-300 tracking-tight">
            {PROFILE_DATA.title} &bull;{" "}
            <span className="text-zinc-500 dark:text-zinc-400">
              {PROFILE_DATA.yearsOfExperience} de experiência
            </span>
          </p>
        </div>

        {/* Descrição Profissional */}
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
          {PROFILE_DATA.headline} Especialista em ecossistemas{" "}
          <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
            TypeScript/Node.js
          </strong>{" "}
          e{" "}
          <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
            PHP/Laravel
          </strong>
          , combinando rigor técnico, arquitetura limpa e entrega de valor consistente para o negócio.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button href="#projetos" variant="primary" size="lg">
            Ver projetos
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Button>

          <Button
            href={PROFILE_DATA.socials.github.url}
            variant="outline"
            size="lg"
            aria-label={PROFILE_DATA.socials.github.label}
          >
            <svg
              className="w-4 h-4 mr-1.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            GitHub
          </Button>

          <Button
            href={PROFILE_DATA.socials.linkedin.url}
            variant="outline"
            size="lg"
            aria-label={PROFILE_DATA.socials.linkedin.label}
          >
            <svg
              className="w-4 h-4 mr-1.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}
