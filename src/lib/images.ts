/** Local portfolio images — replace files in /public/portfolio/ or /public/clients-photos/ anytime. */
export const images = {
  hero: "/portfolio/hero.jpg",
  mountains: "/portfolio/hero.jpg",

  // Client portraits
  portraitA: "/clients-photos/girls-back.jpg",
  portraitBack: "/clients-photos/girl-laying-at-beach.jpg",
  portraitB: "/portfolio/portrait-b.jpg",

  // Client weddings
  weddingA: "/clients-photos/wedding.jpg",
  weddingB: "/clients-photos/wedding2.jpg",
  weddingC: "/clients-photos/wedding1.jpg",

  // Client events
  eventCrowd: "/clients-photos/events-perlas-sang-tampisaw.jpg",
  eventParty: "/clients-photos/event-party-shamrock.jpg",
  eventStadium: "/clients-photos/event-shamrock-stadium.jpg",
  eventRunway: "/clients-photos/events-pampisaw-runway.jpg",

  // Placeholder portfolio (travel, street, projects)
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
} as const;

export type ImageKey = keyof typeof images;

export function img(key: ImageKey): string {
  return images[key];
}
