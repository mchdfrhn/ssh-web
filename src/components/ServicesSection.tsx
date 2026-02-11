import { useEffect, useRef } from "react";
import { Zap, Code, Shield, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Zap,
    name: "Landing Page (Paket Kilat)",
    desc: "Website profesional siap pakai dalam hitungan hari. Dioptimasi untuk konversi dan performa maksimal.",
    features: ["Selesai 5-7 hari kerja", "SEO-optimized (Lighthouse 95+)", "Mobile-first design", "Free SSL & CDN"],
    price: "Rp 3 Juta",
  },
  {
    icon: Code,
    name: "Web Application (Custom)",
    desc: "Solusi digital tailor-made sesuai kebutuhan bisnis Anda. Dari database hingga deployment.",
    features: ["Database design & architecture", "Admin dashboard + user portal", "API integration (payment, shipping)", "Scalable cloud deployment"],
    price: "Rp 15 Juta",
  },
  {
    icon: Shield,
    name: "Maintenance & Cloud",
    desc: "Jaga sistem Anda tetap aman, cepat, dan selalu online. Kami yang urus semuanya.",
    features: ["Hosting + domain terkelola", "Monthly security updates", "Backup harian otomatis", "Technical support priority"],
    price: "Rp 1 Juta/bulan",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const el = ref.current;
      if (!el) return;
      gsap.from(el.querySelectorAll(".svc-card"), {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
    };
    init();
  }, []);

  return (
    <section ref={ref} id="services" className="section-spacing">
      <div className="container-section">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.15em] text-primary font-mono mb-3">Layanan Kami</p>
          <h2 className="text-3xl md:text-4xl font-bold">Solusi untuk Setiap Kebutuhan</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Card key={i} className="svc-card hover-lift bg-card border-border group cursor-default">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{svc.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-accent shrink-0" />
                        <span className="text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-primary font-bold text-lg">Mulai dari {svc.price}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
