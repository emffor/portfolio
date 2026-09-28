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
  nestjs: (
    <path d="M12 4 6 7.5v5L12 16l6-3.5v-5L12 4Zm0 6 6-3.5M12 10 6 6.5M12 10v6" />
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
  api: (
    <>
      <path d="M8 8H5v8h3" />
      <path d="M16 8h3v8h-3" />
      <path d="M10 12h4" />
    </>
  ),
  architecture: (
    <>
      <rect x="3.5" y="4" width="6" height="5" rx="1" />
      <rect x="14.5" y="4" width="6" height="5" rx="1" />
      <rect x="9" y="15" width="6" height="5" rx="1" />
      <path d="M6.5 9v2.5h11V9M12 11.5V15" />
    </>
  ),
  code: (
    <>
      <path d="M8 9 5 12l3 3M16 9l3 3-3 3" />
      <path d="m13 8-2 8" />
    </>
  ),
  agile: (
    <>
      <rect x="4" y="5" width="4.5" height="14" rx="1" />
      <rect x="9.75" y="5" width="4.5" height="9" rx="1" />
      <rect x="15.5" y="5" width="4.5" height="6" rx="1" />
    </>
  ),
  critical: (
    <>
      <circle cx="11" cy="11" r="5.5" />
      <path d="m15.2 15.2 3.3 3.3" />
    </>
  ),
  problem: (
    <>
      <path d="M9 9a3 3 0 1 1 4.2 2.7c-.8.5-1.2 1-1.2 2" />
      <path d="M12 17.5h.01" />
    </>
  ),
  communication: (
    <path d="M6 7.5h12v8H9l-3 2.5V7.5Z" />
  ),
  collaboration: (
    <>
      <circle cx="9" cy="9" r="2.2" />
      <circle cx="16" cy="10" r="1.8" />
      <path d="M5 17.5c.4-2 2-3.2 4-3.2s3.6 1.2 4 3.2M14 14.4c.8-.4 1.7-.6 2.6-.5 1.6.1 2.7 1.1 3 2.6" />
    </>
  ),
  leadership: (
    <path d="M12 4 8.5 9.5 4 8l2.2 10h11.6L20 8l-4.5 1.5L12 4Z" />
  ),
  adaptability: (
    <>
      <path d="M7 8H5.2A2.2 2.2 0 0 0 5.2 12.4H8" />
      <path d="M17 16h1.8A2.2 2.2 0 0 0 18.8 11.6H16" />
      <path d="m9.2 6.2 1.6-1.6 1.6 1.6M10.8 4.6v6.2M14.8 17.8l-1.6 1.6-1.6-1.6M13.2 19.4v-6.2" />
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
