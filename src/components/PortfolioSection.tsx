import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import sipekadImg from "@/assets/sipekad.jpeg";
import sanareaImg from "@/assets/sanarea.jpeg";
import sipegImg from "@/assets/sipeg.jpeg";
import inventoryImg from "@/assets/inventory.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    id: 1,
    img: sipegImg,
    name: "SIPEG Pusdatin",
    category: "System",
    type: "Employee Management",
    tech: ["React", "Node.js", "MongoDB"],
    desc: "Sentralisasi data HR untuk 200+ karyawan. Fitur mencakup manajemen cuti, absensi, dan penilaian kinerja.",
    impact: "Centralized HR data for 200+ staff",
    link: "https://sipeg-pusdatin.vercel.app/",
  },
  {
    id: 2,
    img: sanareaImg,
    name: "SANARÉA",
    category: "Website",
    type: "E-commerce",
    tech: ["Next.js", "Stripe", "Sanity CMS"],
    desc: "Premium hijab e-commerce dengan conversion rate 3x lipat. Desain minimalis dan performa tinggi.",
    impact: "3x conversion rate vs previous site",
    link: "#",
  },
  {
    id: 3,
    img: inventoryImg,
    name: "Inventory STTPU",
    category: "System",
    type: "Inventory System",
    tech: ["Astro", "Supabase", "TailwindCSS"],
    desc: "Sistem pelacakan aset real-time yang mengeliminasi selisih stok. Dashboard interaktif untuk monitoring keluar-masuk barang.",
    impact: "Real-time tracking, 0 discrepancies",
    link: "https://inventory-fe-production.up.railway.app/dashboard",
  },
  {
    id: 4,
    img: sipekadImg,
    name: "SIPEKAD STTPU",
    category: "System",
    type: "Academic System",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    desc: "Sistem informasi akademik yang mengurangi beban admin hingga 60%. Integrasi data mahasiswa, dosen, dan nilai dalam satu platform terpusat.",
    impact: "Reduced admin workload by 60%",
    link: "https://www.sipekad.web.id/",
  },
];

const PortfolioSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = ["All", "System", "Website"];

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const el = ref.current;
      if (!el) return;

      // Animate title
      gsap.fromTo(
        el.querySelector(".section-title"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: { trigger: el, start: "top 80%" },
        },
      );
    };
    init();
  }, []);

  useEffect(() => {
    const handleFilter = async () => {
      setIsAnimating(true);

      // Wait for exit animation
      await new Promise((r) => setTimeout(r, 300));

      const filtered =
        activeCategory === "All"
          ? projects
          : projects.filter((p) => p.category === activeCategory);
      setFilteredProjects(filtered);
      setIsAnimating(false);

      // Re-trigger entrance animation
      const { gsap } = await import("gsap");
      const el = ref.current;
      if (el) {
        gsap.fromTo(
          el.querySelectorAll(".port-card"),
          { y: 20, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            clearProps: "all",
          },
        );
      }
    };

    handleFilter();
  }, [activeCategory]);

  return (
    <section
      ref={ref}
      id="portfolio"
      className="section-spacing bg-muted/30 min-h-screen"
    >
      <div className="container-section">
        <div className="section-title text-center mb-12">
          <p className="text-sm uppercase tracking-[0.15em] text-primary font-mono mb-3">
            Portofolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Karya Nyata, Dampak Nyata
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className="rounded-full px-6 transition-all duration-300"
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 min-h-[400px]">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className={`port-card group rounded-xl border border-border bg-card overflow-hidden hover-lift flex flex-col transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
            >
              <div className="overflow-hidden aspect-video relative">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    asChild
                    className="rounded-full"
                  >
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <Badge
                    variant="outline"
                    className="text-xs bg-primary/5 border-primary/20 text-primary"
                  >
                    {p.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-grow">
                  {p.desc}
                </p>

                <div className="space-y-4 pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="text-[10px] px-2 h-5"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-2 rounded-lg border border-emerald-100 dark:border-emerald-900/50">
                    <span>📈</span> {p.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
