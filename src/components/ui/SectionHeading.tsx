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
        "space-y-2 mb-10 md:mb-12",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      {tag && (
        <span className="text-xs font-mono tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
          {`// ${tag}`}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
