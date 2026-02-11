import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getEnv } from "@/lib/utils";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Register plugin inside context if needed, or globally outside
      // But standard is global registry. We'll assume registry is fine or do strictly what's needed.

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial state - scoped automatically by gsap.context to sectionRef
      gsap.set(".hero-char", { y: 100, opacity: 0 });
      gsap.set(".hero-gradient-text", { y: 50, opacity: 0 });
      gsap.set(".hero-element", { y: 30, opacity: 0 });

      tl.to(".hero-char", {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
        .to(
          ".hero-gradient-text",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .to(
          ".hero-element",
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
          },
          "-=0.4",
        )
        .fromTo(
          ".hero-glow",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "sine.inOut" },
          "-=1",
        );
    }, sectionRef); // Scope to sectionRef

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-glow absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" />
        <div className="hero-glow absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen animate-float-slow" />

        {/* Floating Glass Elements */}
        <div className="absolute top-32 left-[10%] glass p-4 rounded-2xl animate-float hidden lg:block border-primary/20 rotate-[-6deg]">
          <span className="text-4xl">🚀</span>
        </div>
        <div className="absolute bottom-32 right-[10%] glass p-4 rounded-2xl animate-float-slow hidden lg:block border-accent/20 rotate-[12deg]">
          <span className="text-4xl">💻</span>
        </div>
      </div>

      <div className="container-section text-center relative z-10 px-4">
        <div className="hero-element inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-primary/30">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-primary">
            OPEN FOR NEW PROJECTS
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-8"
        >
          <div className="overflow-hidden mb-2">
            {"Digitalisasi Bisnis Anda".split("").map((char, i) => (
              <span key={i} className="hero-char inline-block origin-bottom">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <div className="overflow-hidden pb-2">
            <span className="text-gradient inline-block hero-gradient-text">
              Lebih Cepat & Terjangkau
            </span>
          </div>
        </h1>

        <p className="hero-element text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformasi digital tanpa kompromi. Kami membangun web app & website
          high-performance dengan teknologi modern untuk pertumbuhan bisnis
          Anda.
        </p>

        <div className="hero-element flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="h-14 px-8 rounded-full text-base gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="#portfolio">
              Lihat Portofolio <ArrowRight size={18} />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 rounded-full text-base gap-2 bg-transparent border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
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

        {/* Tech Stack Marquee (Static for now but styled) */}
        <div className="hero-element glass-card rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
          <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">
            Powered by Modern Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind",
              "Supabase",
              "Astro",
            ].map((tech) => (
              <span
                key={tech}
                className="text-sm font-semibold text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
