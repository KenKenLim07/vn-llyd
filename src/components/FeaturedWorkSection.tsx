"use client";

import { workCategories } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function FeaturedWorkSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="work" className="bg-zinc-50 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs tracking-[0.35em] text-zinc-500 uppercase">
            Selected Work
          </p>
          <h2 className="font-heading mt-3 text-4xl font-light tracking-tight text-zinc-950 md:text-5xl lg:text-6xl">
            Featured Collections
          </h2>
        </ScrollReveal>

        <div className="mt-20 space-y-24 md:space-y-32 lg:space-y-40">
          {workCategories.map((category, index) => {
            const isReversed = index % 2 === 1;

            return (
              <ScrollReveal key={category.id} delay={0.1}>
                <article
                  className={`group grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 ${
                    isReversed ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      category.aspect === "tall"
                        ? "aspect-[3/4]"
                        : "aspect-[4/3]"
                    } ${isReversed ? "lg:[direction:ltr]" : ""}`}
                  >
                    <motion.div
                      className="relative h-full w-full"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={category.image}
                        alt={`${category.title} photography collection`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </motion.div>
                  </div>

                  <div
                    className={`flex flex-col justify-center ${
                      isReversed ? "lg:[direction:ltr]" : ""
                    }`}
                  >
                    <span className="text-xs tracking-[0.3em] text-zinc-400 uppercase">
                      0{index + 1}
                    </span>
                    <h3 className="font-heading mt-3 text-3xl font-light text-zinc-950 md:text-4xl">
                      {category.title}
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600">
                      {category.description}
                    </p>
                    <a
                      href="#gallery"
                      className="mt-8 inline-flex cursor-pointer items-center gap-2 text-xs tracking-[0.2em] text-zinc-950 uppercase transition-opacity duration-200 hover:opacity-60"
                    >
                      View Collection
                      <span className="block h-px w-8 bg-zinc-950 transition-all duration-300 group-hover:w-12" />
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
