import PortfolioSection from "@/components/PortfolioSection";
import TechMarquee from "@/components/TechMarquee";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Portfolio = () => {
  return (
    <>
      <div className="pt-24 pb-12 text-center container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">Our Portfolio</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Explore our collection of high-fidelity digital products, enterprise systems, and AI integrations.
        </p>
      </div>
      <PortfolioSection />
      <TechMarquee />
      <ServicesSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Portfolio;
