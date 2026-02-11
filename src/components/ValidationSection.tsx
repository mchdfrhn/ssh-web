import { useEffect, useRef } from "react";
import { X, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const painPoints = [
  "Sistem yang terlalu rumit untuk dioperasikan",
  "Biaya maintenance tidak transparan",
  "Developer sulit dihubungi setelah project selesai",
];

const solutions = [
  "SSH Dashboard Admin: Intuitif, Bahasa Indonesia, Training Gratis",
  "Paket All-In (Domain, Hosting, Update) Mulai 1 Juta/Tahun",
  "Support Response < 24 Jam via WhatsApp",
];

const ValidationSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const el = ref.current;
      if (!el) return;
      gsap.from(el.querySelectorAll(".reveal"), {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
    };
    init();
  }, []);

  return (
    <section ref={ref} className="section-spacing">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Pain points */}
          <div>
            <p className="reveal text-sm uppercase tracking-[0.15em] text-primary font-mono mb-3">Riset Kami Bicara</p>
            <h2 className="reveal text-3xl md:text-4xl font-bold mb-8">
              20+ Pemilik Bisnis Mengalami Hal Ini:
            </h2>
            <div className="space-y-4">
              {painPoints.map((p, i) => (
                <div key={i} className="reveal flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                  <X size={20} className="text-destructive mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <Card className="reveal border-accent/30 bg-card">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6 text-accent">Solusi SSH</h3>
              <div className="space-y-4">
                {solutions.map((s, i) => (
                  <div key={i} className="reveal flex items-start gap-3">
                    <Check size={20} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{s}</span>
                  </div>
                ))}
              </div>

              {/* Simple comparison bar */}
              <div className="mt-8 space-y-3">
                <p className="text-sm text-muted-foreground font-medium">Kompleksitas Sistem</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Kompetitor</p>
                    <div className="h-3 rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-[85%] bg-destructive/60 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">SSH</p>
                    <div className="h-3 rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-[25%] bg-accent rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValidationSection;
