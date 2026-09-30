import React from "react";
import Link from "next/link";
import { SKILL_AREAS } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillIcon } from "@/components/ui/SkillIcon";

export function TechStack() {
  return (
    <section
      id="tecnologias"
      aria-label="Competências e tecnologias"
      className="scroll-mt-20 py-10 sm:py-16"
    >
      <SectionHeading
        tag="Competências"
        title="Competências aplicadas"
        description="Minha stack de trabalho, conectada a exemplos de implementação nos projetos e na experiência profissional."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {SKILL_AREAS.map((area) => (
          <article
            key={area.title}
            className="flex flex-col justify-between rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 last:odd:sm:col-span-2"
          >
            <div>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/30 bg-accent-soft text-accent">
                  <SkillIcon name={area.icon} />
                </span>
                <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                  {area.title}
                </h3>
              </div>
              {area.description && (
                <p className="mb-4 font-sans text-sm text-muted leading-relaxed">
                  {area.description}
                </p>
              )}
            </div>
            <ul className="flex flex-wrap gap-1.5 pt-1" aria-label={area.title}>
              {area.items.map((item) => (
                <li key={item}>
                  <Badge variant="subtle">{item}</Badge>
                </li>
              ))}
            </ul>
            {area.evidence && (
              <Link href={area.evidence.href} className="mt-4 inline-flex min-h-11 items-center gap-2 self-start rounded-sm text-sm font-medium text-accent underline underline-offset-4">
                {area.evidence.label}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
