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
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        Arquitetura técnica
      </h2>

      <ol className="space-y-0 max-w-xl">
        {architecture.layers.map((layer, idx) => (
          <li key={layer.label}>
            <div className="rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 px-4 py-3">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {layer.label}
              </p>
              {layer.description && (
                <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                  {layer.description}
                </p>
              )}
            </div>
            {idx < architecture.layers.length - 1 && (
              <div
                className="flex justify-center py-1 text-zinc-400 dark:text-zinc-500"
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
            className="flex justify-center text-zinc-400 dark:text-zinc-500"
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
                className="rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 px-4 py-3 space-y-2"
              >
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {service.name}
                </p>
                {service.description && (
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                )}
                {service.dependency && (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800 pt-2">
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
          <div className="max-w-xl rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/30 p-4">
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {architecture.infrastructureTitle ?? "Infraestrutura"}
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {architecture.infrastructureServices.map((service) => (
                <li
                  key={service}
                  className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300"
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
