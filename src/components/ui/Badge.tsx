import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "subtle" | "accent";
}

export function Badge({
  children,
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-slate-100 text-slate-700 dark:bg-white/[0.06] dark:text-slate-300 border-slate-200 dark:border-white/10",
    outline:
      "bg-transparent text-slate-600 dark:text-slate-300 border-slate-300 dark:border-white/15",
    subtle:
      "bg-slate-50 text-slate-600 dark:bg-white/[0.04] dark:text-slate-400 border-slate-200/70 dark:border-white/[0.07]",
    accent:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 border-emerald-200 dark:border-emerald-400/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded border transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
