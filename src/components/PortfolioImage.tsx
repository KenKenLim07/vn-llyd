"use client";

import { useReducedMotion } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import { useCallback, useEffect, useState } from "react";

type ShimmerTone = "light" | "dark";

export type PortfolioImageProps = ImageProps & {
  /** Background tone behind the image while loading */
  shimmer?: ShimmerTone;
  wrapperClassName?: string;
};

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function PortfolioImage({
  className,
  shimmer = "dark",
  wrapperClassName,
  alt,
  onLoad,
  fill,
  src,
  ...props
}: PortfolioImageProps) {
  const [loaded, setLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isLoaded = loaded || prefersReducedMotion;

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  const markLoaded = useCallback(() => {
    setLoaded(true);
  }, []);

  /** Cached images can finish before React attaches onLoad — check ref on mount */
  const handleImageRef = useCallback(
    (node: HTMLImageElement | null) => {
      if (node?.complete && node.naturalWidth > 0) {
        markLoaded();
      }
    },
    [markLoaded, src],
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        fill && "h-full w-full",
        wrapperClassName,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 z-0",
          shimmer === "dark" ? "bg-zinc-900" : "bg-zinc-200",
        )}
        aria-hidden
      />
      <Image
        {...props}
        ref={handleImageRef}
        src={src}
        fill={fill}
        alt={alt}
        className={cn(
          "relative z-10",
          className,
          !isLoaded && !prefersReducedMotion
            ? "scale-[1.03] blur-xl brightness-[0.85]"
            : "scale-100 blur-0 brightness-100",
          !prefersReducedMotion &&
            "transition-[filter,transform] duration-700 ease-out",
        )}
        onLoad={(event) => {
          markLoaded();
          onLoad?.(event);
        }}
      />
    </div>
  );
}
