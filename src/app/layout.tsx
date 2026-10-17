import type { Metadata, Viewport } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import { AnalyticsScripts } from "@/components/analytics";
import { site } from "@/config/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const sans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700"], style: "normal", variable: "--font-sans", display: "swap", preload: true });
const display = Lora({ subsets: ["latin"], weight: ["400", "600"], style: "normal", variable: "--font-display", display: "swap", preload: true });

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: site.title,
  description: site.description,
  applicationName: site.name,
  icons: { icon: "/images/logo-mark.svg" },
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: siteUrl,
    images: siteUrl
      ? [{ url: site.images.hero.src, width: site.images.hero.width, height: site.images.hero.height, alt: site.images.hero.alt }]
      : undefined,
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
    images: siteUrl ? [site.images.hero.src] : undefined,
  },
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6f1",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${sans.variable} ${display.variable}`}>
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
