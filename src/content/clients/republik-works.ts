import type { ClientDefinition } from "../types";

const photos = (file: string) => `/clients/republik-works/photos/${file}`;

/** Republik Works Production — photo studio & live coverage team */
export const client: ClientDefinition = {
  id: "republik-works",
  site: {
    brand: "Republik Works Production",
    brandShort: "Republik Works",
    studio: true,
    tagline:
      "Photo studio, video live coverage, and aerial cinematography for weddings, celebrations, and festivals.",
    footerTagline:
      "Photo studio and video live coverage — weddings, birthdays, festivals, and events across the Philippines.",
    contactIntro:
      "Planning a wedding, birthday, festival, or live event? Republik Works Production would love to hear about your coverage needs — photo, video, or aerial.",
    contactThankYou: "The Republik Works team will be in touch shortly.",
    aboutTitle: "The Studio",
    contactProjectTypes: [
      { value: "wedding", label: "Wedding Coverage" },
      { value: "birthday", label: "Birthday / Celebration" },
      { value: "festival", label: "Festival / Live Event" },
      { value: "video", label: "Video Live Coverage" },
      { value: "aerial", label: "Aerial / Drone Service" },
      { value: "studio", label: "Photo Studio Session" },
      { value: "other", label: "Other" },
    ],
    facebook: "https://www.facebook.com/Pitikrepublik",
    instagram: "https://www.instagram.com/pitik_republik/",
    tiktok: "https://www.tiktok.com/@pitik_republik",
    youtube: "https://youtube.com/@pitikrepublikvlog",
    phone: "+639663771766",
    phoneDisplay: "+63 966 377 1766",
    address: "Real Street, Poblacion, Ajuy, Iloilo City, Philippines 5012",
    mapQuery: "Real Street, Poblacion, Ajuy, Iloilo, Philippines 5012",
    defaultSiteUrl: "https://republik-works-production.vercel.app",
  },
  sections: {
    hero: {
      variant: "aerial",
      imageKey: "hero",
      eyebrow: "Photo · Video · Live Coverage · Aerial",
      showScrollHint: true,
      primaryCta: { label: "View Our Work", href: "#work" },
      secondaryCta: { label: "Book Coverage", href: "#contact" },
      imageAlt:
        "Cinematic aerial mountain view — Republik Works Production photo and video coverage",
    },
  },
  images: {
    hero: photos("aerial-mountains.jpg"),
    mountains: photos("aerial-mountains.jpg"),
    portraitA: photos("commercial-portrait.jpg"),
    portraitBack: photos("commercial-portrait.jpg"),
    portraitB: "/portfolio/portrait-b.jpg",
    weddingA: photos("event-coverage.jpg"),
    weddingB: photos("event-production.jpg"),
    weddingC: photos("aerial-coast.jpg"),
    eventCrowd: photos("event-coverage.jpg"),
    eventParty: photos("event-production.jpg"),
    eventStadium: photos("event-production.jpg"),
    eventRunway: photos("aerial-city-dusk.jpg"),
    cityStreet: photos("aerial-city-dusk.jpg"),
    cityNight: photos("aerial-city-dusk.jpg"),
    japanTemple: photos("aerial-coast.jpg"),
    japanStreet: photos("aerial-desert.jpg"),
    beach: photos("aerial-coast.jpg"),
    oceanCliffs: photos("aerial-coast.jpg"),
    mistyForest: photos("aerial-mountains.jpg"),
    desertRoad: photos("aerial-desert.jpg"),
    aerialForest: photos("aerial-mountains.jpg"),
    oceanSunset: photos("aerial-coast.jpg"),
    fashionPortrait: photos("commercial-portrait.jpg"),
    concert: photos("event-production.jpg"),
    womanPortraitA: photos("commercial-portrait.jpg"),
    womanTestimonial: "/portfolio/testimonial-woman.jpg",
    womanProfessional: "/portfolio/testimonial-professional.jpg",
    manTestimonial: "/portfolio/testimonial-man.jpg",
  },
  about: {
    portraitPath: "/clients/republik-works/profile.jpg",
    story: `Republik Works Production is a photo studio and video live coverage team built for moments that matter. From intimate weddings and birthday celebrations to festival stages and large-scale events, we capture the energy on the ground — and the scale from the sky when the story calls for it.`,
    philosophy: `Every event has its own rhythm. We work as a coordinated crew — photographers, videographers, and aerial operators — so nothing gets missed. Clean coverage when you need it, cinematic flair when the moment demands it.`,
    experience: `We specialize in weddings, birthdays, and festival events across the Philippines, offering photo studio sessions, video live coverage, and licensed aerial services. Deliverables ready for social, broadcast, and keepsake albums.`,
  },
  workCategories: [
    {
      id: "weddings",
      title: "Weddings & Celebrations",
      description:
        "Weddings, birthdays, and milestones captured with warmth, detail, and a production-ready finish.",
      imageKey: "weddingA",
      aspect: "wide",
    },
    {
      id: "events",
      title: "Events & Live Coverage",
      description:
        "Festivals, concerts, and live events — photo and video coverage that keeps pace with the action.",
      imageKey: "eventParty",
      aspect: "wide",
    },
    {
      id: "studio",
      title: "Photo & Video Studio",
      description:
        "Studio sessions, portraits, and commercial content crafted for brands and personal stories.",
      imageKey: "portraitA",
      aspect: "tall",
    },
    {
      id: "aerial",
      title: "Aerial & Cinematography",
      description:
        "Licensed drone work for sweeping establishing shots, venue reveals, and cinematic aerial sequences.",
      imageKey: "aerialForest",
      aspect: "wide",
    },
  ],
  projects: [
    {
      id: "weddings",
      title: "Wedding & Celebration Coverage",
      story:
        "From intimate ceremonies to grand receptions — our team documents every glance, every toast, and every detail so the day lives on long after the lights go down.",
      heroImageKey: "weddingB",
      imageKeys: ["weddingA", "weddingC", "portraitA", "eventCrowd"],
    },
    {
      id: "festivals",
      title: "Festival Live Coverage",
      story:
        "Stages, crowds, and peak moments captured in real time. Photo and video crews work in sync so organizers get content while the energy is still fresh.",
      heroImageKey: "eventParty",
      imageKeys: ["eventCrowd", "concert", "eventStadium", "eventRunway"],
    },
    {
      id: "studio",
      title: "Studio & Commercial",
      story:
        "Controlled lighting, strong composition, and deliverables shaped for brands, campaigns, and personal portraits.",
      heroImageKey: "portraitA",
      imageKeys: ["portraitBack", "fashionPortrait", "portraitB", "womanPortraitA"],
    },
    {
      id: "aerial",
      title: "Aerial Cinematography",
      story:
        "When the story needs scale — venue reveals, festival grounds, coastlines, and cityscapes from above. Smooth, cinematic drone work as part of the full production package.",
      heroImageKey: "aerialForest",
      imageKeys: ["oceanCliffs", "cityStreet", "mistyForest", "desertRoad"],
    },
  ],
  galleryImages: [
    { id: "g1", imageKey: "weddingA", alt: "Wedding celebration coverage", size: "large" },
    { id: "g2", imageKey: "eventParty", alt: "Festival live event coverage", size: "small" },
    { id: "g3", imageKey: "portraitA", alt: "Photo studio portrait session", size: "medium" },
    { id: "g4", imageKey: "aerialForest", alt: "Cinematic aerial mountain view", size: "large" },
    { id: "g5", imageKey: "eventCrowd", alt: "Event crowd live coverage", size: "medium" },
    { id: "g6", imageKey: "weddingB", alt: "Wedding reception moments", size: "small" },
    { id: "g7", imageKey: "oceanCliffs", alt: "Coastal aerial cinematography", size: "large" },
    { id: "g8", imageKey: "concert", alt: "Concert video live coverage", size: "medium" },
    { id: "g9", imageKey: "portraitBack", alt: "Studio portrait work", size: "small" },
    { id: "g10", imageKey: "cityStreet", alt: "City skyline aerial view", size: "large" },
    { id: "g11", imageKey: "eventRunway", alt: "Festival runway event coverage", size: "medium" },
    { id: "g12", imageKey: "desertRoad", alt: "Aerial desert landscape", size: "small" },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Festival Organizers Guild",
      projectType: "Live Event Coverage",
      quote:
        "Republik Works handled our festival photo and video from start to finish. Fast turnaround, professional crew, and coverage that actually matched the energy on the ground.",
      imageKey: "womanProfessional",
    },
    {
      id: "t2",
      name: "Maria & James",
      projectType: "Wedding Coverage",
      quote:
        "They captured our wedding beautifully — every important moment plus stunning aerial shots of the venue. The team was organized and easy to work with all day.",
      imageKey: "womanTestimonial",
    },
    {
      id: "t3",
      name: "Event Productions PH",
      projectType: "Video Live Coverage",
      quote:
        "Reliable live coverage when it matters most. Photo, video, and drone in one crew — exactly what we needed for a multi-day celebration.",
      imageKey: "manTestimonial",
    },
  ],
  awards: [
    { year: "2025", title: "Republik Works Production", category: "Photo Studio & Live Coverage — Philippines" },
    { year: "2024", title: "Regional Events Network", category: "Preferred Coverage Partner" },
    { year: "2023", title: "Creative Services Collective", category: "Event Production — Commended" },
  ],
};
