import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    isExternal?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "min-h-11 text-xs px-3 py-2 gap-1.5",
    md: "min-h-11 text-sm px-4 py-2 gap-2",
    lg: "min-h-12 text-base px-5 py-2.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-accent text-[var(--on-accent)] hover:bg-accent-hover shadow-sm",
    secondary:
      "bg-surface-secondary text-foreground hover:bg-border/60",
    outline:
      "border border-border bg-transparent text-foreground hover:border-accent/60 hover:text-accent",
    ghost:
      "bg-transparent text-muted hover:bg-surface-secondary hover:text-foreground",
    glow:
      "bg-accent text-[var(--on-accent)] hover:bg-accent-hover border-0 shadow-[0_6px_18px_-10px_var(--accent)]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, isExternal, ...anchorProps } = props as ButtonAsLink;
    const isExternalLink = isExternal || href.startsWith("http");

    if (isExternalLink) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    if (
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      anchorProps.download !== undefined ||
      anchorProps.target === "_blank"
    ) {
      return (
        <a href={href} className={combinedClasses} {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
