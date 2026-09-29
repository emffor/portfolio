import React from "react";
import { SKILL_AREAS } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillIcon } from "@/components/ui/SkillIcon";

export function TechStack() {
  return (
    <section
      id="tecnologias"
      aria-label="Skills e tecnologias"
      className="scroll-mt-20 py-10 sm:py-16"
    >
      <SectionHeading
        tag="Stack"
        title="Skills"
        description="Competências usadas na evolução, entrega e sustentação de sistemas."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {SKILL_AREAS.map((area) => (
          <article
            key={area.title}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/30 bg-accent-soft text-accent">
                <SkillIcon name={area.icon} />
              </span>
              <h3 className="font-display text-sm font-semibold tracking-tight text-foreground">
                {area.title}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-1.5" aria-label={area.title}>
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
