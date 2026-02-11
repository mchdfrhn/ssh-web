import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getEnv } from "@/lib/utils";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let gsapModule: any;
    async function init() {
      const { gsap } = await import("gsap");
      gsapModule = gsap;
      const el = sectionRef.current;
      if (!el) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(el.querySelector(".hero-eyebrow"), {
        y: 30,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          el.querySelector(".hero-headline"),
          { y: 40, opacity: 0, duration: 0.7 },
          "-=0.3"
        )
        .from(
          el.querySelector(".hero-sub"),
          { y: 30, opacity: 0, duration: 0.6 },
          "-=0.3"
        )
        .from(
          el.querySelector(".hero-ctas"),
          { y: 20, opacity: 0, duration: 0.5 },
          "-=0.2"
        )
        .from(
          el.querySelector(".hero-trust"),
          { y: 20, opacity: 0, duration: 0.5 },
          "-=0.1"
        );
    }
    init();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse_glow" />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse_glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-20 right-1/4 w-16 h-16 border border-primary/20 rounded-xl animate-spin-slow" />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 border border-accent/20 rounded-full animate-float" />
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-primary/5 rounded-lg animate-float-slow" />
      </div>

      <div className="container-section text-center relative z-10 pt-20">
        <p className="hero-eyebrow text-sm uppercase tracking-[0.2em] text-primary font-mono font-medium mb-6">
          Spesialis Framework Modern: Astro · Next.js · Laravel
        </p>

        <h1 className="hero-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
          Digitalisasi Bisnis Anda{" "}
          <span className="text-gradient">Lebih Cepat & Terjangkau</span>
        </h1>

        <p className="hero-sub text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Solusi Website & Web App untuk UMKM dan Organisasi — Tanpa
          Kompleksitas, Tanpa Biaya Tersembunyi
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="gap-2 text-base px-8" asChild>
            <a href="#portfolio">
              Lihat Portofolio <ArrowRight size={18} />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 text-base px-8 border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a
              href={`https://wa.me/${getEnv("VITE_CONTACT_WHATSAPP_NUMBER", "6281234567890")}?text=Halo%20${getEnv("VITE_APP_NAME", "SSH")}%2C%20saya%20ingin%20konsultasi%20gratis`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> Konsultasi Gratis
            </a>
          </Button>
        </div>

        <div className="hero-trust flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Dipercaya 20+ Klien
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            99% Kepuasan
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-highlight" />
            Hosting Terkelola
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
