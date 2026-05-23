"use client";

import { awards } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AwardsSection() {
  return (
    <section className="bg-zinc-50 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-center text-xs tracking-[0.35em] text-zinc-500 uppercase">
            Recognition
          </p>
          <h2 className="font-heading mt-3 text-center text-4xl font-light tracking-tight text-zinc-950 md:text-5xl">
            Awards & Features
          </h2>
        </ScrollReveal>

        <div className="relative mt-16 md:mt-20">
          <div
            className="absolute top-0 bottom-0 left-4 w-px bg-zinc-200 md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <ol className="space-y-12">
            {awards.map((award, index) => (
              <ScrollReveal key={`${award.year}-${award.title}`} delay={index * 0.06}>
                <li className="relative pl-12 md:grid md:grid-cols-2 md:gap-12 md:pl-0">
                  <div
                    className="absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-zinc-950 bg-zinc-50 md:left-1/2 md:-translate-x-1/2"
                    aria-hidden
                  />
                  <div
                    className={`md:text-right ${
                      index % 2 === 1 ? "md:order-2 md:text-left" : ""
                    }`}
                  >
                    <span className="font-heading text-2xl font-light text-zinc-300 md:text-3xl">
                      {award.year}
                    </span>
                  </div>
                  <div
                    className={`mt-1 md:mt-0 ${
                      index % 2 === 1 ? "md:order-1 md:text-right" : ""
                    }`}
                  >
                    <h3 className="font-heading text-lg text-zinc-950 md:text-xl">
                      {award.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">{award.category}</p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
