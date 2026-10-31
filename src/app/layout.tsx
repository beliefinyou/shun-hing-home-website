import type { Metadata, Viewport } from "next";

import "@/app/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name}｜住宅室內設計及裝修`,
    template: `%s｜${siteConfig.name}`,
  },
  description: siteConfig.seoDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: `${siteConfig.name}｜住宅室內設計及裝修`,
    description: siteConfig.seoDescription,
    url: "/",
    siteName: siteConfig.name,
    locale: "zh_HK",
    type: "website",
    images: [
      {
        url: siteConfig.heroImage.src,
        width: 2000,
        height: 1500,
        alt: siteConfig.heroImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}｜住宅室內設計及裝修`,
    description: siteConfig.seoDescription,
    images: [siteConfig.heroImage.src],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F2EA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-HK">
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[120] -translate-y-24 bg-ink px-4 py-2 text-sm text-paper transition-transform focus:translate-y-0"
        >
          跳至主要內容
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
