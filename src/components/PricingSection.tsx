import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "One-Time Payment",
    desc: "Bayar sekali, miliki selamanya",
    features: ["Full website ownership", "Source code handover", "30 hari free support", "Cocok untuk startup dengan tim IT"],
    best: "Startups with in-house IT",
    highlight: false,
  },
  {
    name: "Maintenance Contract",
    desc: "Kontrak tahunan, tenang sepanjang tahun",
    features: ["Annual technical support", "Quarterly feature updates", "Hosting + SSL included", "Cocok untuk bisnis berkembang"],
    best: "Growing businesses",
    highlight: true,
  },
  {
    name: "Subscription Model",
    desc: "Bayar bulanan, fleksibel kapan saja",
    features: ["Pay-as-you-go", "Unlimited revision requests", "Managed hosting & backups", "Cancel anytime"],
    best: "Budget-conscious orgs",
    highlight: false,
  },
];

const PricingSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const el = ref.current;
      if (!el) return;
      gsap.from(el.querySelectorAll(".price-card"), {
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
    <section ref={ref} id="pricing" className="section-spacing">
      <div className="container-section">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.15em] text-primary font-mono mb-3">Harga</p>
          <h2 className="text-3xl md:text-4xl font-bold">Model Pembayaran Fleksibel</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`price-card hover-lift bg-card ${
                plan.highlight ? "border-primary glow ring-1 ring-primary/30" : "border-border"
              } relative`}
            >
              {plan.highlight && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  REKOMENDASI
                </Badge>
              )}
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="text-accent mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.highlight ? "default" : "outline"}
                  asChild
                >
                  <a href="#contact">Mulai Sekarang</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
