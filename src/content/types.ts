export type AspectRatio = "tall" | "wide";

export type GallerySize = "small" | "medium" | "large";

export type ContactProjectOption = {
  value: string;
  label: string;
};

export type SocialPlatform = "Facebook" | "Instagram" | "TikTok" | "YouTube";

export type SocialLink = {
  label: SocialPlatform;
  href: string;
};

export type ClientSiteConfig = {
  brand: string;
  brandShort: string;
  /** Person name for solo photographers. Omit when `studio` is true. */
  name?: string;
  tagline: string;
  /** Studio / team brand — hero and metadata lead with `brand`, not a person name */
  studio?: boolean;
  footerTagline?: string;
  contactIntro?: string;
  contactThankYou?: string;
  aboutTitle?: string;
  contactProjectTypes?: ContactProjectOption[];
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  phone?: string;
  phoneDisplay?: string;
  address?: string;
  /** Google Maps embed URL. Built from `mapQuery` when omitted. */
  mapEmbedUrl?: string;
  mapQuery?: string;
  /** Fallback when NEXT_PUBLIC_SITE_URL is unset */
  defaultSiteUrl: string;
};

export type WorkCategory = {
  id: string;
  title: string;
  description: string;
  imageKey: string;
  aspect: AspectRatio;
};

export type Project = {
  id: string;
  title: string;
  story: string;
  heroImageKey: string;
  imageKeys: [string, string, string, string];
};

export type GalleryImage = {
  id: string;
  imageKey: string;
  alt: string;
  size: GallerySize;
};

export type Testimonial = {
  id: string;
  name: string;
  projectType: string;
  quote: string;
  imageKey: string;
};

export type Award = {
  year: string;
  title: string;
  category: string;
};

export type AboutContent = {
  portraitPath: string;
  story: string;
  philosophy: string;
  experience: string;
};

export type HeroVariant = "cinematic" | "aerial";

export type HeroSectionConfig = {
  variant?: HeroVariant;
  imageKey?: string;
  /** Replaces brand line when set (e.g. "Photography · Drone · Production") */
  eyebrow?: string;
  showScrollHint?: boolean;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageAlt?: string;
};

export type ClientSections = {
  hero?: HeroSectionConfig;
};

export type ClientImages = Record<string, string>;

export type ClientDefinition = {
  id: string;
  site: ClientSiteConfig;
  images: ClientImages;
  about: AboutContent;
  sections?: ClientSections;
  workCategories: WorkCategory[];
  projects: Project[];
  galleryImages: GalleryImage[];
  testimonials: Testimonial[];
  awards: Award[];
};
