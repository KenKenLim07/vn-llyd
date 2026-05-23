import { ogImage, siteConfig } from "@/lib/data";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.brand,
    founder: {
      "@type": "Person",
      name: siteConfig.name,
    },
    description: siteConfig.tagline,
    url: siteConfig.siteUrl,
    image: ogImage,
    sameAs: [siteConfig.facebook, siteConfig.instagram],
    areaServed: "Worldwide",
    serviceType: [
      "Wedding Photography",
      "Portrait Photography",
      "Travel Photography",
      "Event Photography",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
