import React from "react";
import { SKILLS } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillIcon } from "@/components/ui/SkillIcon";
import { SkillRating } from "@/components/ui/SkillRating";

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
        description="Ferramentas, práticas e habilidades que uso no dia a dia."
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((skill) => (
          <article
            key={skill.title}
            className="group h-full overflow-hidden rounded-xl border border-border bg-surface"
          >
            <div className="hover-zoom origin-center p-4 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md border border-accent/30 bg-accent-soft text-accent">
                <SkillIcon name={skill.icon} />
              </div>
              <h3 className="font-display text-sm font-semibold tracking-tight text-foreground">
                {skill.title}
              </h3>
              <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-muted">
                {skill.description}
              </p>
              {typeof skill.rating === "number" && (
                <SkillRating rating={skill.rating} />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
