"use client";

import { siteConfig } from "@/lib/data";
import { images } from "@/lib/images";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const HERO_IMAGE = images.hero;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, prefersReducedMotion ? 0 : 120]);
  const textY = useTransform(scrollY, [0, 600], [0, prefersReducedMotion ? 0 : 60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section
      className="relative flex h-screen min-h-[600px] items-end overflow-hidden bg-zinc-950"
      aria-label="Hero"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src={HERO_IMAGE}
          alt="Cinematic photography hero — dramatic landscape at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/20" />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <motion.div
        className="relative z-10 w-full px-6 pb-24 md:px-12 md:pb-32 lg:px-16"
        style={{ y: textY, opacity }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.p
            className="mb-4 text-xs tracking-[0.35em] text-zinc-400 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {siteConfig.brand}
          </motion.p>

          <motion.h1
            className="font-heading max-w-4xl text-5xl leading-[0.95] font-light tracking-tight text-white md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#work"
              className="cursor-pointer border border-white bg-white px-8 py-3.5 text-xs tracking-[0.2em] text-zinc-950 uppercase transition-colors duration-200 hover:bg-transparent hover:text-white"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="cursor-pointer border border-white/40 px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#work"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-zinc-400 transition-colors duration-200 hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-label="Scroll to portfolio"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
