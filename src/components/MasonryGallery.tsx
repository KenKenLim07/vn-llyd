"use client";

import { galleryImages } from "@/lib/data";
import { Lightbox } from "@/components/Lightbox";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const sizeClasses = {
  small: "row-span-1",
  medium: "row-span-2",
  large: "row-span-3",
};

export function MasonryGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const lightboxImages = galleryImages.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <section id="gallery" className="bg-zinc-50 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs tracking-[0.35em] text-zinc-500 uppercase">
            Exhibition
          </p>
          <h2 className="font-heading mt-3 text-4xl font-light tracking-tight text-zinc-950 md:text-5xl lg:text-6xl">
            Gallery
          </h2>
          <p className="mt-4 max-w-lg text-zinc-600">
            A curated selection of moments—each frame a window into light,
            shadow, and the stories between.
          </p>
        </ScrollReveal>

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 0.05}>
              <motion.button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className={`group relative mb-4 block w-full cursor-pointer overflow-hidden break-inside-avoid lg:mb-5 ${
                  image.size === "large"
                    ? "aspect-[3/4]"
                    : image.size === "medium"
                      ? "aspect-[4/5]"
                      : "aspect-square"
                }`}
                whileHover={prefersReducedMotion ? {} : { opacity: 0.92 }}
                transition={{ duration: 0.3 }}
                aria-label={`View ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-zinc-950/0 transition-colors duration-300 group-hover:bg-zinc-950/20" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-left text-xs tracking-[0.15em] text-white uppercase">
                    View
                  </p>
                </div>
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
