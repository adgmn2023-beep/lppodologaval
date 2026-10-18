import { site } from "@/config/site";

export function BusinessJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
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
    logo: siteUrl ? new URL("/images/studio-val-logo.webp", siteUrl).toString() : undefined,
    image: siteUrl ? new URL("/images/og-studio-val.jpg", siteUrl).toString() : undefined,
    telephone: site.phone || undefined,
    paymentAccepted: site.paymentAccepted.join(", "),
    hasMap: `https://www.google.com/maps?q=${encodeURIComponent(`${site.name}, ${site.address.streetAddress}, ${site.address.neighborhood}, ${site.address.addressLocality}`)}&ll=${site.geo.lat},${site.geo.lng}&z=17`,
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
