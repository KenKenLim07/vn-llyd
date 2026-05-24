import { resolveClient } from "@/content/resolve-client";

const client = resolveClient();

export const siteConfig = client.siteConfig;
export const socialLinks = client.socialLinks;
export const contactInfo = client.contactInfo;
export const workCategories = client.workCategories;
export const projects = client.projects;
export const galleryImages = client.galleryImages;
export const testimonials = client.testimonials;
export const awards = client.awards;
export const aboutContent = client.aboutContent;
export const ogImage = client.ogImage;
export const heroContent = client.heroContent;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
