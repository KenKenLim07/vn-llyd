import type { ClientDefinition } from "../types";

const photos = (file: string) => `/clients/creative-jeddy/photos/${file}`;

/** Creative Jeddy — Jedrick Solinap */
export const client: ClientDefinition = {
  id: "creative-jeddy",
  site: {
    brand: "Creative Jeddy",
    brandShort: "Jeddy",
    name: "Jedrick Solinap",
    tagline:
      "CAAP-licensed drone pilot, cinematographer, and photographer — cinematic stories from Iloilo and beyond.",
    footerTagline:
      "Drone, cinematography, and photography for brands, events, and digital creators across the Philippines.",
    contactIntro:
      "Need aerial coverage, cinematic video, or portrait work? Jedrick would love to hear about your project — from brand films to event highlights.",
    contactThankYou: "Jedrick will be in touch shortly.",
    aboutTitle: "The Creator",
    contactProjectTypes: [
      { value: "aerial", label: "Drone / Aerial Cinematography" },
      { value: "cinematography", label: "Cinematography / Video" },
      { value: "photography", label: "Photography Session" },
      { value: "event", label: "Event Coverage" },
      { value: "brand", label: "Brand / Digital Content" },
      { value: "other", label: "Other" },
    ],
    facebook: "https://www.facebook.com/CreativeJeddy",
    defaultSiteUrl: "https://creative-jeddy.vercel.app",
  },
  sections: {
    hero: {
      variant: "aerial",
      imageKey: "hero",
      eyebrow: "Drone · Cinematography · Photography",
      showScrollHint: true,
      primaryCta: { label: "View Work", href: "#work" },
      secondaryCta: { label: "Get In Touch", href: "#contact" },
      imageAlt:
        "Mountain peaks above a sea of clouds at golden hour — Creative Jeddy cinematography by Jedrick Solinap",
    },
  },
  images: {
    hero: "/portfolio/hero.jpg",
    mountains: "/portfolio/hero.jpg",
    droneBangkas: photos("drone-shot.jpg"),
    portraitA: photos("portrait.jpg"),
    portraitBack: photos("portrait.jpg"),
    portraitB: "/portfolio/portrait-b.jpg",
    weddingA: photos("event-coverage.jpg"),
    weddingB: photos("event-coverage.jpg"),
    weddingC: photos("aerial-coast.jpg"),
    eventCrowd: photos("event-coverage.jpg"),
    eventParty: photos("event-coverage.jpg"),
    eventStadium: photos("event-coverage.jpg"),
    eventRunway: photos("aerial-city.jpg"),
    cityStreet: photos("aerial-city.jpg"),
    cityNight: photos("aerial-city.jpg"),
    japanTemple: photos("aerial-coast.jpg"),
    japanStreet: photos("aerial-landscape.jpg"),
    beach: photos("aerial-coast.jpg"),
    oceanCliffs: photos("aerial-coast.jpg"),
    mistyForest: photos("drone-shot.jpg"),
    desertRoad: photos("aerial-landscape.jpg"),
    aerialForest: photos("drone-shot.jpg"),
    oceanSunset: photos("aerial-coast.jpg"),
    fashionPortrait: photos("portrait.jpg"),
    concert: photos("event-coverage.jpg"),
    womanPortraitA: photos("portrait.jpg"),
    womanTestimonial: "/portfolio/testimonial-woman.jpg",
    womanProfessional: "/portfolio/testimonial-professional.jpg",
    manTestimonial: "/portfolio/testimonial-man.jpg",
  },
  about: {
    portraitPath: "/clients/creative-jeddy/jd-profile.jpg",
    story: `I'm Jedrick Solinap — Creative Jeddy. A CAAP-licensed drone pilot, cinematographer, and photographer based in Iloilo City, I lead creative and technology at TODO Media while building visual stories for brands, events, and digital platforms.`,
    philosophy: `Great visuals start with intent. I fly with purpose, light with care, and edit with rhythm — so your story feels as dynamic in a reel as it does on a big screen. Licensed, insured, and obsessed with the details that separate good from unforgettable.`,
    experience: `TODO Media — Chief Technology Officer (Dec 2023–present). TODO Media — Content Creator (Apr 2020–Dec 2023, 3 years 8 months). VT: Voiceless Technologies — Computer Graphic Designer (Jan–May 2019). CYC Special Committee, Make 10 Million (2017–2019). Central Echo — Photojournalist (2014–2019, 5 years). Education: Central Philippine University (2018–2020). CAAP-licensed drone pilot serving Iloilo and clients across the Philippines.`,
  },
  workCategories: [
    {
      id: "aerial",
      title: "Aerial & Drone",
      description:
        "CAAP-licensed drone work — from fleet reveals over open water to sweeping landscape passes and cinematic aerial sequences.",
      imageKey: "droneBangkas",
      aspect: "wide",
    },
    {
      id: "cinematography",
      title: "Cinematography",
      description:
        "Cinematic video for brands, events, and digital platforms — shot and graded for impact.",
      imageKey: "eventParty",
      aspect: "wide",
    },
    {
      id: "photography",
      title: "Photography",
      description:
        "Portraits, events, and editorial stills with clean composition and intentional light.",
      imageKey: "portraitA",
      aspect: "tall",
    },
    {
      id: "digital",
      title: "Digital Content",
      description:
        "Content built for social and campaigns — vertical, horizontal, and everything in between.",
      imageKey: "cityStreet",
      aspect: "wide",
    },
  ],
  projects: [
    {
      id: "aerial",
      title: "Aerial Cinematography",
      story:
        "A fleet of bangkas scattered across turquoise water — captured from above to show scale, color, and the rhythm of island life. Licensed drone work for stories that need altitude.",
      heroImageKey: "droneBangkas",
      imageKeys: ["oceanCliffs", "cityStreet", "mistyForest", "desertRoad"],
    },
    {
      id: "events",
      title: "Event Highlights",
      story:
        "Energy, crowd, and peak moments captured for recap films and social cutdowns — ground and aerial when the brief calls for scale.",
      heroImageKey: "eventParty",
      imageKeys: ["eventCrowd", "concert", "eventStadium", "eventRunway"],
    },
    {
      id: "portraits",
      title: "Portrait & Brand",
      story:
        "Personal branding, portraits, and campaign stills — crafted for creators and businesses who need a polished visual identity.",
      heroImageKey: "portraitA",
      imageKeys: ["portraitBack", "fashionPortrait", "portraitB", "womanPortraitA"],
    },
    {
      id: "iloilo",
      title: "Iloilo Stories",
      story:
        "Local landscapes and urban textures from the heart of Western Visayas — a visual love letter to the region Jedrick calls home.",
      heroImageKey: "oceanCliffs",
      imageKeys: ["beach", "japanTemple", "japanStreet", "mountains"],
    },
  ],
  galleryImages: [
    { id: "g1", imageKey: "droneBangkas", alt: "Aerial drone shot of bangkas on the water — Creative Jeddy", size: "large" },
    { id: "g2", imageKey: "portraitA", alt: "Portrait photography session", size: "small" },
    { id: "g3", imageKey: "eventParty", alt: "Event cinematography coverage", size: "medium" },
    { id: "g4", imageKey: "oceanCliffs", alt: "Coastal aerial drone shot", size: "large" },
    { id: "g5", imageKey: "cityStreet", alt: "Urban aerial perspective", size: "medium" },
    { id: "g6", imageKey: "portraitBack", alt: "Creative portrait work", size: "small" },
    { id: "g7", imageKey: "mistyForest", alt: "Fleet of boats captured from above — drone cinematography", size: "large" },
    { id: "g8", imageKey: "concert", alt: "Live event coverage", size: "medium" },
    { id: "g9", imageKey: "desertRoad", alt: "Aerial road landscape", size: "small" },
    { id: "g10", imageKey: "fashionPortrait", alt: "Brand portrait photography", size: "large" },
    { id: "g11", imageKey: "eventCrowd", alt: "Event crowd cinematography", size: "medium" },
    { id: "g12", imageKey: "beach", alt: "Coastline aerial view", size: "small" },
  ],
  testimonials: [
    {
      id: "t1",
      name: "TODO Media",
      projectType: "Cinematography & Aerial",
      quote:
        "Jedrick brings technical depth and creative instinct to every shoot. His drone work elevates our productions without ever feeling gimmicky.",
      imageKey: "womanProfessional",
    },
    {
      id: "t2",
      name: "Brand Client",
      projectType: "Digital Content",
      quote:
        "Creative Jeddy delivered exactly what we needed for our campaign — cinematic, on-brand, and ready to post the same week.",
      imageKey: "manTestimonial",
    },
    {
      id: "t3",
      name: "Event Organizer",
      projectType: "Event Coverage",
      quote:
        "Professional from pre-flight checks to final delivery. The aerial shots completely changed how we promote our events online.",
      imageKey: "womanTestimonial",
    },
  ],
  awards: [
    { year: "2025", title: "CAAP Licensed Drone Pilot", category: "Civil Aviation Authority of the Philippines" },
    { year: "2023", title: "TODO Media", category: "Chief Technology Officer" },
    { year: "2020", title: "Central Philippine University", category: "Education — 2018–2020" },
    { year: "2014", title: "Central Echo", category: "Photojournalist — 5 years" },
  ],
};
