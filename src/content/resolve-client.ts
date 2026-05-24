import { getClientDefinition } from "./registry";
import type { ClientDefinition } from "./types";

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

  const siteConfig = {
    ...definition.site,
    siteUrl,
    copyright: `© ${new Date().getFullYear()} ${definition.site.brand}. All rights reserved.`,
  };

  const socialLinks = [
    definition.site.facebook && {
      label: "Facebook" as const,
      href: definition.site.facebook,
    },
    definition.site.instagram && {
      label: "Instagram" as const,
      href: definition.site.instagram,
    },
  ].filter(Boolean) as { label: "Facebook" | "Instagram"; href: string }[];

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
    portraitAlt: `${siteConfig.name} — ${siteConfig.brand}`,
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
