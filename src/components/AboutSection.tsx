"use client";

import { PortfolioImage } from "@/components/PortfolioImage";
import { SectionHeader } from "@/components/SectionHeader";
import { aboutContent } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden lg:mx-0">
              <PortfolioImage
                src={aboutContent.portrait}
                alt={aboutContent.portraitAlt}
                fill
                shimmer="light"
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 400px"
                quality={85}
              />
            </div>
          </ScrollReveal>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <ScrollReveal className="w-full">
              <SectionHeader label="About" title="The Photographer" />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-700">
                {aboutContent.story}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 w-full border-t border-zinc-200 pt-10">
                <h3 className="font-heading text-sm tracking-[0.2em] text-zinc-950 uppercase">
                  Philosophy
                </h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-600">
                  {aboutContent.philosophy}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 w-full border-t border-zinc-200 pt-10">
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
