import { useEffect, useRef } from "react";
import { Check, HelpCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const plans = [
  {
    name: "Project Based",
    subtitle: "Sekali Bayar",
    desc: "Cocok untuk website profil, landing page, atau sistem yang kebutuhan fiturnya sudah jelas (fixed scope).",
    price: "Custom",
    features: [
      { name: "Hak Milik Penuh (Source Code)", included: true },
      { name: "Gratis Domain & Hosting 1 Thn", included: true },
      { name: "Garansi Bug Fixing 30 Hari", included: true },
      { name: "Dokumentasi Lengkap", included: true },
      { name: "Prioritas Support", included: false },
      { name: "Update Fitur Berkala", included: false },
    ],
    highlight: false,
    cta: "Diskusikan Project",
  },
  {
    name: "Dedicated Team",
    subtitle: "Bulanan / Retainer",
    desc: "Solusi terbaik untuk startup atau perusahaan yang butuh tim IT jangka panjang tanpa repot rekrutmen.",
    price: "Mulai Rp 5 Juta",
    period: "/bulan",
    features: [
      { name: "Dedicated Developer (Full/Part time)", included: true },
      { name: "Project Manager Included", included: true },
      { name: "Laporan Progress Mingguan", included: true },
      {
        name: "Unlimited Feature Requests",
        included: true,
        info: "Sesuai kapasitas jam kerja",
      },
      { name: "Server & Infrastructure Setup", included: true },
      { name: "Cancel Anytime", included: true },
    ],
    highlight: true,
    cta: "Hire Team Kami",
  },
  {
    name: "Maintenance",
    subtitle: "Support & Care",
    desc: "Kami menjaga website/aplikasi Anda tetap aman, cepat, dan up-to-date sehingga Anda bisa fokus jualan.",
    price: "Mulai Rp 750 Ribu",
    period: "/bulan",
    features: [
      { name: "Monitoring Uptime 24/7", included: true },
      { name: "Backup Harian Otomatis", included: true },
      { name: "Update Security Patch", included: true },
      {
        name: "Minor Content Update",
        included: true,
        info: "Maksimal 3 request/bulan",
      },
      { name: "Monthly Performance Report", included: true },
      { name: "Technical Consultation", included: true },
    ],
    highlight: false,
    cta: "Amankan Website",
  },
];

const PricingSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".price-card"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section ref={ref} id="pricing" className="section-spacing bg-muted/30">
      <div className="container-section">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.15em] text-primary font-mono mb-3">
            Investment
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Harga Transparan, Hasil Maksimal
          </h2>
          <p className="text-muted-foreground">
            Pilih model kerjasama yang paling sesuai dengan fase bisnis Anda
            saat ini.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`price-card flex flex-col h-full glass-card transition-all duration-300 ${
                plan.highlight
                  ? "border-primary shadow-2xl shadow-primary/10 scale-105 z-10 ring-1 ring-primary/20 bg-card/40"
                  : "border-border/50 hover:-translate-y-1"
              }`}
            >
              {plan.highlight && (
                <div className="bg-primary text-primary-foreground text-center py-1.5 text-xs font-bold uppercase tracking-wider">
                  Most Popular Choice
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="mb-2">
                  <Badge
                    variant={plan.highlight ? "default" : "secondary"}
                    className="mb-2"
                  >
                    {plan.subtitle}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-2 min-h-[60px]">
                  {plan.desc}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4 flex-grow">
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm font-normal">
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li
                      key={j}
                      className={`flex items-start gap-3 text-sm ${f.included ? "text-foreground" : "text-muted-foreground/50"}`}
                    >
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${f.included ? "text-accent" : "text-muted-foreground/30"}`}
                      />
                      <span className="flex-grow flex items-center justify-between gap-2">
                        {f.name}
                        {f.info && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle
                                  size={14}
                                  className="text-muted-foreground/70 hover:text-foreground transition-colors"
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-[200px] text-xs">{f.info}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4">
                <Button
                  className="w-full"
                  size="lg"
                  variant={plan.highlight ? "default" : "outline"}
                  asChild
                >
                  <a href="#contact">{plan.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Butuh penawaran khusus atau custom enterprise solution?{" "}
            <a
              href="#contact"
              className="text-primary hover:underline font-medium"
            >
              Hubungi kami
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
