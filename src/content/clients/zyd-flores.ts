import type { ClientDefinition } from "../types";

const photos = (file: string) => `/clients/zyd-flores/photos/${file}`;

/** Republic Works Production — Zyd Flores */
export const client: ClientDefinition = {
  id: "zyd-flores",
  site: {
    brand: "Republic Works Production",
    brandShort: "Republic Works",
    name: "Zyd Flores",
    tagline:
      "Aerial vision and cinematic production — from sky to story.",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    defaultSiteUrl: "https://republic-works-production.vercel.app",
  },
  sections: {
    hero: {
      variant: "aerial",
      imageKey: "hero",
      eyebrow: "Photography · Drone · Production",
      showScrollHint: true,
      primaryCta: { label: "View Aerial Work", href: "#work" },
      secondaryCta: { label: "Book Production", href: "#contact" },
      imageAlt:
        "Aerial drone photography — sweeping landscape view from above by Republic Works Production",
    },
  },
  images: {
    hero: photos("hero-drone.jpg"),
    mountains: photos("hero-drone.jpg"),
    portraitA: photos("commercial-portrait.jpg"),
    portraitBack: photos("commercial-portrait.jpg"),
    portraitB: "/portfolio/portrait-b.jpg",
    weddingA: photos("event-coverage.jpg"),
    weddingB: photos("event-production.jpg"),
    weddingC: photos("aerial-coast.jpg"),
    eventCrowd: photos("event-coverage.jpg"),
    eventParty: photos("event-production.jpg"),
    eventStadium: photos("event-production.jpg"),
    eventRunway: photos("aerial-city.jpg"),
    cityStreet: photos("aerial-city.jpg"),
    cityNight: photos("aerial-city.jpg"),
    japanTemple: photos("aerial-coast.jpg"),
    japanStreet: photos("aerial-desert.jpg"),
    beach: photos("aerial-coast.jpg"),
    oceanCliffs: photos("aerial-coast.jpg"),
    mistyForest: photos("hero-drone.jpg"),
    desertRoad: photos("aerial-desert.jpg"),
    aerialForest: photos("hero-drone.jpg"),
    oceanSunset: photos("aerial-coast.jpg"),
    fashionPortrait: photos("commercial-portrait.jpg"),
    concert: photos("event-production.jpg"),
    womanPortraitA: photos("commercial-portrait.jpg"),
    womanTestimonial: "/portfolio/testimonial-woman.jpg",
    womanProfessional: "/portfolio/testimonial-professional.jpg",
    manTestimonial: "/portfolio/testimonial-man.jpg",
  },
  about: {
    portraitPath: "/clients/zyd-flores/profile.jpg",
    story: `I'm Zyd Flores, founder of Republic Works Production — a visual studio built for stories that need altitude. From sweeping drone cinematography to ground-level production work, I capture events, landscapes, and brands with a cinematic eye and a pilot's precision.`,
    philosophy: `Great aerial work isn't about height — it's about perspective. I combine smooth, intentional flight paths with editorial framing so every shot feels purposeful, not decorative. Whether it's a festival crowd from above or a coastline at golden hour, the image should pull you in.`,
    experience: `Republic Works Production serves events, commercial clients, and creative collaborators across the Philippines. Certified drone operations, full production coverage, and deliverables ready for web, social, and broadcast.`,
  },
  workCategories: [
    {
      id: "aerial",
      title: "Aerial & Drone",
      description:
        "Sweeping perspectives from above — landscapes, venues, and events captured with cinematic drone work.",
      imageKey: "aerialForest",
      aspect: "wide",
    },
    {
      id: "events",
      title: "Events & Production",
      description:
        "Festivals, corporate gatherings, and live productions documented from ground and sky.",
      imageKey: "eventParty",
      aspect: "wide",
    },
    {
      id: "commercial",
      title: "Commercial",
      description:
        "Brand stories, promotional content, and visual campaigns built for impact.",
      imageKey: "portraitA",
      aspect: "tall",
    },
    {
      id: "landscapes",
      title: "Landscapes",
      description:
        "Coastlines, cityscapes, and open terrain — the world seen from a higher vantage.",
      imageKey: "oceanCliffs",
      aspect: "wide",
    },
  ],
  projects: [
    {
      id: "skyline",
      title: "Skyline from Above",
      story:
        "Urban geometry and golden light from a drone's eye view. This series explores how cities breathe when seen from altitude — grids, rivers, and rooftops woven into one frame.",
      heroImageKey: "aerialForest",
      imageKeys: ["cityStreet", "desertRoad", "oceanCliffs", "mistyForest"],
    },
    {
      id: "coast",
      title: "Coastal Aerials",
      story:
        "Where land meets water, perspective changes everything. Slow passes along cliffs and shorelines reveal textures invisible from the ground.",
      heroImageKey: "oceanCliffs",
      imageKeys: ["beach", "oceanSunset", "aerialForest", "desertRoad"],
    },
    {
      id: "events",
      title: "Event Coverage",
      story:
        "From stadium energy to intimate gatherings — dual coverage on ground and in the air captures the full scale of the moment.",
      heroImageKey: "eventParty",
      imageKeys: ["eventCrowd", "concert", "eventStadium", "eventRunway"],
    },
    {
      id: "commercial",
      title: "Production Portfolio",
      story:
        "Commercial and portrait work with a production-house finish. Clean lighting, strong composition, deliverables ready for any platform.",
      heroImageKey: "portraitA",
      imageKeys: ["portraitBack", "fashionPortrait", "portraitB", "womanPortraitA"],
    },
  ],
  galleryImages: [
    { id: "g1", imageKey: "aerialForest", alt: "Aerial forest landscape from drone", size: "large" },
    { id: "g2", imageKey: "oceanCliffs", alt: "Coastal cliffs aerial view", size: "small" },
    { id: "g3", imageKey: "cityStreet", alt: "Cityscape from above", size: "medium" },
    { id: "g4", imageKey: "desertRoad", alt: "Desert road aerial perspective", size: "large" },
    { id: "g5", imageKey: "eventParty", alt: "Live event production coverage", size: "medium" },
    { id: "g6", imageKey: "eventCrowd", alt: "Event crowd from ground level", size: "small" },
    { id: "g7", imageKey: "mistyForest", alt: "Misty terrain aerial shot", size: "large" },
    { id: "g8", imageKey: "concert", alt: "Concert production atmosphere", size: "medium" },
    { id: "g9", imageKey: "portraitA", alt: "Commercial portrait session", size: "small" },
    { id: "g10", imageKey: "beach", alt: "Beach coastline from drone", size: "large" },
    { id: "g11", imageKey: "eventRunway", alt: "Runway event aerial coverage", size: "medium" },
    { id: "g12", imageKey: "oceanSunset", alt: "Sunset over water aerial view", size: "small" },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Regional Events Co.",
      projectType: "Aerial Event Coverage",
      quote:
        "Zyd delivered stunning drone footage that completely transformed how we promote our festivals. Professional, smooth, and cinematic every time.",
      imageKey: "womanProfessional",
    },
    {
      id: "t2",
      name: "Marco Santos",
      projectType: "Commercial Production",
      quote:
        "Republic Works understood our brand immediately. The aerial shots gave our campaign a scale we couldn't achieve any other way.",
      imageKey: "manTestimonial",
    },
    {
      id: "t3",
      name: "Coastal Resort Group",
      projectType: "Drone Photography",
      quote:
        "The perspective Zyd captures makes our properties look as breathtaking in photos as they do in person. Highly recommend.",
      imageKey: "womanTestimonial",
    },
  ],
  awards: [
    { year: "2025", title: "Philippine Drone Film Festival", category: "Aerial Cinematography — Finalist" },
    { year: "2024", title: "Republic Works Production", category: "Founded — Visual Production Studio" },
    { year: "2023", title: "Regional Creative Awards", category: "Event Coverage — Commended" },
  ],
};
