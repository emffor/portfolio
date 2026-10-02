"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function CopyEmailButton({ email }: { email: string }) {
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
        {status === "copying" ? "Copiando…" : "Copiar e-mail"}
      </Button>
      <p role="status" aria-atomic="true" className="min-h-5 text-xs leading-relaxed text-muted">
        {status === "success" && "E-mail copiado!"}
        {status === "error" && "Não foi possível copiar. Selecione o e-mail acima e copie manualmente."}
      </p>
    </div>
  );
}
