"use client";

import { aboutContent } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left">
            <div className="relative aspect-[3/4] max-w-md overflow-hidden">
              <Image
                src={aboutContent.portrait}
                alt="Elena Vasquez — photographer portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <p className="text-xs tracking-[0.35em] text-zinc-500 uppercase">
                About
              </p>
              <h2 className="font-heading mt-3 text-4xl font-light tracking-tight text-zinc-950 md:text-5xl">
                The Photographer
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-zinc-700">
                {aboutContent.story}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 border-t border-zinc-200 pt-10">
                <h3 className="font-heading text-sm tracking-[0.2em] text-zinc-950 uppercase">
                  Philosophy
                </h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-600">
                  {aboutContent.philosophy}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 border-t border-zinc-200 pt-10">
                <h3 className="font-heading text-sm tracking-[0.2em] text-zinc-950 uppercase">
                  Experience
                </h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-600">
                  {aboutContent.experience}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
