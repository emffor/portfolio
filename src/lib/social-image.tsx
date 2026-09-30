import { ImageResponse } from "next/og";
import { AUTHOR_NAME, AUTHOR_ROLE } from "@/lib/constants";

export const socialImageAlt = `${AUTHOR_NAME}, ${AUTHOR_ROLE}. Backend, arquitetura e sistemas em produção.`;

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

interface SocialImageContent {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function createSocialImage({
  title = AUTHOR_NAME,
  subtitle = AUTHOR_ROLE,
  description = "Backend · Arquitetura · Sistemas em produção",
}: SocialImageContent = {}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#090d0e",
          color: "#eef2f1",
        }}
      >
        <div
          style={{
            width: 10,
            height: "100%",
            backgroundColor: "#63a39c",
          }}
        />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: title.length > 30 ? 54 : 68,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 32,
              color: "#63a39c",
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 26,
              lineHeight: 1.5,
              color: "#96a3a1",
            }}
          >
            {description}
          </div>
        </div>
      </div>
    ),
    {
      ...socialImageSize,
    }
  );
}
