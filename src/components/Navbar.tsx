"use client";

import { siteConfig, navLinks } from "@/lib/data";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl rounded-none transition-colors duration-300 md:top-6 md:left-6 md:right-6 ${
          scrolled
            ? "border border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
        initial={false}
        animate={{ y: 0 }}
      >
        {!prefersReducedMotion && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-none bg-zinc-950/60 backdrop-blur-xl"
            style={{ opacity: navOpacity }}
          />
        )}

        <nav
          className="relative flex items-center justify-between px-6 py-4 md:px-8"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-heading text-sm font-medium tracking-[0.25em] text-white uppercase transition-opacity duration-200 hover:opacity-70"
          >
            {siteConfig.name}
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="cursor-pointer text-xs tracking-[0.2em] text-zinc-400 uppercase transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="cursor-pointer text-white md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-zinc-950 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-heading text-sm tracking-[0.25em] text-white uppercase">
                {siteConfig.name}
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <ul className="flex flex-1 flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="cursor-pointer font-heading text-2xl tracking-[0.15em] text-white uppercase"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
