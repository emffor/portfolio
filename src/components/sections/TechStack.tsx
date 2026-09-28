import React from "react";
import { TECH_CATEGORIES } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function TechStack() {
  return (
    <section
      id="tecnologias"
      aria-label="Tecnologias e ferramentas"
      className="scroll-mt-20 border-t border-slate-200/70 py-16 sm:py-24 dark:border-white/[0.06]"
    >
      <SectionHeading
        tag="Ferramentas"
        title="Tecnologias"
        description="Ecossistemas e ferramentas com os quais trabalho no dia a dia."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECH_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="rounded-xl border border-slate-200/80 bg-white p-6 space-y-4 dark:border-white/[0.07] dark:bg-[#0e1730]"
          >
            <h3 className="font-display text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100 flex items-center justify-between">
              <span>{category.title}</span>
              <span className="font-sans text-xs font-medium text-slate-400 dark:text-slate-500">
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
