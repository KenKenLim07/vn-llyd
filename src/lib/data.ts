import { images, img } from "@/lib/images";

export const siteConfig = {
  brand: "ShutterStories Photography",
  brandShort: "ShutterStories",
  name: "Vn Llyd",
  tagline:
    "Capturing stories through light, emotion, and timeless moments.",
  facebook:
    "https://www.facebook.com/share/1GcoGf38kt/?mibextid=wwXIfr",
  instagram: "https://instagram.com/vnllydofficial",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://shutterstories-photography.vercel.app",
  copyright: `© ${new Date().getFullYear()} ShutterStories Photography. All rights reserved.`,
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  { label: "Facebook", href: siteConfig.facebook },
  { label: "Instagram", href: siteConfig.instagram },
] as const;

export const workCategories = [
  {
    id: "portraits",
    title: "Portraits",
    description:
      "Intimate studies of character, light, and the quiet poetry of human expression.",
    image: img("portraitA"),
    aspect: "tall" as const,
  },
  {
    id: "weddings",
    title: "Weddings",
    description:
      "Timeless celebrations captured with editorial elegance and emotional depth.",
    image: img("weddingA"),
    aspect: "wide" as const,
  },
  {
    id: "travel",
    title: "Travel",
    description:
      "Landscapes and cultures woven into visual narratives of wonder and discovery.",
    image: img("mountains"),
    aspect: "wide" as const,
  },
  {
    id: "street",
    title: "Street Photography",
    description:
      "Urban rhythms, fleeting moments, and the raw beauty of everyday life.",
    image: img("cityStreet"),
    aspect: "tall" as const,
  },
  {
    id: "events",
    title: "Events",
    description:
      "Corporate gatherings and private celebrations documented with cinematic flair.",
    image: img("eventParty"),
    aspect: "wide" as const,
  },
];

export const projects = [
  {
    id: "kyoto",
    title: "Kyoto Street Stories",
    story:
      "A visual journey through ancient alleyways where tradition meets the ephemeral beauty of everyday life. Each frame whispers secrets of a city frozen between centuries.",
    heroImage: img("japanTemple"),
    images: [
      img("japanStreet"),
      img("cityNight"),
      img("mistyForest"),
      img("desertRoad"),
    ],
  },
  {
    id: "iloilo",
    title: "Iloilo Golden Hour",
    story:
      "When the Philippine sun descends, the city transforms into a canvas of amber and shadow. This series celebrates the magic hour along coastal horizons.",
    heroImage: img("beach"),
    images: [
      img("oceanCliffs"),
      img("oceanSunset"),
      img("aerialForest"),
      img("desertRoad"),
    ],
  },
  {
    id: "wedding",
    title: "Summer Wedding Collection",
    story:
      "An intimate celebration of love beneath Mediterranean skies. Every photograph preserves the tenderness between stolen glances and shared laughter.",
    heroImage: img("weddingC"),
    images: [
      img("weddingB"),
      img("weddingA"),
      img("weddingC"),
      img("weddingA"),
    ],
  },
  {
    id: "faces",
    title: "Coastal Portraits",
    story:
      "Intimate portraits shaped by sea air and soft light. Each frame explores poise, movement, and the quiet confidence found between tides.",
    heroImage: img("portraitBack"),
    images: [
      img("portraitA"),
      img("portraitBack"),
      img("portraitB"),
      img("womanPortraitA"),
    ],
  },
];

export const galleryImages = [
  {
    id: "g1",
    src: img("mountains"),
    alt: "Mountain landscape at dawn",
    size: "large" as const,
  },
  {
    id: "g2",
    src: img("portraitBack"),
    alt: "Portrait on the beach",
    size: "small" as const,
  },
  {
    id: "g3",
    src: img("fashionPortrait"),
    alt: "Fashion portrait",
    size: "medium" as const,
  },
  {
    id: "g4",
    src: img("desertRoad"),
    alt: "Road trip through desert",
    size: "large" as const,
  },
  {
    id: "g5",
    src: img("mistyForest"),
    alt: "Fog over forest valley",
    size: "medium" as const,
  },
  {
    id: "g6",
    src: img("eventParty"),
    alt: "Event celebration at Shamrock",
    size: "small" as const,
  },
  {
    id: "g7",
    src: img("weddingB"),
    alt: "Wedding couple embrace",
    size: "large" as const,
  },
  {
    id: "g8",
    src: img("oceanSunset"),
    alt: "Ocean waves at sunset",
    size: "medium" as const,
  },
  {
    id: "g9",
    src: img("portraitA"),
    alt: "Beach portrait session",
    size: "small" as const,
  },
  {
    id: "g10",
    src: img("aerialForest"),
    alt: "Alpine peaks in mist",
    size: "large" as const,
  },
  {
    id: "g11",
    src: img("eventStadium"),
    alt: "Event at Shamrock stadium",
    size: "medium" as const,
  },
  {
    id: "g12",
    src: img("japanStreet"),
    alt: "Street scene in Japan",
    size: "small" as const,
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Sarah & Michael Chen",
    projectType: "Wedding Photography",
    quote:
      "Vn didn't just photograph our wedding—he crafted a visual poem of our love story. Every image feels like a frame from a film we'll treasure forever.",
    image: img("womanTestimonial"),
  },
  {
    id: "t2",
    name: "Marcus Reid",
    projectType: "Portrait Session",
    quote:
      "Working with Vn was transformative. He has an extraordinary ability to make you feel seen, not just photographed. The results exceeded every expectation.",
    image: img("manTestimonial"),
  },
  {
    id: "t3",
    name: "Artisan Gallery",
    projectType: "Exhibition Collaboration",
    quote:
      "Vn's work possesses a rare combination of technical mastery and emotional intelligence. His exhibition was among our most attended of the year.",
    image: img("womanProfessional"),
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
  portrait: "/client-profile/vn-llyd.jpg",
  portraitAlt: `${siteConfig.name} — ${siteConfig.brand}`,
  story: `For over a decade, I've wandered between cities and silence, chasing the intersection where light becomes memory. Photography, to me, is not documentation—it is translation. I translate fleeting emotions into images that outlast the moment itself.`,
  philosophy: `My philosophy is rooted in restraint. I believe the most powerful photographs are those that breathe—where negative space speaks as loudly as subject matter, and where the viewer is invited to complete the narrative.`,
  experience: `Based between Madrid and Tokyo, I've collaborated with editorial publications, luxury brands, and couples who trust me to preserve their most sacred moments. My work has been exhibited internationally and continues to explore the boundaries between documentary truth and artistic vision.`,
};

/** Shared OG image for metadata */
export const ogImage = `${siteConfig.siteUrl}${images.hero}`;
