import { Button } from "@/components/ui/Button";
import { RESUME_DATA } from "@/data/resume";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

interface PrintResumeButtonProps {
  className?: string;
  lang?: Locale;
}

export function PrintResumeButton({ className, lang = "pt" }: PrintResumeButtonProps) {
  const dict = getDictionary(lang);
  return (
    <Button
      href={RESUME_DATA.document.href}
      target="_blank"
      rel="noopener noreferrer"
      variant="outline"
      size="sm"
      className={className}
      aria-label={dict.resumePage.docAria}
    >
      {dict.resumePage.docButton}
    </Button>
  );
}
