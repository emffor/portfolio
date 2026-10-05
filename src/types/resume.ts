import { SkillArea } from "@/types/profile";

export interface Resume {
  title: string;
  titleEn?: string;
  location: string;
  summary: string;
  summaryEn?: string;
  phone: {
    label: string;
    href: string;
  };
  document: {
    href: string;
    fileName: string;
  };
  skillAreas: readonly (Pick<SkillArea, "title" | "items"> & {
    titleEn?: string;
    itemsEn?: readonly string[];
  })[];
}
