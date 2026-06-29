import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const categories = ["All", "System", "Website"] as const;

const projects = [
  {
    id: "sipekad",
    title: "SIPEKAD STTPU",
    category: "System",
    type: "Academic System",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop",
    desc: "Sistem informasi akademik yang mengurangi beban admin hingga 60%. Integrasi data mahasiswa, dosen, dan nilai dalam satu platform.",
    metric: "60% less admin work",
    tech: ["React", "Node.js", "MySQL"],
    year: "2024",
  },
  {
    id: "sipeg",
    title: "SIPEG Pusdatin",
    category: "System",
    type: "HR Management",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=900&h=600&fit=crop",
    desc: "Sentralisasi data HR untuk 200+ karyawan. Cuti, absensi, dan penilaian kinerja dalam satu dashboard.",
    metric: "200+ employees managed",
    tech: ["Laravel", "PostgreSQL", "Redis"],
    year: "2024",
  },
  {
    id: "sanarea",
    title: "SANARÉA",
    category: "Website",
    type: "E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&h=600&fit=crop",
    desc: "Premium hijab e-commerce. Desain minimalis, checkout flow yang conversion-optimized.",
    metric: "3x conversion rate",
    tech: ["Next.js", "Stripe", "Sanity CMS"],
    year: "2025",
  },
  {
    id: "inventory",
    title: "Inventory STTPU",
    category: "System",
    type: "Asset Tracking",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&h=600&fit=crop",
    desc: "Pelacakan aset real-time. Dashboard interaktif untuk monitoring keluar-masuk barang.",
    metric: "Zero discrepancies",
    tech: ["React", "Express", "MongoDB"],
    year: "2024",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const cardRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-3, 3]);

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="group relative rounded-xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.10] transition-colors"
    >
      {/* Image with hover zoom */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-root)] via-[var(--bg-root)]/20 to-transparent" />

        {/* Metric badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--bg-root)]/70 backdrop-blur-sm border border-white/[0.06]">
          <TrendingUp size={11} className="text-[var(--success)]" />
          <span className="text-[10px] font-semibold text-[var(--success)]">{project.metric}</span>
        </div>

        <span className="absolute top-4 left-4 text-[10px] font-medium text-[var(--text-ghost)] bg-[var(--bg-root)]/50 backdrop-blur-sm px-2 py-0.5 rounded-md">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-2 mb-1.5">
          <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
            {project.title}
          </h3>
          <ArrowUpRight
            size={14}
            className="text-[var(--text-ghost)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>
        <span className="inline-block text-[10px] font-medium text-[var(--accent-bright)] bg-[var(--accent)]/[0.08] px-2 py-0.5 rounded-md mb-3 uppercase tracking-wider">
          {project.type}
        </span>
        <p className="text-[13px] text-[var(--text-muted)] leading-relaxed mb-4">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 text-[10px] font-medium text-[var(--text-ghost)] bg-white/[0.03] border border-white/[0.04] rounded-md uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const filtered =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-ghost)] font-medium mb-3">
              Portofolio
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em]">
              Karya Nyata, Dampak Nyata
            </h2>
          </motion.div>

          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-[12px] font-medium rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-white/[0.08] text-[var(--text-primary)] border border-white/[0.12]"
                    : "bg-transparent text-[var(--text-muted)] border border-white/[0.04] hover:border-white/[0.08] hover:text-[var(--text-secondary)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
