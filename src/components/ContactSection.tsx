"use client";

import { contactInfo, siteConfig, socialLinks } from "@/lib/data";
import { socialIconMap } from "@/lib/social-icons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";

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
            <div className="text-center lg:text-left">
              <p className="text-xs tracking-[0.35em] text-zinc-500 uppercase">
                Contact
              </p>
              <h2 className="font-heading mt-4 text-4xl leading-tight font-light tracking-tight text-white md:text-5xl lg:text-6xl">
                Let&apos;s Create Something Beautiful Together
              </h2>
              <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-zinc-400 lg:mx-0">
                {siteConfig.contactIntro}
              </p>
            </div>

            {(contactInfo.phone || contactInfo.address) && (
              <ul className="mt-8 space-y-4 text-center lg:text-left">
                {contactInfo.phone && (
                  <li>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                      className="inline-flex cursor-pointer items-center gap-3 text-zinc-300 transition-colors duration-200 hover:text-white"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-zinc-500" />
                      <span className="text-sm tracking-wide">
                        {contactInfo.phoneDisplay}
                      </span>
                    </a>
                  </li>
                )}
                {contactInfo.address && (
                  <li>
                    {contactInfo.mapsLink ? (
                      <a
                        href={contactInfo.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex cursor-pointer items-start gap-3 text-zinc-300 transition-colors duration-200 hover:text-white"
                      >
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                        <span className="max-w-xs text-sm leading-relaxed tracking-wide">
                          {contactInfo.address}
                        </span>
                      </a>
                    ) : (
                      <span className="inline-flex items-start gap-3 text-zinc-300">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                        <span className="max-w-xs text-sm leading-relaxed tracking-wide">
                          {contactInfo.address}
                        </span>
                      </span>
                    )}
                  </li>
                )}
              </ul>
            )}

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-4 lg:justify-start">
              {socialLinks.map(({ label, href }) => {
                const Icon = socialIconMap[label];
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
                  {siteConfig.contactThankYou}
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
                    {siteConfig.contactProjectTypes.map(({ value, label }) => (
                      <option key={value} value={value} className="bg-zinc-950">
                        {label}
                      </option>
                    ))}
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
                    placeholder="Tell us about your event or project..."
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

        {contactInfo.mapEmbedUrl && (
          <ScrollReveal delay={0.2} className="mt-16">
            <div className="overflow-hidden border border-zinc-800">
              <iframe
                title={`${siteConfig.brand} studio location`}
                src={contactInfo.mapEmbedUrl}
                className="h-72 w-full grayscale transition-[filter] duration-300 hover:grayscale-0 md:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
