/** Local portfolio images — replace files in /public/portfolio/ anytime. */
export const images = {
  hero: "/portfolio/hero.jpg",
  portraitA: "/portfolio/portrait-a.jpg",
  portraitB: "/portfolio/portrait-b.jpg",
  weddingA: "/portfolio/wedding-a.jpg",
  weddingB: "/portfolio/wedding-b.jpg",
  weddingC: "/portfolio/wedding-c.jpg",
  mountains: "/portfolio/hero.jpg",
  cityStreet: "/portfolio/city-street.jpg",
  cityNight: "/portfolio/city-street.jpg",
  eventCrowd: "/portfolio/event-crowd.jpg",
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
  manPortraitA: "/portfolio/man-portrait-a.jpg",
  manPortraitB: "/portfolio/man-portrait-b.jpg",
  womanPortraitA: "/portfolio/woman-portrait-a.jpg",
  womanTestimonial: "/portfolio/testimonial-woman.jpg",
  womanProfessional: "/portfolio/testimonial-professional.jpg",
  manTestimonial: "/portfolio/testimonial-man.jpg",
} as const;

export type ImageKey = keyof typeof images;

export function img(key: ImageKey): string {
  return images[key];
}
