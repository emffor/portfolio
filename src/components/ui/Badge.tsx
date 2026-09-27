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
      "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700",
    outline:
      "bg-transparent text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700",
    subtle:
      "bg-zinc-50 text-zinc-600 dark:bg-zinc-900/60 dark:text-zinc-400 border-zinc-200/60 dark:border-zinc-800",
    accent:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60",
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
