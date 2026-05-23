import { navLinks, siteConfig, socialLinks } from "@/lib/data";
import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/SocialIcons";
import Link from "next/link";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          <div>
            <Link
              href="/"
              className="font-heading text-sm tracking-[0.25em] text-white uppercase transition-opacity duration-200 hover:opacity-70"
            >
              {siteConfig.brand}
            </Link>
            <p className="mt-2 text-xs tracking-[0.15em] text-zinc-500 uppercase">
              {siteConfig.name}
            </p>
            <p className="mt-4 max-w-xs text-sm text-zinc-500">
              Wedding, travel, portrait, and event photography for those who
              value timeless imagery.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-8">
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
          </nav>

          <div className="flex gap-6">
            {socialLinks.map(({ label, href }) => {
              const Icon = socialIcons[label];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-zinc-500 transition-colors duration-200 hover:text-white"
                  aria-label={`${siteConfig.brand} on ${label}`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8">
          <p className="text-xs tracking-wide text-zinc-600">
            {siteConfig.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
