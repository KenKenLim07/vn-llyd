import { resolveClient } from "@/content/resolve-client";

const { images, img } = resolveClient();

export { images, img };

export type ImageKey = keyof typeof images;

/** @deprecated Use img("key") — kept for backwards compatibility */
export function imagePath(key: string): string {
  return img(key);
}
