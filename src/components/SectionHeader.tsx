type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  theme?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
};

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function SectionHeader({
  label,
  title,
  description,
  theme = "light",
  align = "center",
  className,
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered && "text-center md:text-left",
        !centered && "text-left",
        className,
      )}
    >
      <p
        className={cn(
          "text-xs tracking-[0.35em] uppercase",
          isDark ? "text-zinc-500" : "text-zinc-500",
        )}
      >
        {label}
      </p>
      <h2
        className={cn(
          "font-heading mt-3 text-4xl font-light tracking-tight md:text-5xl lg:text-6xl",
          isDark ? "text-white" : "text-zinc-950",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-lg text-base leading-relaxed",
            centered && "mx-auto md:mx-0",
            isDark ? "text-zinc-400" : "text-zinc-600",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
