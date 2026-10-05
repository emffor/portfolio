import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope, Sora } from "next/font/google";
import { SITE_NAME, SITE_URL, AUTHOR_NAME } from "@/lib/constants";
import { HOME_ASSEMBLY_SCRIPT } from "@/lib/home-assembly";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const SITE_DESCRIPTION_EN =
  "Eloan Ferreira, Full Stack Developer. Laravel, Node.js, and TypeScript applied to products, APIs, and production systems modernization. Browse the case studies.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9f8" },
    { media: "(prefers-color-scheme: dark)", color: "#090d0e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: SITE_DESCRIPTION_EN,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  alternates: {
    canonical: "/en",
    languages: {
      pt: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/en`,
    title: SITE_NAME,
    description: SITE_DESCRIPTION_EN,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION_EN,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          id="hide-netlify-hud"
          dangerouslySetInnerHTML={{
            __html: `try { localStorage.setItem('nl-hud:public:v1', 'hidden'); } catch (error) {}`,
          }}
        />
        <script
          id="home-assembly"
          dangerouslySetInnerHTML={{ __html: HOME_ASSEMBLY_SCRIPT }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = null;
                  try { saved = localStorage.getItem('theme'); } catch (e) {}
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 font-sans bg-accent text-[var(--on-accent)] text-sm font-medium rounded-md shadow-md"
        >
          Skip to main content
        </a>
        <Header lang="en" />
        <main id="main-content" tabIndex={-1} className="flex-1 scroll-mt-20">
          {children}
        </main>
        <Footer lang="en" />
      </body>
    </html>
  );
}
