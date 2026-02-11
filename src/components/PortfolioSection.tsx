import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import sipekadImg from "@/assets/sipekad.jpeg";
import sanareaImg from "@/assets/sanarea.jpeg";
import sipegImg from "@/assets/sipeg.jpeg";
import inventoryImg from "@/assets/inventory.jpeg";

const projects = [
  {
    img: sipekadImg,
    name: "SIPEKAD STTPU",
    type: "Academic System",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    desc: "Sistem informasi akademik yang mengurangi beban admin hingga 60%.",
    impact: "Reduced admin workload by 60%",
  },
  {
    img: sanareaImg,
    name: "SANARÉA",
    type: "E-commerce",
    tech: ["Next.js", "Stripe", "Sanity CMS"],
    desc: "Premium hijab e-commerce dengan conversion rate 3x lipat.",
    impact: "3x conversion rate vs previous site",
  },
  {
    img: sipegImg,
    name: "SIPEG Pusdatin",
    type: "Internal Tool",
    tech: ["React", "Node.js", "MongoDB"],
    desc: "Sentralisasi data HR untuk 200+ karyawan.",
    impact: "Centralized HR data for 200+ staff",
  },
  {
    img: inventoryImg,
    name: "Inventory STTPU",
    type: "Inventory System",
    tech: ["Astro", "Supabase", "TailwindCSS"],
    desc: "Real-time stock tracking tanpa diskrepansi.",
    impact: "Real-time tracking, 0 discrepancies",
  },
];

const PortfolioSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const el = ref.current;
      if (!el) return;
      gsap.from(el.querySelectorAll(".port-card"), {
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
    <section ref={ref} id="portfolio" className="section-spacing bg-muted/30">
      <div className="container-section">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.15em] text-primary font-mono mb-3">Portofolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">Karya Nyata, Dampak Nyata</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <div key={i} className="port-card group rounded-xl border border-border bg-card overflow-hidden hover-lift">
              <div className="overflow-hidden aspect-video">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <Badge variant="secondary" className="text-xs">{p.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-accent font-medium">📈 {p.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
