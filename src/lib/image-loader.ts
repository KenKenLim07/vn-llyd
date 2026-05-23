import type { ImageLoaderProps } from "next/image";

const DEFAULT_WIDTH = 828;

/**
 * Serves images directly from Unsplash CDN.
 * `src` must be a base photo URL without sizing params — the loader owns `w`/`q`.
 */
export default function imageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  if (!src.startsWith("https://images.unsplash.com/")) {
    return src;
  }

  const url = new URL(src.split("?")[0]!);
  const resolvedWidth =
    width && width > 0 ? Math.min(Math.round(width), 1920) : DEFAULT_WIDTH;

  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", String(resolvedWidth));
  url.searchParams.set("q", String(quality ?? 75));

  return url.toString();
}
