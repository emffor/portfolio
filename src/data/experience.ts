import { Experience } from "@/types/experience";

// Estrutura pronta para preenchimento com experiências reais.
// Nenhuma informação foi inventada: enquanto não houver dados
// confirmados, a lista permanece vazia e a UI exibe um estado discreto
// com direcionamento para o LinkedIn, sem criar empregos fictícios.
export const EXPERIENCES: readonly Experience[] = [] as const;

export async function getExperiences(): Promise<Experience[]> {
  return [...EXPERIENCES];
}
