import { contactInfo, ogImage, siteConfig, socialLinks } from "@/lib/data";

export function JsonLd() {
  const sameAs = socialLinks.map((link) => link.href);

  const structuredData = siteConfig.studio
    ? {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: siteConfig.brand,
        description: siteConfig.tagline,
        url: siteConfig.siteUrl,
        image: ogImage,
        telephone: contactInfo.phone,
        address: contactInfo.address
          ? {
              "@type": "PostalAddress",
              streetAddress: "Real Street, Poblacion",
              addressLocality: "Ajuy",
              addressRegion: "Iloilo",
              postalCode: "5012",
              addressCountry: "PH",
            }
          : undefined,
        sameAs,
        areaServed: "Philippines",
        serviceType: siteConfig.contactProjectTypes.map((item) => item.label),
      }
    : {
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
        sameAs,
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
