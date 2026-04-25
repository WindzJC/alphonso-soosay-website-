import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import type { ReactNode } from "react";

import { PageShell } from "@/components/layout/page-shell";
import { seo, siteConfig } from "@/content/site";

import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Premium Author Website`,
  description: seo.siteDescription,
  applicationName: `${siteConfig.name} Author Site`,
  keywords: [
    "Alphonso Soosay",
    "author website",
    "audio awareness",
    "audio recording",
    "live sound",
    "room acoustics",
  ],
  openGraph: {
    title: `${siteConfig.name} | Premium Author Website`,
    description: seo.siteDescription,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        alt: `${siteConfig.name} website open graph placeholder`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Author Website`,
    description: seo.siteDescription,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
