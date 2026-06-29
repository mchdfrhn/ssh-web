import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValidationSection from "@/components/ValidationSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/three/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ValidationSection />
        <ServicesSection />
        <PortfolioSection />
        <PricingSection />
        <ConsultationForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
