import type { Metadata, Viewport } from "next";
import { AnalyticsScripts } from "@/components/analytics";
import { site } from "@/config/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

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
      ? [{ url: "/images/hero-care.svg", width: 700, height: 740, alt: "Ilustração de cuidado podológico" }]
      : undefined,
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
    images: siteUrl ? ["/images/hero-care.svg"] : undefined,
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
      <body>
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
