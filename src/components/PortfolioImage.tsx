"use client";

import { useReducedMotion } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ShimmerTone = "light" | "dark";

export type PortfolioImageProps = ImageProps & {
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
  ...props
}: PortfolioImageProps) {
  const [loaded, setLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isVisible = loaded || prefersReducedMotion;

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
          shimmer === "dark" ? "bg-zinc-800" : "bg-zinc-200",
          !isVisible && "image-shimmer",
        )}
        aria-hidden
      />
      <Image
        {...props}
        fill={fill}
        alt={alt}
        className={cn(
          "relative z-10",
          className,
          isVisible ? "opacity-100" : "opacity-0",
          !prefersReducedMotion && "transition-opacity duration-500 ease-out",
        )}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
      />
    </div>
  );
}
