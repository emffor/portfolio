import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref, localizedId, type Locale } from "@/i18n/locale";

const socialLinks = [
  {
    label: "E-mail",
    value: PROFILE_DATA.socials.email,
    href: PROFILE_DATA.socials.email
      ? `mailto:${PROFILE_DATA.socials.email}`
      : undefined,
    icon: (
      <svg
        className="w-[18px] h-[18px]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/emffor",
    href: PROFILE_DATA.socials.github.url,
    icon: (
      <svg
        className="w-[18px] h-[18px]"
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
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/eloanferreira",
    href: PROFILE_DATA.socials.linkedin.url,
    icon: (
      <svg
        className="w-[18px] h-[18px]"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
];

export function ContactCta({ lang = "pt" }: { lang?: Locale }) {
  const dict = getDictionary(lang);
  const availability =
    lang === "en"
      ? (PROFILE_DATA.availabilityLabelEn ?? PROFILE_DATA.availabilityLabel)
      : PROFILE_DATA.availabilityLabel;
  return (
    <section
      id={localizedId("contato", lang)}
      aria-label={lang === "en" ? "Contact information and communication channels" : "Informações de contato e canais de comunicação"}
      className="section-highlight scroll-mt-20 py-10 sm:py-16"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted">
            {dict.contact.tag}
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {dict.contact.title}
          </h2>
          <div
            aria-hidden="true"
            className="mt-4 h-1 w-14 rounded-full bg-accent"
          />
          <p className="mt-6 max-w-md font-sans text-sm sm:text-base text-muted leading-relaxed">
            {dict.contact.intro}
          </p>

          <ul className="mt-8 space-y-1">
            {socialLinks.map((link) =>
              link.href ? (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 -mx-3 font-sans text-sm text-muted transition-colors hover:bg-surface-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span className="text-muted transition-colors group-hover:text-accent">
                      {link.icon}
                    </span>
                    <span className="font-medium text-foreground">
                      {link.label}
                    </span>
                    <span className="truncate">{link.value}</span>
                  </a>
                </li>
              ) : null
            )}
          </ul>
        </div>

        <div className="flex items-start md:items-center">
          <div className="min-w-0 w-full rounded-xl border border-border bg-surface p-5 sm:p-8">
            {PROFILE_DATA.availableForWork && (
              <p className="flex items-center gap-2 font-sans text-xs font-medium text-muted">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
                {availability}
              </p>
            )}
            <p className="mt-4 font-display text-xl font-bold tracking-tight text-foreground">
              {dict.contact.cardTitle}
            </p>
            <p className="mt-2 font-sans text-sm text-muted leading-relaxed">
              {dict.contact.cardText}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {PROFILE_DATA.socials.email && (
                <Button
                  href={`mailto:${PROFILE_DATA.socials.email}`}
                  variant="glow"
                  size="lg"
                  className="w-full break-all"
                >
                  {PROFILE_DATA.socials.email}
                </Button>
              )}
              <Button
                href={localizedHref("/curriculo", lang)}
                variant="outline"
                size="lg"
                className="w-full"
              >
                {dict.contact.viewResume}
              </Button>
            </div>
            {PROFILE_DATA.socials.email && <CopyEmailButton email={PROFILE_DATA.socials.email} lang={lang} />}
          </div>
        </div>
      </div>
    </section>
  );
}
