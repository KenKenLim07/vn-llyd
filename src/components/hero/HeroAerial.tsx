"use client";

import { PortfolioImage } from "@/components/PortfolioImage";
import { heroContent, siteConfig } from "@/lib/data";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

function ViewfinderCorners() {
  const corner =
    "absolute h-10 w-10 border-blue-500/60 md:h-14 md:w-14";

  return (
    <motion.div
      className="pointer-events-none absolute inset-6 z-30 md:inset-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.8 }}
      aria-hidden
    >
      <span className={`${corner} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${corner} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2`} />
      <span className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/50" />
    </motion.div>
  );
}

export function HeroAerial() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, prefersReducedMotion ? 0 : 80]);
  const textY = useTransform(scrollY, [0, 600], [0, prefersReducedMotion ? 0 : 40]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.35]);

  return (
    <section
      className="relative flex min-h-[600px] h-screen items-center justify-center overflow-hidden bg-zinc-950 md:items-end md:justify-start"
      aria-label="Hero"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
        animate={
          prefersReducedMotion
            ? {}
            : { scale: [1, 1.06] }
        }
        transition={
          prefersReducedMotion
            ? {}
            : { duration: 22, ease: "linear", repeat: Infinity, repeatType: "reverse" }
        }
      >
        <PortfolioImage
          src={heroContent.image}
          alt={heroContent.imageAlt}
          fill
          priority
          shimmer="dark"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-zinc-950/90 via-zinc-950/25 to-zinc-950/10" />
        <motion.div
          className="absolute inset-0 z-20 bg-gradient-to-r from-zinc-950/50 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      <ViewfinderCorners />

      <motion.div
        className="relative z-30 w-full px-6 pb-28 pt-24 text-center md:pb-32 md:pt-0 md:text-left lg:px-16 md:px-12"
        style={{ y: textY, opacity }}
      >
        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-xs tracking-[0.35em] text-blue-400/90 uppercase">
            {heroContent.eyebrow}
          </p>

          <h1 className="font-heading max-w-4xl text-5xl leading-[0.95] font-light tracking-tight text-white md:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-200 md:text-lg">
            {siteConfig.tagline}
          </p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href={heroContent.primaryCta.href}
              className="cursor-pointer border border-blue-600 bg-blue-600 px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-colors duration-200 hover:border-blue-500 hover:bg-blue-500"
            >
              {heroContent.primaryCta.label}
            </a>
            <a
              href={heroContent.secondaryCta.href}
              className="cursor-pointer border border-white/40 px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              {heroContent.secondaryCta.label}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {heroContent.showScrollHint && (
        <motion.a
          href="#work"
          className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-zinc-400 transition-colors duration-200 hover:text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
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
      )}
    </section>
  );
}
