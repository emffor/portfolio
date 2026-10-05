import Link from "next/link";
import { PROFILE_DATA } from "@/data/profile";
import { Experience } from "@/types/experience";
import { Project } from "@/types/project";
import { RESUME_DATA } from "@/data/resume";
import { Button } from "@/components/ui/Button";
import { SITE_URL } from "@/lib/constants";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref, type Locale } from "@/i18n/locale";

interface ResumeViewProps {
  experiences: readonly Experience[];
  projects: readonly Project[];
  lang?: Locale;
}

export function ResumeView({ experiences, projects, lang = "pt" }: ResumeViewProps) {
  const dict = getDictionary(lang);
  const resumeTitle =
    lang === "en" ? (RESUME_DATA.titleEn ?? RESUME_DATA.title) : RESUME_DATA.title;
  const resumeSummary =
    lang === "en" ? (RESUME_DATA.summaryEn ?? RESUME_DATA.summary) : RESUME_DATA.summary;

  return (
    <article className="resume-page mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-16">
      <div className="resume-actions mb-8">
        <Button href={localizedHref("/", lang)} variant="ghost">{dict.resumePage.back}</Button>
      </div>

      <header className="border-b border-border pb-6">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{PROFILE_DATA.name}</h1>
        <p className="mt-2 text-lg font-medium text-accent">{resumeTitle}</p>
        <p className="mt-2 text-sm text-muted">{PROFILE_DATA.positioning} · {RESUME_DATA.location}</p>
        <ul aria-label={dict.resumePage.contactAria} className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <li><a href={RESUME_DATA.phone.href} className="underline underline-offset-4">{RESUME_DATA.phone.label}</a></li>
          {PROFILE_DATA.socials.email && (
            <li><a href={`mailto:${PROFILE_DATA.socials.email}`} className="break-all underline underline-offset-4">{PROFILE_DATA.socials.email}</a></li>
          )}
          <li><a href={SITE_URL} className="underline underline-offset-4">{new URL(SITE_URL).host}</a></li>
          {[PROFILE_DATA.socials.linkedin, PROFILE_DATA.socials.github].map((social) => (
            <li key={social.name}>
              <a href={social.url} className="break-all underline underline-offset-4">{social.url.replace(/^https?:\/\//, "")}</a>
            </li>
          ))}
        </ul>
        <div className="resume-actions mt-6 border-t border-border pt-5">
          <div className="w-full sm:w-fit">
            <Button
              href={RESUME_DATA.document.href}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="w-full sm:w-auto"
              aria-label={dict.resumePage.docAria}
            >
              {dict.resumePage.docButton}
            </Button>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            {dict.resumePage.docHint}
          </p>
        </div>
      </header>

      <section aria-labelledby="resume-summary" className="mt-8">
        <h2 id="resume-summary" className="font-display text-xl font-semibold">{dict.resumePage.summary}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{resumeSummary}</p>
      </section>

      <section aria-labelledby="resume-skills" className="mt-8">
        <h2 id="resume-skills" className="font-display text-xl font-semibold">{dict.resumePage.skills}</h2>
        <dl className="mt-3 space-y-2 text-sm leading-relaxed">
          {RESUME_DATA.skillAreas.map((area) => (
            <div key={area.title} className="resume-entry">
              <dt className="inline font-semibold">{lang === "en" ? (area.titleEn ?? area.title) : area.title}: </dt>
              <dd className="inline text-muted">{(lang === "en" ? (area.itemsEn ?? area.items) : area.items).join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="resume-experience" className="mt-8">
        <h2 id="resume-experience" className="font-display text-xl font-semibold">{dict.resumePage.experience}</h2>
        <div className="mt-5 space-y-6">
          {experiences.map((experience) => (
            <div key={`${experience.company}-${experience.period}`} className="resume-entry">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-base font-semibold">{experience.company} · {lang === "en" ? (experience.roleEn ?? experience.role) : experience.role}</h3>
                <p className="text-xs text-muted">{lang === "en" ? (experience.periodEn ?? experience.period) : experience.period}</p>
              </div>
              {experience.location && <p className="mt-1 text-xs text-muted">{experience.location}</p>}
              <p className="mt-2 text-sm leading-relaxed text-muted">{experience.description}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                {(experience.resumeResponsibilities ?? experience.responsibilities).map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
              {experience.recognition && <p className="mt-2 text-sm font-medium">{dict.resumePage.recognitionPrefix}{lang === "en" ? (experience.recognitionEn ?? experience.recognition) : experience.recognition}</p>}
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="resume-projects" className="mt-8">
        <h2 id="resume-projects" className="font-display text-xl font-semibold">{dict.resumePage.projects}</h2>
        <div className="mt-4 space-y-4">
          {projects.filter((project) => project.kind !== "technical-study").slice(0, 3).map((project) => (
            <div key={project.slug} className="resume-entry">
              <h3 className="font-display text-base font-semibold">
                <Link href={localizedHref(`/projetos/${project.slug}`, lang)} className="underline underline-offset-4">{project.title}</Link>
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{project.outcomeSummary}</p>
              <p className="mt-1 text-xs text-muted">{project.primaryTechnologies?.join(" · ")}</p>
              <p className="mt-1 text-xs text-muted">
                <a href={`${SITE_URL}${lang === "en" ? "/en" : ""}/projetos/${project.slug}`} className="break-all">{new URL(SITE_URL).host}{lang === "en" ? "/en" : ""}/projetos/{project.slug}</a>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="resume-education" className="resume-entry mt-8">
        <h2 id="resume-education" className="font-display text-xl font-semibold">{dict.resumePage.education}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {PROFILE_DATA.education.degree} · {PROFILE_DATA.education.institution} · {PROFILE_DATA.education.completionYear}
        </p>
        {PROFILE_DATA.languages?.map((language) => (
          <p key={language.name} className="mt-1 text-sm text-muted">{language.name}: {language.level}</p>
        ))}
      </section>
    </article>
  );
}
