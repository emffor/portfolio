import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      {tag && (
        <p className="text-xs font-mono font-medium uppercase tracking-[0.12em] text-muted">
          {tag}
        </p>
      )}
      <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      <div
        aria-hidden="true"
        className={cn(
          "mt-4 h-1 w-14 rounded-full bg-accent",
          align === "center" && "mx-auto"
        )}
      />
      {description && (
        <p className="mt-4 font-sans text-sm sm:text-base text-muted max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
