import { AUTHOR_NAME } from "@/lib/constants";
import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt = `${AUTHOR_NAME}, Full Stack Developer. Backend, architecture, and production systems.`;
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    description: "Backend · Architecture · Production systems",
  });
}
