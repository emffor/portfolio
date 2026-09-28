import React from "react";
import Image from "next/image";
import { PROFILE_DATA } from "@/data/profile";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Apresentação inicial"
      className="relative pt-12 sm:pt-20 lg:pt-28 pb-20 sm:pb-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-[480px] w-[480px] rounded-full bg-purple-600/15 blur-[120px] dark:bg-purple-600/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-24 -z-10 h-[380px] w-[380px] rounded-full bg-fuchsia-600/10 blur-[100px] dark:bg-fuchsia-600/20"
      />

      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="space-y-6 sm:space-y-8">
          <div className="inline-flex items-center text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            <span>Olá, eu sou</span>
            <span className="typing-cursor" aria-hidden="true" />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400">
                {PROFILE_DATA.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-zinc-800 dark:text-zinc-200 tracking-tight">
              {PROFILE_DATA.title}{" "}
              <span className="text-zinc-500 dark:text-zinc-400 font-normal">
                &bull; {PROFILE_DATA.yearsOfExperience} de experiência
              </span>
            </p>
          </div>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
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
            <Button href="#projetos" variant="glow" size="lg">
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

        <div className="relative flex justify-center py-6 lg:py-0">
          <div className="avatar-orbits" aria-hidden="true">
            <span className="avatar-orbit avatar-orbit-outer" />
            <span className="avatar-orbit avatar-orbit-middle" />
            <span className="avatar-orbit avatar-orbit-inner" />
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-[10%] -z-10 rounded-full bg-purple-600/30 dark:bg-purple-600/40 blur-3xl"
          />

          <div className="avatar-frame relative w-full max-w-[340px] sm:max-w-md rounded-[1.75rem] p-px">
            <div className="overflow-hidden rounded-[calc(1.75rem-1px)] bg-[#070313]">
              <Image
                src={PROFILE_DATA.photo?.src || "/assets/dev-perfil.png"}
                alt={PROFILE_DATA.photo?.alt || "Foto de perfil de Eloan Ferreira"}
                width={1024}
                height={1024}
                priority
                className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
              />
            </div>

            <span
              className="avatar-spark avatar-spark-one absolute -right-3 top-[18%] size-3 rounded-full bg-fuchsia-400 shadow-[0_0_18px_#e879f9]"
              aria-hidden="true"
            />
            <span
              className="avatar-spark avatar-spark-two absolute -left-2 bottom-[24%] size-2 rounded-full bg-purple-500 shadow-[0_0_16px_#a855f7]"
              aria-hidden="true"
            />

            {PROFILE_DATA.availableForWork && (
              <div className="avatar-status absolute -bottom-5 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-zinc-950/90 dark:bg-zinc-900/90 px-4 py-2 text-xs font-medium text-white shadow-xl backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                <span>Disponível para projetos</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

