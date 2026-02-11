import { useEffect, useRef } from "react";
import { Zap, Code, Shield, Check, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    icon: Zap,
    name: "Landing Page Package",
    desc: "Website profesional siap pakai dalam 5-7 hari. Pilihan tepat untuk campaign marketing dan personal branding.",
    features: [
      "Custom Design (Figma)",
      "SEO-optimized (Lighthouse 95+)",
      "Mobile-first & Responsif",
      "Free Hosting 1 Tahun",
      "Integrasi WhatsApp/Form",
    ],
    price: "Mulai Rp 300.000",
    popular: false,
  },
  {
    icon: Code,
    name: "Custom Web Application",
    desc: "Sistem kompleks sesuai kebutuhan bisnis Anda. Dari manajemen data, dashboard, hingga integrasi API pihak ketiga.",
    features: [
      "Requirement Analysis mendalam",
      "Scalable Database Architecture",
      "Admin Dashboard + User Portal",
      "Secure Auth & Role Management",
      "API Integration (Payment, Shipping)",
    ],
    price: "Mulai Rp 3.000.000",
    popular: true,
  },
  {
    icon: Shield,
    name: "Maintenance & DevOps",
    desc: "Fokus pada bisnis, biarkan kami menjaga sistem Anda tetap aman, cepat, dan selalu online 24/7.",
    features: [
      "Server Management (VPS/Cloud)",
      "Automated Backups",
      "Security Patching & Updates",
      "Performance Monitoring",
      "Priority Technical Support",
    ],
    price: "Mulai Rp 300.000/bln",
    popular: false,
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".svc-card"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={ref}
      id="services"
      className="section-spacing relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container-section">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.15em] text-primary font-mono mb-3">
            Layanan Kami
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solusi Digital End-to-End
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami tidak sekadar menulis kode. Kami membangun solusi yang
            memecahkan masalah bisnis Anda dengan teknologi tepat guna.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Card
                key={i}
                className={`svc-card flex flex-col h-full hover:shadow-lg transition-all duration-300 border-border bg-card/50 backdrop-blur-sm ${svc.popular ? "border-primary/50 relative" : ""}`}
              >
                {svc.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{svc.name}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {svc.desc}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {svc.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Check
                          size={16}
                          className="text-accent mt-0.5 shrink-0"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-col items-start gap-4 pt-4 border-t border-border/50">
                  <div className="text-lg font-bold text-foreground">
                    {svc.price}
                  </div>
                  <Button
                    variant={svc.popular ? "default" : "outline"}
                    className="w-full gap-2 group"
                    asChild
                  >
                    <a href="#contact">
                      Konsultasi Sekarang{" "}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
