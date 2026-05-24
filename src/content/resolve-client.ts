import { getClientDefinition } from "./registry";
import type { ClientDefinition } from "./types";
import type { SocialLink } from "./types";

function pickImage(client: ClientDefinition, key: string): string {
  const src = client.images[key];
  if (!src) {
    throw new Error(
      `[client:${client.id}] Missing image key "${key}". Add it to src/content/clients/${client.id}.ts`,
    );
  }
  return src;
}

export function resolveClient(definition = getClientDefinition()) {
  const img = (key: string) => pickImage(definition, key);

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? definition.site.defaultSiteUrl;

  const studio = definition.site.studio === true;
  const personName = definition.site.name ?? definition.site.brand;

  const siteConfig = {
    ...definition.site,
    studio,
    name: personName,
    heroHeadline: studio ? definition.site.brand : personName,
    siteUrl,
    copyright: `© ${new Date().getFullYear()} ${definition.site.brand}. All rights reserved.`,
    footerTagline:
      definition.site.footerTagline ??
      "Wedding, travel, portrait, and event photography for those who value timeless imagery.",
    contactIntro:
      definition.site.contactIntro ??
      `Whether you're planning a wedding, commissioning a portrait session, or collaborating on an editorial project—${personName} would love to hear your vision.`,
    contactThankYou:
      definition.site.contactThankYou ??
      `${personName} will be in touch shortly.`,
    aboutTitle: definition.site.aboutTitle ?? "The Photographer",
    contactProjectTypes: definition.site.contactProjectTypes ?? [
      { value: "wedding", label: "Wedding Photography" },
      { value: "portrait", label: "Portrait Session" },
      { value: "travel", label: "Travel / Editorial" },
      { value: "event", label: "Event Coverage" },
      { value: "other", label: "Other" },
    ],
  };

  const socialLinks = (
    [
      definition.site.facebook && {
        label: "Facebook" as const,
        href: definition.site.facebook,
      },
      definition.site.instagram && {
        label: "Instagram" as const,
        href: definition.site.instagram,
      },
      definition.site.tiktok && {
        label: "TikTok" as const,
        href: definition.site.tiktok,
      },
      definition.site.youtube && {
        label: "YouTube" as const,
        href: definition.site.youtube,
      },
    ] as const
  ).filter(Boolean) as SocialLink[];

  const mapEmbedUrl =
    definition.site.mapEmbedUrl ??
    (definition.site.mapQuery
      ? `https://maps.google.com/maps?q=${encodeURIComponent(definition.site.mapQuery)}&z=15&output=embed`
      : undefined);

  const contactInfo = {
    phone: definition.site.phone,
    phoneDisplay:
      definition.site.phoneDisplay ?? definition.site.phone,
    address: definition.site.address,
    mapEmbedUrl,
    mapsLink: definition.site.mapQuery
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(definition.site.mapQuery)}`
      : undefined,
  };

  const workCategories = definition.workCategories.map((category) => ({
    ...category,
    image: img(category.imageKey),
  }));

  const projects = definition.projects.map((project) => ({
    id: project.id,
    title: project.title,
    story: project.story,
    heroImage: img(project.heroImageKey),
    images: project.imageKeys.map((key) => img(key)),
  }));

  const galleryImages = definition.galleryImages.map((item) => ({
    id: item.id,
    src: img(item.imageKey),
    alt: item.alt,
    size: item.size,
  }));

  const testimonials = definition.testimonials.map((item) => ({
    ...item,
    image: img(item.imageKey),
  }));

  const aboutContent = {
    portrait: definition.about.portraitPath,
    portraitAlt: studio
      ? `${siteConfig.brand} — photo and video production studio`
      : `${personName} — ${siteConfig.brand}`,
    story: definition.about.story,
    philosophy: definition.about.philosophy,
    experience: definition.about.experience,
  };

  const ogImage = `${siteUrl}${pickImage(definition, "hero")}`;

  const heroConfig = definition.sections?.hero ?? {};
  const heroContent = {
    variant: heroConfig.variant ?? ("cinematic" as const),
    image: img(heroConfig.imageKey ?? "hero"),
    eyebrow: heroConfig.eyebrow ?? siteConfig.brand,
    showScrollHint: heroConfig.showScrollHint ?? true,
    primaryCta: heroConfig.primaryCta ?? {
      label: "View Collections",
      href: "#work",
    },
    secondaryCta: heroConfig.secondaryCta ?? {
      label: "Get In Touch",
      href: "#contact",
    },
    imageAlt:
      heroConfig.imageAlt ??
      `Cinematic photography hero — ${siteConfig.brand}`,
  };

  return {
    clientId: definition.id,
    siteConfig,
    socialLinks,
    contactInfo,
    workCategories,
    projects,
    galleryImages,
    testimonials,
    awards: definition.awards,
    aboutContent,
    ogImage,
    heroContent,
    images: definition.images,
    img,
  };
}

export type ResolvedClientData = ReturnType<typeof resolveClient>;
