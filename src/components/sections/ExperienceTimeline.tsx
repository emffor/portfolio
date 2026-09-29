import React from "react";
import { getExperiences } from "@/data/experience";
import { PROFILE_DATA } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ExperienceRelatedLinkType } from "@/types/experience";
import { TbExternalLink } from "react-icons/tb";

const RELATED_LINK_GROUP_LABELS: Record<
  Exclude<ExperienceRelatedLinkType, "company">,
  string
> = {
  product: "Produtos em que atuei",
  client: "Cliente / Instituição",
};

const RELATED_LINK_TYPES: readonly ExperienceRelatedLinkType[] = [
  "company",
  "product",
  "client",
];

export async function ExperienceTimeline() {
  const experiences = await getExperiences();

  return (
    <section
      id="experiencia"
      aria-label="Experiência profissional"
      className="section-highlight scroll-mt-20 py-10 sm:py-16"
    >
      <SectionHeading
        tag="Trajetória"
        title="Experiência Profissional"
        description="Onde trabalhei e quais responsabilidades assumi em cada etapa."
      />

      {experiences.length === 0 ? (
        <div className="max-w-3xl rounded-xl border border-border bg-surface p-6 sm:p-8">
          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
            Trajetória profissional detalhada disponível no LinkedIn, incluindo
            cargos, períodos e responsabilidades por empresa.
          </p>
          <a
            href={PROFILE_DATA.socials.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={PROFILE_DATA.socials.linkedin.label}
            className="mt-4 inline-flex items-center font-sans text-sm font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
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
        <ol className="relative max-w-4xl space-y-5">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="relative pl-6">
              <span
                className="absolute left-0 top-5 h-2 w-2 rounded-full bg-accent"
                aria-hidden="true"
              />
              <article
                className={
                  exp.featured
                    ? "space-y-3 rounded-xl border border-accent/25 bg-surface/60 p-5 sm:p-6"
                    : "space-y-2.5 py-2"
                }
              >
                <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="mt-0.5 font-sans text-sm text-muted">
                      {exp.role}
                    </p>
                    {exp.recognition && (
                      <div className="mt-2">
                        <Badge variant="subtle">{exp.recognition}</Badge>
                      </div>
                    )}
                  </div>
                  <p className="shrink-0 font-mono text-xs text-muted">
                    {exp.period}
                    {exp.location ? ` · ${exp.location}` : ""}
                    {exp.workModel ? ` · ${exp.workModel}` : ""}
                  </p>
                </header>

                <p className="font-sans text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>

                {exp.responsibilities.length > 0 && (
                  <ul className="space-y-1.5 font-sans text-sm leading-relaxed text-muted">
                    {exp.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="shrink-0 font-bold text-emerald-500"
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
                    className="flex flex-wrap gap-1.5 pt-1"
                    aria-label={`Tecnologias em ${exp.company}`}
                  >
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="subtle">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                {exp.relatedLinks && exp.relatedLinks.length > 0 && (
                  <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
                    {RELATED_LINK_TYPES.map((type) => {
                      const links = exp.relatedLinks?.filter(
                        (link) => link.type === type
                      );

                      if (!links?.length) return null;

                      return (
                        <div
                          key={type}
                          className="flex flex-wrap items-center gap-x-3 gap-y-1"
                        >
                          {type !== "company" && (
                            <span className="font-mono text-[11px] text-muted">
                              {type === "product" && links.length === 1
                                ? "Produto em que atuei"
                                : RELATED_LINK_GROUP_LABELS[type]}
                            </span>
                          )}
                          {links.map((link) => (
                            <a
                              key={`${link.type}-${link.url}`}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${link.label} (abre em nova aba)`}
                              className="inline-flex items-center gap-1 font-sans text-xs font-medium text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-sm"
                            >
                              {link.label}
                              <TbExternalLink
                                className="h-3.5 w-3.5 shrink-0"
                                aria-hidden="true"
                              />
                            </a>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      )}

      <div className="mt-8 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
          Formação
        </span>
        <p className="font-sans text-sm text-foreground">
          {PROFILE_DATA.education.degree} · {PROFILE_DATA.education.institution} ·{" "}
          {PROFILE_DATA.education.completionYear}
        </p>
      </div>
    </section>
  );
}
