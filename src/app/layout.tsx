import { JsonLd } from "@/components/JsonLd";
import { ogImage, siteConfig } from "@/lib/data";
import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteTitle = `${siteConfig.name} — ${siteConfig.brand}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteConfig.brand}`,
  },
  description:
    "ShutterStories Photography by Vn Llyd — wedding, travel, portrait, and editorial imagery that captures light, emotion, and timeless moments.",
  keywords: [
    "ShutterStories Photography",
    "Vn Llyd photographer",
    "wedding photographer",
    "travel photographer",
    "portrait photographer",
    "Philippines photographer",
    "fine art photography",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.brand,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.brand,
    title: siteTitle,
    description:
      "Cinematic photography portfolio by Vn Llyd — portraits, weddings, travel, and editorial work.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.brand,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "Cinematic photography portfolio by Vn Llyd — portraits, weddings, travel, and editorial work.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden bg-zinc-50 text-zinc-950 antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
