import React from "react";
import Link from "next/link";
import { getExperiences } from "@/data/experience";
import { PROFILE_DATA } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ExperienceRelatedLinkType } from "@/types/experience";
import { TbExternalLink } from "react-icons/tb";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref, localizedId, type Locale } from "@/i18n/locale";

const RELATED_LINK_TYPES: readonly ExperienceRelatedLinkType[] = [
  "company",
  "product",
  "client",
];

export async function ExperienceTimeline({ lang = "pt" }: { lang?: Locale }) {
  const experiences = await getExperiences();
  const dict = getDictionary(lang);
  const groupLabels: Record<
    Exclude<ExperienceRelatedLinkType, "company">,
    string
  > = {
    product: dict.timeline.groupProduct,
    client: dict.timeline.groupClient,
  };

  return (
    <section
      id={localizedId("experiencia", lang)}
      aria-label={lang === "en" ? "Professional experience" : "Experiência profissional"}
      className="section-highlight scroll-mt-20 py-10 sm:py-16"
    >
      <SectionHeading
        tag={dict.timeline.tag}
        title={dict.timeline.title}
        description={dict.timeline.description}
      />

      {experiences.length === 0 ? (
        <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
            {dict.timeline.emptyFallback}
          </p>
          <a
            href={PROFILE_DATA.socials.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={lang === "en" ? (PROFILE_DATA.socials.linkedin.labelEn ?? PROFILE_DATA.socials.linkedin.label) : PROFILE_DATA.socials.linkedin.label}
            className="mt-4 inline-flex items-center font-sans text-sm font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            {dict.timeline.linkedinCta}
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
        <div className="space-y-6">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className={
                exp.featured
                  ? "rounded-xl border border-accent/40 bg-surface p-6 sm:p-7 shadow-sm transition-colors hover:border-accent/60"
                  : "rounded-xl border border-border bg-surface p-6 sm:p-7 transition-colors hover:border-accent/40"
              }
            >
              <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                      {exp.company}
                    </h3>
                    {exp.recognition && (
                      <Badge variant="subtle">{lang === "en" ? (exp.recognitionEn ?? exp.recognition) : exp.recognition}</Badge>
                    )}
                  </div>
                  <p className="mt-1 font-sans text-sm font-medium text-accent">
                    {lang === "en" ? (exp.roleEn ?? exp.role) : exp.role}
                  </p>
                </div>
                <p className="font-mono text-xs leading-relaxed text-muted sm:max-w-64 sm:text-right">
                  {lang === "en" ? (exp.periodEn ?? exp.period) : exp.period}
                  {exp.location ? ` · ${exp.location}` : ""}
                  {exp.workModel ? ` · ${exp.workModel}` : ""}
                </p>
              </header>

              <p className="mt-3.5 font-sans text-sm leading-relaxed text-muted">
                {lang === "en" ? (exp.descriptionEn ?? exp.description) : exp.description}
              </p>

              {exp.responsibilities.length > 0 && (
                <ul className="mt-4 space-y-2 font-sans text-sm leading-relaxed text-foreground/90">
                  {(lang === "en" ? (exp.responsibilitiesEn ?? exp.responsibilities) : exp.responsibilities)
                    .slice(0, exp.featured ? 3 : exp.responsibilities.length)
                    .map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>
              )}

              {exp.featured && exp.responsibilities.length > 3 && (
                <details className="mt-4 text-sm">
                  <summary className="cursor-pointer py-2 font-medium text-accent">
                    {dict.timeline.otherResponsibilities}
                  </summary>
                  <ul className="mt-2 list-disc space-y-2 pl-5 leading-relaxed text-muted">
                    {(lang === "en" ? (exp.responsibilitiesEn ?? exp.responsibilities) : exp.responsibilities).slice(3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
              )}

              {exp.relatedLinks && exp.relatedLinks.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 pt-2 border-t border-border/50">
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
                              ? dict.timeline.groupProductSingle
                              : groupLabels[type]}
                          </span>
                        )}
                        {links.map((link) => {
                          const linkLabel = lang === "en" ? (link.labelEn ?? link.label) : link.label;
                          if (!link.url) {
                            return (
                              <span
                                key={`${link.type}-${link.label}`}
                                className="font-sans text-xs font-medium text-muted sm:text-sm"
                              >
                                {linkLabel}
                              </span>
                            );
                          }

                          const isInternal = link.url.startsWith("/");
                          const linkClasses =
                            "inline-flex items-center gap-1 font-sans text-xs font-medium text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-sm";

                          if (isInternal) {
                            return (
                              <Link
                                key={`${link.type}-${link.url}`}
                                href={localizedHref(link.url, lang)}
                                className={linkClasses}
                              >
                                {linkLabel}
                                <span aria-hidden="true" className="text-xs">
                                  →
                                </span>
                              </Link>
                            );
                          }

                          return (
                            <a
                              key={`${link.type}-${link.url}`}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${linkLabel}${dict.timeline.externalSuffix}`}
                              className={linkClasses}
                            >
                              {linkLabel}
                              <TbExternalLink
                                className="h-3.5 w-3.5 shrink-0"
                                aria-hidden="true"
                              />
                            </a>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              )}

              {exp.technologies.length > 0 && (
                <div
                  className="mt-4 flex flex-wrap gap-1.5 pt-1"
                  aria-label={`${dict.timeline.techAriaPrefix}${exp.company}`}
                >
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="subtle">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}

      <div className="mt-8 rounded-xl border border-border bg-surface p-5 sm:p-6 space-y-3">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
            {dict.timeline.education}
          </span>
          <p className="font-sans text-sm text-foreground">
            {lang === "en" ? (PROFILE_DATA.education.degreeEn ?? PROFILE_DATA.education.degree) : PROFILE_DATA.education.degree} · {PROFILE_DATA.education.institution} ·{" "}
            {PROFILE_DATA.education.completionYear}
          </p>
        </div>
        {PROFILE_DATA.languages && PROFILE_DATA.languages.length > 0 && (
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
              {dict.timeline.languages}
            </span>
            <p className="font-sans text-sm text-foreground">
              {PROFILE_DATA.languages
                .map((language) => `${lang === "en" ? (language.nameEn ?? language.name) : language.name} · ${lang === "en" ? (language.levelEn ?? language.level) : language.level}`)
                .join(" · ")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
