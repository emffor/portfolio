import type { Project } from "@/types/project";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

type ProjectDemoInstructionsProps = Pick<Project, "demoAccess" | "accessNote"> & {
  lang?: Locale;
};

export function ProjectDemoInstructions({
  demoAccess,
  accessNote,
  lang = "pt",
}: ProjectDemoInstructionsProps) {
  const dict = getDictionary(lang);
  if (!demoAccess && !accessNote) return null;

  return (
    <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-muted">
      {demoAccess && (
        <details className="rounded-lg border border-border bg-surface px-4 py-3">
          <summary className="cursor-pointer rounded py-1 font-medium text-foreground focus-visible:ring-2 focus-visible:ring-accent">
            {dict.demo.howTo}
          </summary>
          <dl className="mt-3 space-y-2">
            <div className="flex flex-wrap gap-x-2">
              <dt>{dict.demo.email}</dt>
              <dd className="break-all text-foreground">{demoAccess.email}</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt>{dict.demo.password}</dt>
              <dd className="text-foreground">{demoAccess.password}</dd>
            </div>
          </dl>
        </details>
      )}
      {accessNote && <p>{accessNote}</p>}
    </div>
  );
}
