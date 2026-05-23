"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PortfolioImage } from "@/components/PortfolioImage";
import { useCallback, useEffect } from "react";

type LightboxProps = {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const prefersReducedMotion = useReducedMotion();
  const current = images[currentIndex];

  const goPrev = useCallback(() => {
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, goPrev, goNext]);

  if (!current) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 z-10 cursor-pointer rounded-full p-2 text-white/80 transition-colors duration-200 hover:text-white"
          aria-label="Close lightbox"
        >
          <X className="h-6 w-6" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-4 z-10 cursor-pointer rounded-full p-3 text-white/60 transition-colors duration-200 hover:text-white md:left-8"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-4 z-10 cursor-pointer rounded-full p-3 text-white/60 transition-colors duration-200 hover:text-white md:right-8"
          aria-label="Next image"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        <motion.div
          key={current.src}
          className="relative mx-16 h-[80vh] w-full max-w-6xl"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <PortfolioImage
            src={current.src}
            alt={current.alt}
            fill
            shimmer="dark"
            className="object-contain"
            sizes="100vw"
            priority
          />
        </motion.div>

        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm tracking-widest text-white/50 uppercase">
          {currentIndex + 1} / {images.length}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
