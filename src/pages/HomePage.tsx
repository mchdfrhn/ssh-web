import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TechMarquee from "../components/TechMarquee";
import ValidationSection from "../components/ValidationSection";
import ClientLogos from "../components/ClientLogos";
import ServicesSection from "../components/ServicesSection";
import IndustryCards from "../components/IndustryCards";
import ProcessSection from "../components/ProcessSection";
import PortfolioSection from "../components/PortfolioSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import BlogSection from "../components/BlogSection";
import ReferralSection from "../components/ReferralSection";
import ConsultationForm from "../components/ConsultationForm";
import Footer from "../components/Footer";

export default function HomePage() {
  const { hash } = useLocation();

  // Scroll to section when navigated with hash (e.g. /#services)
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    // Wait for DOM to render
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TechMarquee />
        <ValidationSection />
        <ClientLogos />
        <ServicesSection />
        <IndustryCards />
        <ProcessSection />
        <PortfolioSection />
        <PricingSection />
        <FAQSection />
        <BlogSection />
        <ReferralSection />
        <ConsultationForm />
      </main>
      <Footer />
    </>
  );
}
