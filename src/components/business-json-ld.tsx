import type { GbpSummary } from "@/lib/gbp";
import { site } from "@/config/site";

type BusinessJsonLdProps = {
  summary: GbpSummary;
  includeAggregateRating: boolean;
};

export function BusinessJsonLd({ summary, includeAggregateRating }: BusinessJsonLdProps) {
  const streetAddress = site.address.streetAddress;
  const sameAs = [
    ...site.sameAs,
    ...(site.google.businessProfileUrl ? [site.google.businessProfileUrl] : []),
  ];
  const business = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: site.name,
    description: site.description,
    url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
    telephone: site.phone || undefined,
    address: streetAddress
      ? {
          "@type": "PostalAddress",
          streetAddress,
          addressLocality: site.address.addressLocality,
          addressRegion: site.address.addressRegion,
          postalCode: site.address.postalCode || undefined,
          addressCountry: site.address.country,
        }
      : undefined,
    openingHoursSpecification: site.openingHours.length
      ? site.openingHours.map((hour) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: hour.dayOfWeek,
          opens: hour.opens,
          closes: hour.closes,
        }))
      : undefined,
    geo:
      site.address.latitude !== null && site.address.longitude !== null
        ? {
            "@type": "GeoCoordinates",
            latitude: site.address.latitude,
            longitude: site.address.longitude,
          }
        : undefined,
    areaServed: `${site.address.neighborhood}, ${site.address.addressLocality}`,
    sameAs: sameAs.length ? sameAs : undefined,
    aggregateRating:
      includeAggregateRating && summary.totalReviews > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: summary.averageRating,
            reviewCount: summary.totalReviews,
          }
        : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(business).replace(/</g, "\\u003c"),
      }}
    />
  );
}
