import { AboutSection } from "@/components/AboutSection";
import { AwardsSection } from "@/components/AwardsSection";
import { ContactSection } from "@/components/ContactSection";
import { FeaturedWorkSection } from "@/components/FeaturedWorkSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { MasonryGallery } from "@/components/MasonryGallery";
import { Navbar } from "@/components/Navbar";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedWorkSection />
        <ProjectShowcase />
        <MasonryGallery />
        <AboutSection />
        <TestimonialsSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
