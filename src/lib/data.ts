export const siteConfig = {
  name: "Elena Vasquez",
  tagline:
    "Capturing stories through light, emotion, and timeless moments.",
  email: "hello@elenavasquez.studio",
  instagram: "https://instagram.com/elenavasquez",
  facebook: "https://facebook.com/elenavasquez",
  messenger: "https://m.me/elenavasquez",
  copyright: `© ${new Date().getFullYear()} Elena Vasquez Photography. All rights reserved.`,
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const workCategories = [
  {
    id: "portraits",
    title: "Portraits",
    description:
      "Intimate studies of character, light, and the quiet poetry of human expression.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e70?w=1200&q=85",
    aspect: "tall" as const,
  },
  {
    id: "weddings",
    title: "Weddings",
    description:
      "Timeless celebrations captured with editorial elegance and emotional depth.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",
    aspect: "wide" as const,
  },
  {
    id: "travel",
    title: "Travel",
    description:
      "Landscapes and cultures woven into visual narratives of wonder and discovery.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    aspect: "wide" as const,
  },
  {
    id: "street",
    title: "Street Photography",
    description:
      "Urban rhythms, fleeting moments, and the raw beauty of everyday life.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=85",
    aspect: "tall" as const,
  },
  {
    id: "events",
    title: "Events",
    description:
      "Corporate gatherings and private celebrations documented with cinematic flair.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=85",
    aspect: "wide" as const,
  },
];

export const projects = [
  {
    id: "kyoto",
    title: "Kyoto Street Stories",
    story:
      "A visual journey through ancient alleyways where tradition meets the ephemeral beauty of everyday life. Each frame whispers secrets of a city frozen between centuries.",
    heroImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e065f0f4?w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=85",
      "https://images.unsplash.com/photo-1545569341-9eb8b7c10c48?w=800&q=85",
      "https://images.unsplash.com/photo-1524411380930-948a37f2f4f0?w=800&q=85",
      "https://images.unsplash.com/photo-1478434899217-79b6949a1d0e?w=800&q=85",
    ],
  },
  {
    id: "iloilo",
    title: "Iloilo Golden Hour",
    story:
      "When the Philippine sun descends, the city transforms into a canvas of amber and shadow. This series celebrates the magic hour along coastal horizons.",
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1519046909928-9b3e4b0e0b0a?w=800&q=85",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d08?w=800&q=85",
      "https://images.unsplash.com/photo-1500375592092-40ab2476b9d2?w=800&q=85",
      "https://images.unsplash.com/photo-1439402093379-0e4f485e86f7?w=800&q=85",
    ],
  },
  {
    id: "wedding",
    title: "Summer Wedding Collection",
    story:
      "An intimate celebration of love beneath Mediterranean skies. Every photograph preserves the tenderness between stolen glances and shared laughter.",
    heroImage:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=85",
      "https://images.unsplash.com/photo-1465495976277-3537b8b55c19?w=800&q=85",
      "https://images.unsplash.com/photo-1522673607211-f53e9a3f5f8f?w=800&q=85",
      "https://images.unsplash.com/photo-1469371670804-ccaecd65f1f4?w=800&q=85",
    ],
  },
  {
    id: "faces",
    title: "Faces of the City",
    story:
      "Portraits of strangers who became muses. A documentary exploration of identity, resilience, and the stories written upon every face.",
    heroImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=85",
      "https://images.unsplash.com/photo-1539573810168-0a0d3b0f0b0a?w=800&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=85",
    ],
  },
];

export const galleryImages = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1493863641943-9b67165f0b0a?w=800&q=85",
    alt: "Mountain landscape at dawn",
    size: "large" as const,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1516035069371-29a1af244b4c?w=600&q=85",
    alt: "Camera on wooden surface",
    size: "small" as const,
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=85",
    alt: "Portrait in natural light",
    size: "medium" as const,
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=85",
    alt: "Road trip through desert",
    size: "large" as const,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=85",
    alt: "Fog over forest valley",
    size: "medium" as const,
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=85",
    alt: "City lights at night",
    size: "small" as const,
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=85",
    alt: "Wedding couple embrace",
    size: "large" as const,
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&q=85",
    alt: "Ocean waves at sunset",
    size: "medium" as const,
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=85",
    alt: "Fashion portrait",
    size: "small" as const,
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    alt: "Alpine peaks in mist",
    size: "large" as const,
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=85",
    alt: "Concert atmosphere",
    size: "medium" as const,
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=85",
    alt: "Aerial forest view",
    size: "small" as const,
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Sarah & Michael Chen",
    projectType: "Wedding Photography",
    quote:
      "Elena didn't just photograph our wedding—she crafted a visual poem of our love story. Every image feels like a frame from a film we'll treasure forever.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85",
  },
  {
    id: "t2",
    name: "Marcus Reid",
    projectType: "Portrait Session",
    quote:
      "Working with Elena was transformative. She has an extraordinary ability to make you feel seen, not just photographed. The results exceeded every expectation.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=85",
  },
  {
    id: "t3",
    name: "Artisan Gallery",
    projectType: "Exhibition Collaboration",
    quote:
      "Elena's work possesses a rare combination of technical mastery and emotional intelligence. Her exhibition was among our most attended of the year.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=85",
  },
];

export const awards = [
  {
    year: "2025",
    title: "International Photography Awards",
    category: "Fine Art — Gold Medal",
  },
  {
    year: "2024",
    title: "Vogue Italia",
    category: "Featured Artist — Emerging Voices",
  },
  {
    year: "2024",
    title: "Saatchi Gallery London",
    category: "Solo Exhibition — Light & Shadow",
  },
  {
    year: "2023",
    title: "National Geographic",
    category: "Travel Photographer of the Year — Finalist",
  },
  {
    year: "2023",
    title: "Aperture Foundation",
    category: "Published Portfolio — Annual Review",
  },
  {
    year: "2022",
    title: "Sony World Photography Awards",
    category: "Portrait — Commended",
  },
];

export const aboutContent = {
  portrait:
    "https://images.unsplash.com/photo-1554080723-8d889b1313f7?w=800&q=85",
  story: `For over a decade, I've wandered between cities and silence, chasing the intersection where light becomes memory. Photography, to me, is not documentation—it is translation. I translate fleeting emotions into images that outlast the moment itself.`,
  philosophy: `My philosophy is rooted in restraint. I believe the most powerful photographs are those that breathe—where negative space speaks as loudly as subject matter, and where the viewer is invited to complete the narrative.`,
  experience: `Based between Madrid and Tokyo, I've collaborated with editorial publications, luxury brands, and couples who trust me to preserve their most sacred moments. My work has been exhibited internationally and continues to explore the boundaries between documentary truth and artistic vision.`,
};
