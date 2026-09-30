import { SkillArea } from "@/types/profile";

export interface Resume {
  title: string;
  location: string;
  summary: string;
  phone: {
    label: string;
    href: string;
  };
  document: {
    href: string;
    fileName: string;
  };
  skillAreas: readonly Pick<SkillArea, "title" | "items">[];
}
