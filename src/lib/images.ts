/** Verified Unsplash photo IDs (return HTTP 200 as of 2026). */
export const photos = {
  hero: "1506905925346-21bda4d32df4",
  portraitA: "1534528741775-53994a69daeb",
  portraitB: "1502920917128-1aa500764cbd",
  weddingA: "1519741497674-611481863552",
  weddingB: "1511285560929-80b456fea0bc",
  weddingC: "1606216794074-735e91aa2c92",
  mountains: "1506905925346-21bda4d32df4",
  cityStreet: "1449824913935-59a10b8d2000",
  eventCrowd: "1492684223066-81342ee5ff30",
  japanTemple: "1528360983277-13d401cdc186",
  japanStreet: "1500530855697-b586d89ba3ee",
  beach: "1507525428034-b723cf961d3e",
  oceanCliffs: "1505142468610-359e7d316be0",
  mistyForest: "1470071459604-3b5ec3a7fe05",
  desertRoad: "1469854523086-cc02fe5d8800",
  aerialForest: "1501854140801-50d01698950b",
  oceanSunset: "1502086223501-7ea6ecd79368",
  fashionPortrait: "1524504388940-b1c1722653e1",
  concert: "1511671782779-c97d3d27a1d4",
  manPortraitA: "1506794778202-cad84cf45f1d",
  manPortraitB: "1507003211169-0a1dd7228f2d",
  womanPortraitA: "1544005313-94ddf0286df2",
  womanTestimonial: "1438761681033-6461ffad8d80",
  womanProfessional: "1573496359142-b8d87734a5a2",
  manTestimonial: "1472099645785-5658abf4ff4e",
  cityNight: "1449824913935-59a10b8d2000",
  photographer: "1534528741775-53994a69daeb",
} as const;

const BASE = "https://images.unsplash.com";

/** Base URL for next/image — sizing is applied by the custom loader. */
export function unsplash(photoId: (typeof photos)[keyof typeof photos]): string {
  return `${BASE}/photo-${photoId}`;
}

/** Full URL for Open Graph / JSON-LD (no Next image loader). */
export function unsplashMeta(
  photoId: (typeof photos)[keyof typeof photos],
  width = 1200,
): string {
  return `${unsplash(photoId)}?auto=format&fit=crop&w=${width}&q=75`;
}
