import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ContactCta() {
  return (
    <section
      id="contato"
      aria-label="Informações de contato e canais de comunicação"
      className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/30 p-8 sm:p-12">
        <SectionHeading
          tag="Contato"
          title="Vamos conversar sobre novos desafios?"
          description="Aberto a propostas de trabalho, projetos de desenvolvimento e oportunidades onde excelência técnica e impacto no negócio façam a diferença."
          className="mb-8"
        />

        <div className="flex flex-wrap items-center gap-4">
          {PROFILE_DATA.socials.email && (
            <Button
              href={`mailto:${PROFILE_DATA.socials.email}`}
              variant="primary"
              size="lg"
            >
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {PROFILE_DATA.socials.email}
            </Button>
          )}

          <Button
            href={PROFILE_DATA.socials.linkedin.url}
            variant="outline"
            size="lg"
            aria-label={PROFILE_DATA.socials.linkedin.label}
          >
            LinkedIn
          </Button>

          <Button
            href={PROFILE_DATA.socials.github.url}
            variant="outline"
            size="lg"
            aria-label={PROFILE_DATA.socials.github.label}
          >
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
