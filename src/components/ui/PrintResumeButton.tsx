import { Button } from "@/components/ui/Button";
import { RESUME_DATA } from "@/data/resume";

export function PrintResumeButton() {
  return (
    <Button
      href={RESUME_DATA.document.href}
      target="_blank"
      rel="noopener noreferrer"
      variant="outline"
      aria-label="Imprimir PDF do currículo (abre em nova aba)"
    >
      Imprimir PDF
    </Button>
  );
}
