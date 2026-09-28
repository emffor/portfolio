import React from "react";
import { SKILLS } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillIcon } from "@/components/ui/SkillIcon";

export function TechStack() {
  return (
    <section
      id="tecnologias"
      aria-label="Skills e tecnologias"
      className="scroll-mt-20 border-t border-border py-16 sm:py-24"
    >
      <SectionHeading
        tag="Stack"
        title="Skills"
        description="Ferramentas, práticas e habilidades que uso no dia a dia."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((skill) => (
          <article
            key={skill.title}
            className="group h-full overflow-hidden rounded-xl border border-border bg-surface"
          >
            <div className="hover-zoom origin-center p-5 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent-soft text-accent">
                <SkillIcon name={skill.icon} />
              </div>
              <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                {skill.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
                {skill.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
