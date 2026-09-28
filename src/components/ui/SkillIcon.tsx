import React from "react";
import { SkillIconName } from "@/types/profile";

interface SkillIconProps {
  name: SkillIconName;
}

const paths: Record<SkillIconName, React.ReactNode> = {
  php: (
    <path d="M8 8h3.2a2.2 2.2 0 0 1 0 4.4H8V8Zm0 4.4h3.6a2.2 2.2 0 0 1 0 4.4H8v-4.4ZM16 16.8V8h2.2" />
  ),
  laravel: <path d="M12 20s-6-3.4-6-8.2C6 8.2 8.2 6 12 6s6 2.2 6 5.8C18 16.6 12 20 12 20Z" />,
  javascript: (
    <path d="M8 8.5 5.5 12 8 15.5M16 8.5 18.5 12 16 15.5M13 7l-2 10" />
  ),
  typescript: (
    <>
      <path d="M5 7h8M9 7v10" />
      <path d="M15 11h4.5M17.2 11v6" />
    </>
  ),
  nodejs: (
    <path d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Zm0 0v17" />
  ),
  react: (
    <>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(120 12 12)" />
    </>
  ),
  nextjs: <path d="M7 16V8l10 10V8" />,
  mobile: (
    <>
      <rect x="7" y="3.5" width="10" height="17" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6.5" rx="6.5" ry="2.5" />
      <path d="M5.5 6.5v11c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-11" />
      <path d="M5.5 12c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5" />
    </>
  ),
  aws: <path d="M7 16a4 4 0 0 1-.4-7.5 5 5 0 0 1 9.6-1.2A3.5 3.5 0 0 1 17 16H7Z" />,
  docker: (
    <>
      <path d="M4 14h13.5a3 3 0 0 0 0-6h-.8A4.5 4.5 0 0 0 8 9.2" />
      <path d="M8 10h2.2V7.8H8V10Zm2.8 0H13V7.8h-2.2V10Zm2.8 0h2.2V7.8H13.6V10ZM8 7.2h2.2V5H8v2.2Zm2.8 0H13V5h-2.2v2.2Z" />
    </>
  ),
  cicd: (
    <>
      <path d="M7 8H5.5A2.5 2.5 0 0 0 5.5 13H8" />
      <path d="M17 16h1.5a2.5 2.5 0 0 0 0-5H16" />
      <path d="m9 6 2-2 2 2M11 4v8M15 18l-2 2-2-2M13 20v-8" />
    </>
  ),
  ai: (
    <>
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  tests: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m9 12.2 2.2 2.2L15.5 10" />
    </>
  ),
  code: (
    <>
      <path d="M8 9 5 12l3 3M16 9l3 3-3 3" />
      <path d="m13 8-2 8" />
    </>
  ),
  english: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c2.2 2.3 3.3 5 3.3 8s-1.1 5.7-3.3 8c-2.2-2.3-3.3-5-3.3-8s1.1-5.7 3.3-8Z" />
    </>
  ),
};

export function SkillIcon({ name }: SkillIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
