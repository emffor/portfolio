import type { Project } from "@/types/project";

type ProjectDemoInstructionsProps = Pick<Project, "demoAccess" | "accessNote">;

export function ProjectDemoInstructions({
  demoAccess,
  accessNote,
}: ProjectDemoInstructionsProps) {
  if (!demoAccess && !accessNote) return null;

  return (
    <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-muted">
      {demoAccess && (
        <details className="rounded-lg border border-border bg-surface px-4 py-3">
          <summary className="cursor-pointer rounded py-1 font-medium text-foreground focus-visible:ring-2 focus-visible:ring-accent">
            Como acessar a demonstração
          </summary>
          <dl className="mt-3 space-y-2">
            <div className="flex flex-wrap gap-x-2">
              <dt>E-mail</dt>
              <dd className="break-all text-foreground">{demoAccess.email}</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt>Senha</dt>
              <dd className="text-foreground">{demoAccess.password}</dd>
            </div>
          </dl>
        </details>
      )}
      {accessNote && <p>{accessNote}</p>}
    </div>
  );
}
