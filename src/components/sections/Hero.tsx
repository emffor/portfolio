import React from "react";
import Image from "next/image";
import { PROFILE_DATA } from "@/data/profile";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Apresentação inicial"
      className="relative pt-10 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[120px] dark:bg-purple-600/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-20 -z-10 h-[320px] w-[320px] rounded-full bg-fuchsia-600/5 blur-[100px] dark:bg-fuchsia-600/10"
      />

      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="space-y-6 sm:space-y-7">
          <div className="inline-flex items-center text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            <span>Olá, eu sou</span>
            <span className="typing-cursor" aria-hidden="true" />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-display">
              <span className="text-zinc-950 dark:text-white">Eloan </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400">
                Ferreira
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-zinc-800 dark:text-zinc-200 tracking-tight font-display">
              Desenvolvedor Full Stack Sênior
            </p>
          </div>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-lg">
            Construo produtos rápidos e acessíveis — de APIs REST robustas e arquiteturas escaláveis a interfaces bem acabadas com rigor técnico e foco em valor de negócio.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Button
              href={PROFILE_DATA.socials.github.url}
              variant="glow"
              size="lg"
              className="h-11 px-7 rounded-md text-sm font-medium"
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
              Visitar GitHub
            </Button>

            <Button
              href="#contato"
              variant="outline"
              size="lg"
              className="h-11 px-7 rounded-md text-sm font-medium border-zinc-300 dark:border-zinc-700/80 bg-zinc-100/50 dark:bg-zinc-900/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm"
            >
              Falar comigo
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
          </div>
        </div>

        {/* Coluna da Direita: foto de perfil */}
        <div className="relative flex justify-center lg:justify-end items-center py-6 lg:py-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100 shadow-xl shadow-zinc-950/10 dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/40">
            <Image
              src="/assets/avatar-eloan.png"
              alt="Eloan Ferreira - Desenvolvedor Full Stack Sênior"
              width={1254}
              height={1254}
              priority
              sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 400px"
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
