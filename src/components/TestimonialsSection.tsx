"use client";

import { testimonials } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="bg-zinc-950 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs tracking-[0.35em] text-zinc-500 uppercase">
            Testimonials
          </p>
          <h2 className="font-heading mt-3 text-4xl font-light tracking-tight text-white md:text-5xl">
            Client Stories
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1}>
              <blockquote className="flex h-full flex-col border border-zinc-800 p-8 transition-colors duration-300 hover:border-zinc-600 md:p-10">
                <p className="flex-1 text-base leading-relaxed text-zinc-300 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-4 border-t border-zinc-800 pt-8">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <cite className="font-heading text-sm not-italic tracking-wide text-white">
                      {testimonial.name}
                    </cite>
                    <p className="mt-1 text-xs tracking-[0.15em] text-zinc-500 uppercase">
                      {testimonial.projectType}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
