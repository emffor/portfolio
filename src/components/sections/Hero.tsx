import React from "react";
import Image from "next/image";
import { PROFILE_DATA } from "@/data/profile";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Apresentação inicial"
      className="relative overflow-hidden py-14 sm:py-20 lg:min-h-[78svh] lg:py-0 lg:flex lg:items-center"
    >
      {/* Fundo uniforme em toda a largura, sem brilhos laterais */}


      <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        {/* Coluna esquerda: conteúdo */}
        <div className="space-y-6 sm:space-y-7">
          <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-muted">
            Olá, eu sou
          </p>

          <div className="space-y-3">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Eloan </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">
                Ferreira
              </span>
            </h1>
            <p className="whitespace-nowrap font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground/80">
              {PROFILE_DATA.title}
            </p>
          </div>

          <p className="max-w-lg font-sans text-base sm:text-lg text-muted leading-relaxed">
            {PROFILE_DATA.headline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button href="/#projetos" variant="glow" size="lg">
              Ver projetos
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-7-7l7 7-7 7"
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
                className="w-4 h-4 mr-2"
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
          </div>
        </div>

        {/* Coluna direita: avatar */}
        <div className="relative flex justify-center lg:justify-end">
          <span
            aria-hidden="true"
            className="absolute top-[8%] right-[12%] hidden h-1.5 w-1.5 rounded-full bg-slate-400/60 sm:block"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-[16%] left-[8%] hidden h-1 w-1 rounded-full bg-slate-500/50 sm:block lg:left-[38%]"
          />

          <figure className="relative w-full max-w-[400px] sm:max-w-[460px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft blur-[90px]"
            />
            <div className="relative overflow-hidden rounded-2xl border border-[rgba(99,163,156,0.30)] bg-surface shadow-[0_20px_60px_rgba(0,0,0,0.30),0_0_50px_rgba(99,163,156,0.06)]">
              {PROFILE_DATA.photo ? (
                <Image
                  src={PROFILE_DATA.photo.src}
                  alt={PROFILE_DATA.photo.alt}
                  width={1254}
                  height={1254}
                  priority
                  sizes="(max-width: 640px) 400px, 460px"
                  className="h-auto w-full object-cover aspect-[4/5]"
                />
              ) : null}
              {/* Fusão das bordas com o fundo */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
              />
            </div>

            {PROFILE_DATA.availableForWork && (
              <figcaption className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-surface/95 px-4 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-sm">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Disponível para oportunidades
              </figcaption>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
}
