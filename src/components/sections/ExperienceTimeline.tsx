import React from "react";
import { getExperiences } from "@/data/experience";
import { PROFILE_DATA } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export async function ExperienceTimeline() {
  const experiences = await getExperiences();

  return (
    <section
      id="experiencia"
      aria-label="Experiência profissional"
      className="scroll-mt-20 border-t border-slate-200/70 py-16 sm:py-24 dark:border-white/[0.06]"
    >
      <SectionHeading
        tag="Trajetória"
        title="Experiência Profissional"
        description="Onde trabalhei e quais responsabilidades assumi em cada etapa."
      />

      {experiences.length === 0 ? (
        <div className="max-w-3xl rounded-xl border border-slate-200/80 bg-white p-6 sm:p-8 dark:border-white/[0.07] dark:bg-[#0e1730]">
          <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Trajetória profissional detalhada disponível no LinkedIn, incluindo
            cargos, períodos e responsabilidades por empresa.
          </p>
          <a
            href={PROFILE_DATA.socials.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={PROFILE_DATA.socials.linkedin.label}
            className="mt-4 inline-flex items-center font-sans text-sm font-medium text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded dark:text-slate-100 dark:decoration-white/20"
          >
            Ver experiência no LinkedIn
            <svg
              className="w-3.5 h-3.5 ml-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      ) : (
        <ol className="relative space-y-8 max-w-3xl">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="relative pl-6">
              <span
                className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-300"
                aria-hidden="true"
              />
              <article className="space-y-3">
                <div>
                  <h3 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                    {exp.role} &bull; {exp.company}
                  </h3>
                  <p className="mt-0.5 font-sans text-sm text-slate-500 dark:text-slate-400">
                    {exp.period}
                    {exp.location ? ` • ${exp.location}` : ""}
                    {exp.workModel ? ` • ${exp.workModel}` : ""}
                  </p>
                </div>
                <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
                {exp.responsibilities.length > 0 && (
                  <ul className="space-y-1.5 font-sans text-sm text-slate-600 dark:text-slate-400">
                    {exp.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="text-emerald-500 font-bold shrink-0"
                          aria-hidden="true"
                        >
                          ›
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {exp.technologies.length > 0 && (
                  <div
                    className="flex flex-wrap gap-1.5"
                    aria-label={`Tecnologias em ${exp.company}`}
                  >
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="subtle">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
