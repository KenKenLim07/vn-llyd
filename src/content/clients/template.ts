import type { ClientDefinition } from "../types";

/** Generic demo client — used on `main` and for cold-outreach starting point. */
export const client: ClientDefinition = {
  id: "template",
  site: {
    brand: "Studio Name Photography",
    brandShort: "Studio Name",
    name: "Your Name",
    tagline:
      "Capturing stories through light, emotion, and timeless moments.",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    defaultSiteUrl: "http://localhost:3000",
  },
  images: {
    hero: "/portfolio/hero.jpg",
    mountains: "/portfolio/hero.jpg",
    portraitA: "/portfolio/portrait-b.jpg",
    portraitBack: "/portfolio/woman-portrait-a.jpg",
    portraitB: "/portfolio/portrait-b.jpg",
    weddingA: "/portfolio/wedding-a.jpg",
    weddingB: "/portfolio/wedding-b.jpg",
    weddingC: "/portfolio/wedding-c.jpg",
    eventCrowd: "/portfolio/event-crowd.jpg",
    eventParty: "/portfolio/event-crowd.jpg",
    eventStadium: "/portfolio/concert.jpg",
    eventRunway: "/portfolio/event-crowd.jpg",
    cityStreet: "/portfolio/city-street.jpg",
    cityNight: "/portfolio/city-street.jpg",
    japanTemple: "/portfolio/japan-temple.jpg",
    japanStreet: "/portfolio/japan-street.jpg",
    beach: "/portfolio/beach.jpg",
    oceanCliffs: "/portfolio/ocean-cliffs.jpg",
    mistyForest: "/portfolio/misty-forest.jpg",
    desertRoad: "/portfolio/desert-road.jpg",
    aerialForest: "/portfolio/aerial-forest.jpg",
    oceanSunset: "/portfolio/ocean-sunset.jpg",
    fashionPortrait: "/portfolio/fashion-portrait.jpg",
    concert: "/portfolio/concert.jpg",
    womanPortraitA: "/portfolio/woman-portrait-a.jpg",
    womanTestimonial: "/portfolio/testimonial-woman.jpg",
    womanProfessional: "/portfolio/testimonial-professional.jpg",
    manTestimonial: "/portfolio/testimonial-man.jpg",
  },
  about: {
    portraitPath: "/portfolio/portrait-b.jpg",
    story: `For over a decade, I've wandered between cities and silence, chasing the intersection where light becomes memory. Photography, to me, is not documentation—it is translation.`,
    philosophy: `My philosophy is rooted in restraint. I believe the most powerful photographs are those that breathe—where negative space speaks as loudly as subject matter.`,
    experience: `I've collaborated with editorial publications, luxury brands, and couples who trust me to preserve their most sacred moments.`,
  },
  workCategories: [
    {
      id: "portraits",
      title: "Portraits",
      description:
        "Intimate studies of character, light, and the quiet poetry of human expression.",
      imageKey: "portraitA",
      aspect: "tall",
    },
    {
      id: "weddings",
      title: "Weddings",
      description:
        "Timeless celebrations captured with editorial elegance and emotional depth.",
      imageKey: "weddingA",
      aspect: "wide",
    },
    {
      id: "travel",
      title: "Travel",
      description:
        "Landscapes and cultures woven into visual narratives of wonder and discovery.",
      imageKey: "mountains",
      aspect: "wide",
    },
    {
      id: "street",
      title: "Street Photography",
      description:
        "Urban rhythms, fleeting moments, and the raw beauty of everyday life.",
      imageKey: "cityStreet",
      aspect: "tall",
    },
    {
      id: "events",
      title: "Events",
      description:
        "Corporate gatherings and private celebrations documented with cinematic flair.",
      imageKey: "eventParty",
      aspect: "wide",
    },
  ],
  projects: [
    {
      id: "kyoto",
      title: "Kyoto Street Stories",
      story:
        "A visual journey through ancient alleyways where tradition meets the ephemeral beauty of everyday life.",
      heroImageKey: "japanTemple",
      imageKeys: ["japanStreet", "cityNight", "mistyForest", "desertRoad"],
    },
    {
      id: "iloilo",
      title: "Golden Hour",
      story:
        "When the sun descends, the landscape transforms into a canvas of amber and shadow.",
      heroImageKey: "beach",
      imageKeys: ["oceanCliffs", "oceanSunset", "aerialForest", "desertRoad"],
    },
    {
      id: "wedding",
      title: "Summer Wedding Collection",
      story:
        "An intimate celebration of love. Every photograph preserves tenderness between stolen glances and shared laughter.",
      heroImageKey: "weddingC",
      imageKeys: ["weddingB", "weddingA", "weddingC", "weddingA"],
    },
    {
      id: "portraits",
      title: "Portrait Sessions",
      story:
        "Intimate portraits shaped by light and environment. Each frame explores poise, movement, and quiet confidence.",
      heroImageKey: "portraitBack",
      imageKeys: ["portraitA", "portraitBack", "portraitB", "womanPortraitA"],
    },
  ],
  galleryImages: [
    { id: "g1", imageKey: "mountains", alt: "Mountain landscape at dawn", size: "large" },
    { id: "g2", imageKey: "portraitBack", alt: "Portrait in natural light", size: "small" },
    { id: "g3", imageKey: "fashionPortrait", alt: "Fashion portrait", size: "medium" },
    { id: "g4", imageKey: "desertRoad", alt: "Road trip through desert", size: "large" },
    { id: "g5", imageKey: "mistyForest", alt: "Fog over forest valley", size: "medium" },
    { id: "g6", imageKey: "eventParty", alt: "Event celebration", size: "small" },
    { id: "g7", imageKey: "weddingB", alt: "Wedding couple embrace", size: "large" },
    { id: "g8", imageKey: "oceanSunset", alt: "Ocean waves at sunset", size: "medium" },
    { id: "g9", imageKey: "portraitA", alt: "Portrait study", size: "small" },
    { id: "g10", imageKey: "aerialForest", alt: "Alpine peaks in mist", size: "large" },
    { id: "g11", imageKey: "eventStadium", alt: "Live event atmosphere", size: "medium" },
    { id: "g12", imageKey: "japanStreet", alt: "Street scene", size: "small" },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Sarah & Michael Chen",
      projectType: "Wedding Photography",
      quote:
        "Every image feels like a frame from a film we'll treasure forever.",
      imageKey: "womanTestimonial",
    },
    {
      id: "t2",
      name: "Marcus Reid",
      projectType: "Portrait Session",
      quote:
        "An extraordinary ability to make you feel seen, not just photographed.",
      imageKey: "manTestimonial",
    },
    {
      id: "t3",
      name: "Artisan Gallery",
      projectType: "Exhibition Collaboration",
      quote:
        "Technical mastery and emotional intelligence in every frame.",
      imageKey: "womanProfessional",
    },
  ],
  awards: [
    { year: "2025", title: "International Photography Awards", category: "Fine Art — Gold Medal" },
    { year: "2024", title: "Featured Artist", category: "Emerging Voices" },
    { year: "2023", title: "Travel Photographer of the Year", category: "Finalist" },
  ],
};
