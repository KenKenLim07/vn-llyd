"use client";

import { galleryImages } from "@/lib/data";
import { Lightbox } from "@/components/Lightbox";
import { PortfolioImage } from "@/components/PortfolioImage";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

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
          <SectionHeader
            label="Exhibition"
            title="Gallery"
            description="A curated selection of moments—each frame a window into light, shadow, and the stories between."
          />
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
                <PortfolioImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  shimmer="light"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 z-20 bg-zinc-950/0 transition-colors duration-300 group-hover:bg-zinc-950/20" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
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
