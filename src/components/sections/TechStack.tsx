import React from "react";
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
        title="Competências Técnicas"
        description="Tecnologias, padrões de arquitetura e ferramentas aplicadas na sustentação, evolução e entrega de sistemas em produção."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {SKILL_AREAS.map((area) => (
          <article
            key={area.title}
            className="flex flex-col justify-between rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 last:odd:sm:col-span-2"
          >
            <div>
              <div className="mb-2 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/30 bg-accent-soft text-accent">
                  <SkillIcon name={area.icon} />
                </span>
                <h3 className="font-display text-sm font-semibold tracking-tight text-foreground">
                  {area.title}
                </h3>
              </div>
              {area.description && (
                <p className="mb-3.5 font-sans text-xs text-muted leading-relaxed">
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
          </article>
        ))}
      </div>
    </section>
  );
}
