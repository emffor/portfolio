import React from "react";

interface SkillRatingProps {
  rating: number;
}

const STAR_PATH =
  "M12 2.6l2.83 5.9 6.47.83-4.75 4.5 1.2 6.37L12 17.07l-5.75 3.13 1.2-6.37-4.75-4.5 6.47-.83L12 2.6Z";

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      aria-hidden="true"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
    >
      <path d={STAR_PATH} />
    </svg>
  );
}

function HalfStar() {
  return (
    <span className="relative inline-flex h-3.5 w-3.5" aria-hidden="true">
      <span className="absolute inset-0 text-muted">
        <Star filled={false} />
      </span>
      <span className="absolute inset-0 w-1/2 overflow-hidden text-accent">
        <Star filled />
      </span>
    </span>
  );
}

export function SkillRating({ rating }: SkillRatingProps) {
  return (
    <span
      role="img"
      aria-label={`Nota ${rating.toFixed(1)} de 5`}
      className="mt-3 inline-flex items-center gap-1"
    >
      {Array.from({ length: 5 }, (_, index) => {
        const position = index + 1;
        if (rating >= position) {
          return (
            <span key={position} className="text-accent">
              <Star filled />
            </span>
          );
        }
        if (rating >= position - 0.5) {
          return <HalfStar key={position} />;
        }
        return (
          <span key={position} className="text-muted">
            <Star filled={false} />
          </span>
        );
      })}
      <span className="ml-1.5 font-sans text-xs text-muted">
        {rating.toFixed(1)}
      </span>
    </span>
  );
}
