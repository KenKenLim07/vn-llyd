"use client";

import { HeroAerial } from "@/components/hero/HeroAerial";
import { HeroCinematic } from "@/components/hero/HeroCinematic";
import { heroContent } from "@/lib/data";

const heroes = {
  cinematic: HeroCinematic,
  aerial: HeroAerial,
} as const;

export function HeroSection() {
  const Hero = heroes[heroContent.variant] ?? HeroCinematic;
  return <Hero />;
}
