import type { NextConfig } from "next";

function getStorageRemotePattern() {
  const storageUrlEnv = process.env.NEXT_PUBLIC_STORAGE_URL;
  if (!storageUrlEnv) return [];

  try {
    const parsed = new URL(storageUrlEnv);
    const bucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET;
    const protocol = parsed.protocol.replace(":", "") as "http" | "https";

    return [
      {
        protocol: protocol || "https",
        hostname: parsed.hostname,
        port: parsed.port || undefined,
        pathname: bucket ? `/${bucket.replace(/^\/+|\/+$/g, "")}/**` : "/**",
      },
    ];
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: getStorageRemotePattern(),
  },
};

export default nextConfig;
