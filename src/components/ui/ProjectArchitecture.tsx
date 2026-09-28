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
      <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        Arquitetura técnica
      </h2>

      <ol className="space-y-0 max-w-xl">
        {architecture.layers.map((layer, idx) => (
          <li key={layer.label}>
            <div className="rounded-lg border border-slate-200/80 bg-white px-4 py-3 dark:border-white/[0.07] dark:bg-[#0e1730]">
              <p className="font-sans text-sm font-semibold text-slate-900 dark:text-slate-100">
                {layer.label}
              </p>
              {layer.description && (
                <p className="mt-0.5 font-sans text-sm text-slate-600 dark:text-slate-400">
                  {layer.description}
                </p>
              )}
            </div>
            {idx < architecture.layers.length - 1 && (
              <div
                className="flex justify-center py-1 text-slate-400 dark:text-slate-500"
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
            className="flex justify-center text-slate-400 dark:text-slate-500"
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
                className="rounded-lg border border-slate-200/80 bg-white px-4 py-3 space-y-2 dark:border-white/[0.07] dark:bg-[#0e1730]"
              >
                <p className="font-sans text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {service.name}
                </p>
                {service.description && (
                  <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                )}
                {service.dependency && (
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-white/[0.06] pt-2">
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
          <div className="max-w-xl rounded-lg border border-slate-200/80 bg-slate-50/60 p-4 dark:border-white/[0.07] dark:bg-[#0e1730]">
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {architecture.infrastructureTitle ?? "Infraestrutura"}
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {architecture.infrastructureServices.map((service) => (
                <li
                  key={service}
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 font-sans text-sm text-slate-700 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-slate-300"
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
