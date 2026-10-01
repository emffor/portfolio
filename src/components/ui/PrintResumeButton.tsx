import { Button } from "@/components/ui/Button";
import { RESUME_DATA } from "@/data/resume";

interface PrintResumeButtonProps {
  className?: string;
}

export function PrintResumeButton({ className }: PrintResumeButtonProps) {
  return (
    <Button
      href={RESUME_DATA.document.href}
      target="_blank"
      rel="noopener noreferrer"
      variant="outline"
      size="sm"
      className={className}
      aria-label="Baixar ou imprimir PDF do currículo (abre em nova aba)"
    >
      Baixar / Imprimir PDF
    </Button>
  );
}
