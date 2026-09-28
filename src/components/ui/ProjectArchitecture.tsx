import React from "react";
import { ProjectArchitecture } from "@/types/project";

interface ProjectArchitectureDiagramProps {
  architecture?: ProjectArchitecture;
}

export function ProjectArchitectureDiagram({
  architecture,
}: ProjectArchitectureDiagramProps) {
  if (!architecture || architecture.layers.length === 0) {
    return null;
  }

  return (
    <section aria-label="Arquitetura técnica do projeto" className="space-y-6">
      <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
        Arquitetura técnica
      </h2>

      <ol className="space-y-0 max-w-xl">
        {architecture.layers.map((layer, idx) => (
          <li key={layer.label}>
            <div className="rounded-lg border border-border bg-surface px-4 py-3">
              <p className="font-sans text-sm font-semibold text-foreground">
                {layer.label}
              </p>
              {layer.description && (
                <p className="mt-0.5 font-sans text-sm text-muted">
                  {layer.description}
                </p>
              )}
            </div>
            {idx < architecture.layers.length - 1 && (
              <div
                className="flex justify-center py-1 text-muted"
                aria-hidden="true"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            )}
          </li>
        ))}
      </ol>

      {architecture.services && architecture.services.length > 0 && (
        <div className="max-w-xl space-y-3">
          <div
            className="flex justify-center text-muted"
            aria-hidden="true"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {architecture.services.map((service) => (
              <li
                key={service.name}
                className="rounded-lg border border-border bg-surface px-4 py-3 space-y-2"
              >
                <p className="font-sans text-sm font-semibold text-foreground">
                  {service.name}
                </p>
                {service.description && (
                  <p className="font-sans text-xs text-muted leading-relaxed">
                    {service.description}
                  </p>
                )}
                {service.dependency && (
                  <p className="font-sans text-xs text-muted border-t border-border pt-2">
                    <span className="font-mono uppercase tracking-wider">
                      ↓{" "}
                    </span>
                    {service.dependency}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {architecture.infrastructureServices &&
        architecture.infrastructureServices.length > 0 && (
          <div className="max-w-xl rounded-lg border border-border bg-surface-secondary/60 p-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-muted">
              {architecture.infrastructureTitle ?? "Infraestrutura"}
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {architecture.infrastructureServices.map((service) => (
                <li
                  key={service}
                  className="rounded-md border border-border bg-surface px-3 py-2 font-sans text-sm text-foreground"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        )}
    </section>
  );
}
