import React from "react";
import { TECH_CATEGORIES } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function TechStack() {
  return (
    <section
      id="sobre"
      aria-label="Tecnologias principais e competências"
      className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <SectionHeading
        tag="Competências"
        title="Tecnologias Principais"
        description="Ferramentas e tecnologias aplicadas no desenvolvimento diário de aplicações web, mobile e APIs de alta confiabilidade."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECH_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 p-6 space-y-4"
          >
            <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center justify-between">
              <span>{category.title}</span>
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                {category.skills.length} techs
              </span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="subtle">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
