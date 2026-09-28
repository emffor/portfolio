import React from "react";
import { IconType } from "react-icons";
import {
  SiDocker,
  SiGithubactions,
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import {
  TbBrain,
  TbBrandAws,
  TbBrandReactNative,
  TbDatabase,
  TbLanguage,
  TbTestPipe,
} from "react-icons/tb";
import { SkillIconName } from "@/types/profile";

interface SkillIconProps {
  name: SkillIconName;
  className?: string;
}

const icons: Record<SkillIconName, IconType> = {
  php: SiPhp,
  laravel: SiLaravel,
  javascript: SiJavascript,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  python: SiPython,
  react: SiReact,
  nextjs: SiNextdotjs,
  mobile: TbBrandReactNative,
  database: TbDatabase,
  aws: TbBrandAws,
  docker: SiDocker,
  cicd: SiGithubactions,
  tests: TbTestPipe,
  ai: TbBrain,
  english: TbLanguage,
};

export function SkillIcon({ name, className }: SkillIconProps) {
  const Icon = icons[name];
  return (
    <Icon className={className ?? "h-[18px] w-[18px]"} aria-hidden="true" />
  );
}
