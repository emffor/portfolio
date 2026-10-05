import type { ReactNode } from "react";
import { JetBrains_Mono, Manrope, Sora } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HOME_ASSEMBLY_SCRIPT } from "@/lib/home-assembly";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

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

export function RootShell({
  children,
  lang,
}: {
  children: ReactNode;
  lang: Locale;
}) {
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang === "pt" ? "pt-BR" : "en"}
      className={`${manrope.variable} ${sora.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200"
        suppressHydrationWarning
      >
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
          id="theme-init"
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 font-sans bg-accent text-[var(--on-accent)] text-sm font-medium rounded-md shadow-md"
        >
          {dict.skipLink}
        </a>
        <Header lang={lang} />
        <main id="main-content" tabIndex={-1} className="flex-1 scroll-mt-20">
          {children}
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
