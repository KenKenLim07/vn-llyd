"use client";

import { projects } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function ProjectShowcase() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="bg-zinc-950 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs tracking-[0.35em] text-zinc-500 uppercase">
            Case Studies
          </p>
          <h2 className="font-heading mt-3 text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl">
            Featured Projects
          </h2>
        </ScrollReveal>

        <div className="mt-20 space-y-32 md:space-y-40 lg:space-y-48">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <ScrollReveal key={project.id}>
                <article className="group">
                  <div
                    className={`relative aspect-[16/9] overflow-hidden ${
                      isReversed ? "lg:ml-auto lg:w-[85%]" : "lg:w-[85%]"
                    }`}
                  >
                    <motion.div
                      className="relative h-full w-full"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={project.heroImage}
                        alt={`${project.title} — hero photograph`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 85vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                    </motion.div>
                  </div>

                  <div
                    className={`mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12 ${
                      isReversed ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <div
                      className={`lg:col-span-5 ${
                        isReversed ? "lg:[direction:ltr]" : ""
                      }`}
                    >
                      <span className="text-xs tracking-[0.3em] text-zinc-500 uppercase">
                        Project
                      </span>
                      <h3 className="font-heading mt-3 text-3xl font-light text-white md:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-5 text-base leading-relaxed text-zinc-400">
                        {project.story}
                      </p>
                    </div>

                    <div
                      className={`grid grid-cols-2 gap-3 md:gap-4 lg:col-span-7 ${
                        isReversed ? "lg:[direction:ltr]" : ""
                      }`}
                    >
                      {project.images.map((img, i) => (
                        <div
                          key={img}
                          className={`relative overflow-hidden ${
                            i === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${project.title} preview ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 30vw"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
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
