"use client";

import { Button } from "@/components/ui/Button";

export function PrintResumeButton() {
  return (
    <Button type="button" onClick={() => window.print()}>
      Imprimir / salvar em PDF
    </Button>
  );
}
