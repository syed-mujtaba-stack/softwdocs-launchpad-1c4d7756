import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
