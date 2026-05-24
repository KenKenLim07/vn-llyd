import type { ClientDefinition } from "../types";

const photos = (file: string) => `/clients/vn-llyd/photos/${file}`;

/** ShutterStories Photography — Vn Llyd */
export const client: ClientDefinition = {
  id: "vn-llyd",
  site: {
    brand: "ShutterStories Photography",
    brandShort: "ShutterStories",
    name: "Vn Llyd",
    tagline:
      "Capturing stories through light, emotion, and timeless moments.",
    facebook:
      "https://www.facebook.com/share/1GcoGf38kt/?mibextid=wwXIfr",
    instagram: "https://instagram.com/vnllydofficial",
    defaultSiteUrl: "https://shutterstories-photography.vercel.app",
  },
  images: {
    hero: "/portfolio/hero.jpg",
    mountains: "/portfolio/hero.jpg",
    portraitA: photos("girl-laying-at-beach.jpg"),
    portraitBack: photos("girls-back.jpg"),
    portraitB: "/portfolio/portrait-b.jpg",
    weddingA: photos("wedding.jpg"),
    weddingB: photos("wedding2.jpg"),
    weddingC: photos("wedding1.jpg"),
    eventCrowd: photos("events-perlas-sang-tampisaw.jpg"),
    eventParty: photos("event-party-shamrock.jpg"),
    eventStadium: photos("event-shamrock-stadium.jpg"),
    eventRunway: photos("events-pampisaw-runway.jpg"),
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
    portraitPath: "/clients/vn-llyd/profile.jpg",
    story: `For over a decade, I've wandered between cities and silence, chasing the intersection where light becomes memory. Photography, to me, is not documentation—it is translation. I translate fleeting emotions into images that outlast the moment itself.`,
    philosophy: `My philosophy is rooted in restraint. I believe the most powerful photographs are those that breathe—where negative space speaks as loudly as subject matter, and where the viewer is invited to complete the narrative.`,
    experience: `Based between Madrid and Tokyo, I've collaborated with editorial publications, luxury brands, and couples who trust me to preserve their most sacred moments. My work has been exhibited internationally and continues to explore the boundaries between documentary truth and artistic vision.`,
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
        "A visual journey through ancient alleyways where tradition meets the ephemeral beauty of everyday life. Each frame whispers secrets of a city frozen between centuries.",
      heroImageKey: "japanTemple",
      imageKeys: ["japanStreet", "cityNight", "mistyForest", "desertRoad"],
    },
    {
      id: "iloilo",
      title: "Iloilo Golden Hour",
      story:
        "When the Philippine sun descends, the city transforms into a canvas of amber and shadow. This series celebrates the magic hour along coastal horizons.",
      heroImageKey: "beach",
      imageKeys: ["oceanCliffs", "oceanSunset", "aerialForest", "desertRoad"],
    },
    {
      id: "wedding",
      title: "Summer Wedding Collection",
      story:
        "An intimate celebration of love beneath Mediterranean skies. Every photograph preserves the tenderness between stolen glances and shared laughter.",
      heroImageKey: "weddingC",
      imageKeys: ["weddingB", "weddingA", "weddingC", "weddingA"],
    },
    {
      id: "faces",
      title: "Coastal Portraits",
      story:
        "Intimate portraits shaped by sea air and soft light. Each frame explores poise, movement, and the quiet confidence found between tides.",
      heroImageKey: "portraitBack",
      imageKeys: ["portraitA", "portraitBack", "portraitB", "womanPortraitA"],
    },
  ],
  galleryImages: [
    { id: "g1", imageKey: "mountains", alt: "Mountain landscape at dawn", size: "large" },
    { id: "g2", imageKey: "portraitBack", alt: "Portrait on the beach", size: "small" },
    { id: "g3", imageKey: "fashionPortrait", alt: "Fashion portrait", size: "medium" },
    { id: "g4", imageKey: "desertRoad", alt: "Road trip through desert", size: "large" },
    { id: "g5", imageKey: "mistyForest", alt: "Fog over forest valley", size: "medium" },
    { id: "g6", imageKey: "eventParty", alt: "Event celebration at Shamrock", size: "small" },
    { id: "g7", imageKey: "weddingB", alt: "Wedding couple embrace", size: "large" },
    { id: "g8", imageKey: "oceanSunset", alt: "Ocean waves at sunset", size: "medium" },
    { id: "g9", imageKey: "portraitA", alt: "Beach portrait session", size: "small" },
    { id: "g10", imageKey: "aerialForest", alt: "Alpine peaks in mist", size: "large" },
    { id: "g11", imageKey: "eventStadium", alt: "Event at Shamrock stadium", size: "medium" },
    { id: "g12", imageKey: "japanStreet", alt: "Street scene in Japan", size: "small" },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Sarah & Michael Chen",
      projectType: "Wedding Photography",
      quote:
        "Vn didn't just photograph our wedding—he crafted a visual poem of our love story. Every image feels like a frame from a film we'll treasure forever.",
      imageKey: "womanTestimonial",
    },
    {
      id: "t2",
      name: "Marcus Reid",
      projectType: "Portrait Session",
      quote:
        "Working with Vn was transformative. He has an extraordinary ability to make you feel seen, not just photographed. The results exceeded every expectation.",
      imageKey: "manTestimonial",
    },
    {
      id: "t3",
      name: "Artisan Gallery",
      projectType: "Exhibition Collaboration",
      quote:
        "Vn's work possesses a rare combination of technical mastery and emotional intelligence. His exhibition was among our most attended of the year.",
      imageKey: "womanProfessional",
    },
  ],
  awards: [
    { year: "2025", title: "International Photography Awards", category: "Fine Art — Gold Medal" },
    { year: "2024", title: "Vogue Italia", category: "Featured Artist — Emerging Voices" },
    { year: "2024", title: "Saatchi Gallery London", category: "Solo Exhibition — Light & Shadow" },
    { year: "2023", title: "National Geographic", category: "Travel Photographer of the Year — Finalist" },
    { year: "2023", title: "Aperture Foundation", category: "Published Portfolio — Annual Review" },
    { year: "2022", title: "Sony World Photography Awards", category: "Portrait — Commended" },
  ],
};
