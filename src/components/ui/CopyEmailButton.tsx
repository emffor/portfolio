"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

export function CopyEmailButton({ email, lang = "pt" }: { email: string; lang?: Locale }) {
  const dict = getDictionary(lang);
  const [status, setStatus] = useState<"idle" | "copying" | "success" | "error">("idle");

  useEffect(() => {
    if (status !== "success") return;
    const timeout = window.setTimeout(() => setStatus("idle"), 4000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  async function copyEmail() {
    setStatus("copying");
    try {
      await navigator.clipboard.writeText(email);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mt-3">
      <Button variant="ghost" size="sm" onClick={copyEmail} disabled={status === "copying"}>
        {status === "copying" ? dict.copyEmail.copying : dict.copyEmail.copy}
      </Button>
      <p role="status" aria-atomic="true" className="min-h-5 text-xs leading-relaxed text-muted">
        {status === "success" && dict.copyEmail.success}
        {status === "error" && dict.copyEmail.error}
      </p>
    </div>
  );
}
