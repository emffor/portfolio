import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSummary() {
  const highlights = [
    {
      title: "Desenvolvimento Ponta a Ponta",
      description:
        "Atuação completa desde a concepção de requisitos e modelagem relacional até a entrega contínua em produção com monitoramento e estabilidade.",
    },
    {
      title: "Arquitetura e Previsibilidade",
      description:
        "Adoção de padrões de projeto consolidados, princípios SOLID e arquiteturas limpas/hexagonais para garantir código sustentável a longo prazo.",
    },
    {
      title: "Ecossistemas de Alta Demanda",
      description:
        "Experiência com backends robustos em Node.js/NestJS e PHP/Laravel, integrados a interfaces modernas e reativas em React/Next.js e React Native.",
    },
    {
      title: "Bancos de Dados & Dados Críticos",
      description:
        "Modelagem estruturada, integridade referencial, consultas otimizadas e governança em PostgreSQL, MySQL e SQL Server.",
    },
  ];

  return (
    <section
      id="sobre"
      aria-label="Sobre e forma de trabalhar"
      className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <SectionHeading
        tag="Sobre"
        title="Perfil técnico e forma de trabalhar"
        description={PROFILE_DATA.summary}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 p-6 space-y-2 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-4.5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
