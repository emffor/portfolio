import React from "react";
import Link from "next/link";
import { ProjectImageCarousel } from "@/components/ui/ProjectImageCarousel";
import { ProjectScreenshot, Project } from "@/types/project";
import { getFeaturedProjects, getProjectKindLabel } from "@/data/projects";
import { SITE_URL, AUTHOR_NAME } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { ProjectArchitectureDiagram } from "@/components/ui/ProjectArchitecture";
import { ProjectDemoInstructions } from "@/components/ui/ProjectDemoInstructions";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref, localizedId, tx, txList, type Locale } from "@/i18n/locale";

interface ProjectCaseViewProps {
  project: Project;
  lang?: Locale;
}

export async function ProjectCaseView({ project, lang = "pt" }: ProjectCaseViewProps) {
  const dict = getDictionary(lang);
  const slug = project.slug;
  const projectTitle = tx(lang, project.title, project.titleEn);
  const casePath =
    lang === "en" ? `/en/projetos/${project.slug}` : `/projetos/${project.slug}`;

  const featuredProjects = project.featured ? await getFeaturedProjects() : [];
  const currentIndex = featuredProjects.findIndex((item) => item.slug === slug);
  const nextProject =
    currentIndex >= 0 && featuredProjects.length > 1
      ? featuredProjects[(currentIndex + 1) % featuredProjects.length]
      : undefined;
  const prevProject =
    currentIndex >= 0 && featuredProjects.length > 1
      ? featuredProjects[
          (currentIndex - 1 + featuredProjects.length) % featuredProjects.length
        ]
      : undefined;

  const localizeScreenshot = (image: ProjectScreenshot): ProjectScreenshot => ({
    ...image,
      alt:
        lang === "en"
          ? (image.altEn ?? `${dict.carousel.imageFallback}: ${projectTitle}`)
          : image.alt,
    caption:
      lang === "en" ? (image.captionEn ?? image.caption) : image.caption,
  });

  const projectImages: readonly ProjectScreenshot[] = [
    localizeScreenshot({
      src: project.image,
      alt: project.imageAlt ?? `Imagem principal do projeto ${project.title}`,
      altEn: project.imageAltEn,
      caption: project.imageCaption,
      captionEn: project.imageCaptionEn,
    }),
    ...(project.screenshots ?? [])
      .filter((image) => image.src !== project.image)
      .map(localizeScreenshot),
  ];
  const galleryScreenshots = (project.screenshots ?? []).map(localizeScreenshot);

  const caseSections = [
    ...(project.brief?.length ? [{ id: "resumo", label: dict.casePage.briefTitle }] : []),
    { id: "atuacao", label: dict.casePage.roleSection },
    ...(project.outcomes?.length ? [{ id: "entregas", label: dict.casePage.deliverables }] : []),
    { id: "contexto", label: dict.casePage.contextSection },
    { id: "solucao", label: dict.casePage.solutionSection },
    ...(project.technicalChallenges.length ? [{ id: "desafios", label: dict.casePage.challengesSection }] : []),
    ...(project.architecture ? [{ id: "arquitetura", label: dict.architecture.title }] : []),
    ...(project.decisions?.length ? [{ id: "decisoes", label: dict.casePage.decisionsSection }] : []),
    ...(project.authNote || project.limitationNote ? [{ id: "limites", label: dict.casePage.limitsTitle }] : []),
    { id: "stack", label: dict.casePage.stackTitle },
    ...(project.screenshots?.length ? [{ id: "telas", label: dict.gallery.title }] : []),
  ];

  const caseUrl = `${SITE_URL}${casePath}`;
  const caseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${caseUrl}#case`,
        name: projectTitle,
        description: lang === "en" ? (project.shortDescriptionEn ?? project.shortDescription) : project.shortDescription,
        url: caseUrl,
        image: new URL(project.image, SITE_URL).href,
        inLanguage: lang === "en" ? "en" : "pt-BR",
        author: {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: AUTHOR_NAME,
          url: SITE_URL,
        },
        keywords: (project.primaryTechnologies ?? project.technologies).join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: lang === "en" ? "Portfolio" : "Portfólio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: projectTitle, item: caseUrl },
        ],
      },
    ],
  };

  return (
    <article className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-16 space-y-10 sm:space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseSchema).replace(/</g, "\\u003c"),
        }}
      />
      <nav aria-label={dict.casePage.backAria}>
        <Link
          href={localizedHref(project.featured ? "/#projetos" : "/#projetos-adicionais", lang)}
          className="inline-flex items-center gap-1.5 font-sans text-sm text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {dict.casePage.back}
        </Link>
      </nav>

      <header className="space-y-6">
        <div className="max-w-4xl space-y-4">
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
            {getProjectKindLabel(project.kind, lang)}
            <span className="mx-1.5 text-border" aria-hidden="true">
              ·
            </span>
            <span className="text-accent">{tx(lang, project.category, project.categoryEn)}</span>
          </p>
          <h1 className="text-balance font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
            {projectTitle}
          </h1>
          <div
            aria-hidden="true"
            className="h-1 w-14 rounded-full bg-accent"
          />
          <p className="font-sans text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            {tx(lang, project.shortDescription, project.shortDescriptionEn)}
          </p>
        </div>

        <dl className="grid max-w-4xl gap-5 border-y border-border py-5 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs text-muted">{dict.casePage.roleLabel}</dt>
            <dd className="mt-1.5 font-medium">{tx(lang, project.roleLabel ?? AUTHOR_NAME, project.roleLabelEn)}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">{dict.casePage.contextLabel}</dt>
            <dd className="mt-1.5 font-medium">{tx(lang, project.status ?? getProjectKindLabel(project.kind, lang), project.statusEn)}</dd>
          </div>
        </dl>

        {(project.projectUrl || project.githubUrl) && (
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.projectUrl && (
              <Button href={project.projectUrl} variant="primary" size="sm">
                {tx(lang, project.projectUrlLabel ?? dict.card.demoFallback, project.projectUrlLabelEn)}
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="outline"
                size="sm"
                aria-label={`${dict.card.githubAriaPrefix}${projectTitle}${dict.card.githubAriaSuffix}`}
              >
                {dict.casePage.githubButton}
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </Button>
            )}
          </div>
        )}

        <ProjectDemoInstructions demoAccess={project.demoAccess} accessNote={project.accessNote} accessNoteEn={project.accessNoteEn} lang={lang} />
        {project.sourceNote && (
          <p className="text-sm leading-relaxed text-muted">{tx(lang, project.sourceNote, project.sourceNoteEn)}</p>
        )}

        <ProjectImageCarousel
          key={project.slug}
          images={projectImages}
          projectTitle={projectTitle}
          priority
          lang={lang}
          sizes="(max-width: 1200px) 100vw, 1120px"
        />
      </header>

      <div className="grid min-w-0 gap-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
        <nav aria-label={dict.casePage.navTitle} className="self-start border-y border-border py-4 lg:sticky lg:top-24 lg:border-y-0 lg:border-l lg:py-0 lg:pl-5">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">{dict.casePage.navTitle}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 lg:flex-col lg:gap-1">
            {caseSections.map((section) => (
              <li key={section.id}>
                <a href={`#${localizedId(section.id, lang)}`} className="inline-flex min-h-11 items-center rounded-sm text-sm text-muted transition-colors hover:text-accent">
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 space-y-12">
          {project.brief && project.brief.length > 0 && (
            <section id={localizedId("resumo", lang)} aria-labelledby={localizedId("resumo-title", lang)} className="scroll-mt-24 space-y-5">
              <h2 id={localizedId("resumo-title", lang)} className="font-display text-xl font-semibold tracking-tight">
                {dict.casePage.briefTitle}
              </h2>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {project.brief.map((item) => (
                  <div key={item.label} className="border-l-2 border-accent/40 pl-4">
                    <dt className="font-sans text-xs font-semibold uppercase tracking-wide text-accent">
                      {tx(lang, item.label, item.labelEn)}
                    </dt>
                    <dd className="mt-1.5 font-sans text-sm leading-relaxed text-foreground">
                      {tx(lang, item.text, item.textEn)}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <section id={localizedId("atuacao", lang)} aria-label={dict.casePage.roleSection} className="scroll-mt-24 space-y-3">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
              {dict.casePage.roleSection}
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
              {tx(lang, project.myRole, project.myRoleEn)}
            </p>
          </section>

          {!!project.outcomes?.length && (
            <section id={localizedId("entregas", lang)} aria-labelledby={localizedId("entregas-title", lang)} className="scroll-mt-24 space-y-5">
              <div className="space-y-2">
                <h2 id={localizedId("entregas-title", lang)} className="font-display text-xl font-semibold tracking-tight">
                  {dict.casePage.deliverables}
                </h2>
                <p className="text-sm leading-relaxed text-muted">
                  {project.kind === "technical-study"
                    ? dict.casePage.deliverablesSubStudy
                    : dict.casePage.deliverablesSubDefault}
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-3">
                {project.outcomes.map((outcome) => (
                  <li key={outcome.title} className="border-t-2 border-accent/50 pt-4">
                    <h3 className="text-sm font-semibold leading-relaxed">{tx(lang, outcome.title, outcome.titleEn)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{tx(lang, outcome.description, outcome.descriptionEn)}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section id={localizedId("contexto", lang)} aria-label={dict.casePage.contextSection} className="scroll-mt-20 space-y-3">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
              {dict.casePage.contextSection}
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
              {tx(lang, project.context, project.contextEn)}
            </p>
          </section>

          <section id={localizedId("solucao", lang)} aria-label={dict.casePage.solutionSection} className="scroll-mt-20 space-y-3">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
              {dict.casePage.solutionSection}
            </h2>
            {tx(lang, project.solution, project.solutionEn).split("\n\n").map((paragraph) => (
              <p key={paragraph} className="font-sans text-sm sm:text-base text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>

          {project.technicalChallenges.length > 0 && (
            <section id={localizedId("desafios", lang)} aria-label={dict.casePage.challengesSection} className="scroll-mt-20 space-y-3">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                {dict.casePage.challengesSection}
              </h2>
              <ul className="space-y-2 font-sans text-sm sm:text-base text-muted">
                {txList(lang, project.technicalChallenges, project.technicalChallengesEn).map((challenge) => (
                  <li key={challenge} className="flex items-start gap-2">
                    <span className="text-accent font-bold shrink-0" aria-hidden="true">›</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.architecture && (
            <div id={localizedId("arquitetura", lang)} className="scroll-mt-20">
              <ProjectArchitectureDiagram architecture={project.architecture} lang={lang} />
            </div>
          )}

          {!!project.technicalHighlights?.length && (
            <details className="rounded-lg border border-border bg-surface p-5">
              <summary className="cursor-pointer font-display text-base font-semibold text-foreground">
                {dict.casePage.otherHighlights}
              </summary>
              <ul className="mt-4 space-y-2 font-sans text-sm sm:text-base text-muted">
                {txList(lang, project.technicalHighlights ?? [], project.technicalHighlightsEn).map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="text-accent font-bold shrink-0" aria-hidden="true">›</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </details>
          )}

          {!!project.decisions?.length && (
            <section id={localizedId("decisoes", lang)} aria-label={dict.casePage.decisionsSection} className="scroll-mt-20 space-y-4">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                {dict.casePage.decisionsSection}
              </h2>
              <div className="space-y-4">
                {project.decisions.map((decision) => (
                  <div key={decision.title} className="rounded-lg border border-border bg-surface px-4 py-3 space-y-2">
                    <h3 className="font-sans text-sm font-semibold text-foreground">
                      {tx(lang, decision.title, decision.titleEn)}
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed">
                      <span className="font-medium text-accent">{dict.casePage.benefitPrefix}</span>
                      {tx(lang, decision.benefit, decision.benefitEn)}
                    </p>
                    <p className="font-sans text-sm text-muted leading-relaxed">
                      <span className="font-medium text-foreground">{dict.casePage.costPrefix}</span>
                      {tx(lang, decision.cost, decision.costEn)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.authNote && (
            <section id={localizedId("limites", lang)} aria-label={dict.casePage.authNoteTitle} className="scroll-mt-20 space-y-3">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                {dict.casePage.authNoteTitle}
              </h2>
              <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
                {tx(lang, project.authNote, project.authNoteEn)}
              </p>
            </section>
          )}

          {project.limitationNote && (
            <section id={project.authNote ? undefined : localizedId("limites", lang)} aria-label={dict.casePage.limitsTitle} className="scroll-mt-20 space-y-3 rounded-lg border border-border bg-surface p-5">
              <h2 className="font-display text-xl font-semibold tracking-tight">{dict.casePage.limitsTitle}</h2>
              <p className="text-sm leading-relaxed text-muted">{tx(lang, project.limitationNote, project.limitationNoteEn)}</p>
            </section>
          )}

          <section id={localizedId("stack", lang)} aria-labelledby="stack-title" className="scroll-mt-24 space-y-4">
            <h2 id="stack-title" className="font-display text-xl font-semibold tracking-tight">{dict.casePage.stackTitle}</h2>
            <ul className="flex flex-wrap gap-2" aria-label={dict.casePage.stackAria}>
              {project.technologies.map((tech) => (
                <li key={tech}><Badge variant="default">{tech}</Badge></li>
              ))}
            </ul>
          </section>

          {!!project.screenshots?.length && (
            <div id={localizedId("telas", lang)} className="scroll-mt-20">
              <ProjectGallery screenshots={galleryScreenshots} lang={lang} />
            </div>
          )}

          <section aria-label={dict.casePage.ctaTitle} className="space-y-4 rounded-xl border border-border bg-surface p-6">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
              {dict.casePage.ctaTitle}
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              {dict.casePage.ctaText}
            </p>
            <Button href={localizedHref("/#contato", lang)} variant="primary" size="md">{dict.casePage.ctaButton}</Button>
          </section>

          {(prevProject || nextProject) && (
            <nav aria-label={dict.casePage.navTitle} className="border-t border-border pt-8 mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevProject && prevProject.slug !== project.slug && (
                  <Link
                    href={localizedHref(`/projetos/${prevProject.slug}`, lang)}
                    className="group flex flex-col gap-1 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/60"
                  >
                    <span className="font-mono text-xs text-muted">← {dict.casePage.prevCase}</span>
                    <span className="font-display text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {tx(lang, prevProject.title, prevProject.titleEn)}
                    </span>
                  </Link>
                )}
                {nextProject && nextProject.slug !== project.slug && (
                  <Link
                    href={localizedHref(`/projetos/${nextProject.slug}`, lang)}
                    className="group flex flex-col gap-1 sm:text-right rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/60"
                  >
                    <span className="font-mono text-xs text-muted">{dict.casePage.nextCase} →</span>
                    <span className="font-display text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {tx(lang, nextProject.title, nextProject.titleEn)}
                    </span>
                  </Link>
                )}
              </div>
            </nav>
          )}
        </div>
      </div>
    </article>
  );
}
