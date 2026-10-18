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
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: siteUrl,
    images: [{ url: "/images/og-studio-val.jpg", width: 1200, height: 630, alt: "Studio Val Podologia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [{ url: "/images/og-studio-val.jpg", width: 1200, height: 630, alt: "Studio Val Podologia" }],
  },
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0C",
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
