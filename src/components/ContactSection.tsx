"use client";

import { siteConfig, socialLinks } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/SocialIcons";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
} as const;

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-zinc-950 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal>
            <p className="text-xs tracking-[0.35em] text-zinc-500 uppercase">
              Contact
            </p>
            <h2 className="font-heading mt-4 text-4xl leading-tight font-light tracking-tight text-white md:text-5xl lg:text-6xl">
              Let&apos;s Create Something Beautiful Together
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
              Whether you&apos;re planning a wedding, commissioning a portrait
              session, or collaborating on an editorial project—{siteConfig.name}{" "}
              would love to hear your vision.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
              {socialLinks.map(({ label, href }) => {
                const Icon = socialIcons[label];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center gap-3 text-white transition-opacity duration-200 hover:opacity-70"
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="text-sm tracking-wide">{label}</span>
                  </a>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center border border-zinc-800 p-12 text-center">
                <p className="font-heading text-2xl font-light text-white">
                  Thank you
                </p>
                <p className="mt-4 text-zinc-400">
                  Your message has been received.{" "}
                  {siteConfig.name} will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 border border-zinc-800 p-8 md:p-10"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs tracking-[0.2em] text-zinc-500 uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border-b border-zinc-700 bg-transparent py-3 text-white outline-none transition-colors duration-200 focus:border-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs tracking-[0.2em] text-zinc-500 uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-b border-zinc-700 bg-transparent py-3 text-white outline-none transition-colors duration-200 focus:border-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="project"
                    className="mb-2 block text-xs tracking-[0.2em] text-zinc-500 uppercase"
                  >
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="w-full cursor-pointer border-b border-zinc-700 bg-transparent py-3 text-white outline-none transition-colors duration-200 focus:border-white"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled className="bg-zinc-950">
                      Select a project type
                    </option>
                    <option value="wedding" className="bg-zinc-950">
                      Wedding Photography
                    </option>
                    <option value="portrait" className="bg-zinc-950">
                      Portrait Session
                    </option>
                    <option value="travel" className="bg-zinc-950">
                      Travel / Editorial
                    </option>
                    <option value="event" className="bg-zinc-950">
                      Event Coverage
                    </option>
                    <option value="other" className="bg-zinc-950">
                      Other
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs tracking-[0.2em] text-zinc-500 uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none border-b border-zinc-700 bg-transparent py-3 text-white outline-none transition-colors duration-200 focus:border-white"
                    placeholder="Tell me about your vision..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full cursor-pointer items-center justify-center gap-2 border border-white bg-white py-4 text-xs tracking-[0.2em] text-zinc-950 uppercase transition-colors duration-200 hover:bg-transparent hover:text-white"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
