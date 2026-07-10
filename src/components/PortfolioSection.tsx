import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, TrendingUp, Monitor } from "lucide-react";

/* ── Data ── */

type Project = (typeof projects)[number];

const projects = [
  {
    id: "dashboard-kepegawaian",
    title: "Dashboard Kepegawaian PUSDATIN",
    category: "System",
    type: "HR & Career Management",
    image: "/portfolio/dashboard-kepegawaian/cover.jpeg",
    fallbackImage: "/portfolio/dashboard-kepegawaian/cover.jpeg",
    desc: "Dashboard terpusat yang menggantikan Excel manual — memantau 140+ pegawai real-time, riwayat diklat EHRM, masa kerja & grade tukin dalam satu layar. Laporan instan, bukan berhari-hari.",
    metric: "140+ pegawai terkelola",
    tech: ["React", "Laravel", "PostgreSQL"],
    year: "2025",
    gallery: [
      { src: "/portfolio/dashboard-kepegawaian/cover.jpeg", fallback: "/portfolio/dashboard-kepegawaian/cover.jpeg", caption: "Dashboard Overview — statistik status pegawai, donut chart, bar chart pendidikan" },
      { src: "/portfolio/dashboard-kepegawaian/login.jpeg", fallback: "/portfolio/dashboard-kepegawaian/login.jpeg", caption: "Login Page — split panel dengan mascot & statistik sistem" },
      { src: "/portfolio/dashboard-kepegawaian/detail-pegawai.jpeg", fallback: "/portfolio/dashboard-kepegawaian/detail-pegawai.jpeg", caption: "Detail Pegawai — riwayat diklat, sertifikasi EHRM, masa kerja" },
    ],
  },
  {
    id: "sipekad",
    title: "SIPEKAD — Sistem Pengajuan Akademik",
    category: "System",
    type: "Academic Workflow System",
    image: "/portfolio/sipekad/cover.jpeg",
    fallbackImage: "/portfolio/sipekad/cover.jpeg",
    desc: "Sistem pengajuan akademik digital yang memproses 227+ surat — dari antrean kertas jadi dashboard terpusat. Admin review sekali klik, status langsung terkirim via WhatsApp ke mahasiswa.",
    metric: "227 pengajuan diproses",
    tech: ["React", "Node.js", "WhatsApp API"],
    year: "2025",
    gallery: [
      { src: "/portfolio/sipekad/cover.jpeg", fallback: "/portfolio/sipekad/cover.jpeg", caption: "Admin Dashboard — KPI cards, grafik distribusi 30 hari, status pengajuan" },
      { src: "/portfolio/sipekad/detail-pengajuan.jpeg", fallback: "/portfolio/sipekad/detail-pengajuan.jpeg", caption: "Detail Pengajuan — info pemohon, approval workflow, riwayat aktivitas" },
      { src: "/portfolio/sipekad/whatsapp-bot.jpeg", fallback: "/portfolio/sipekad/whatsapp-bot.jpeg", caption: "WhatsApp Bot Manager — QR pairing, test message, riwayat pesan" },
    ],
  },
  {
    id: "sttpu-website",
    title: "Website Resmi STTPU",
    category: "Website",
    type: "Institutional Website",
    image: "/portfolio/sttpu-website/cover.jpeg",
    fallbackImage: "/portfolio/sttpu-website/cover.jpeg",
    desc: "Website institusi modern dengan carousel berita, filter kategori, dan profil 3 program studi — pengalaman browsing profesional yang mencerminkan kualitas kampus kepada calon mahasiswa.",
    metric: "3 program studi",
    tech: ["Next.js", "Tailwind CSS", "CMS"],
    year: "2026",
    gallery: [
      { src: "/portfolio/sttpu-website/cover.jpeg", fallback: "/portfolio/sttpu-website/cover.jpeg", caption: "Hero Section — carousel berita beasiswa, gradient overlay, statistik" },
      { src: "/portfolio/sttpu-website/berita.jpeg", fallback: "/portfolio/sttpu-website/berita.jpeg", caption: "Halaman Berita — filter kategori, grid cards 6 berita" },
      { src: "/portfolio/sttpu-website/program-studi.jpeg", fallback: "/portfolio/sttpu-website/program-studi.jpeg", caption: "Program Studi Unggulan — Teknik Sipil, Lingkungan, Informatika" },
    ],
  },
  {
    id: "huora-beauty",
    title: "Huora Beauty × Twenty Eight",
    category: "Website",
    type: "Premium Clinic & Beauty",
    image: "/portfolio/huora-beauty/cover.png",
    fallbackImage: "/portfolio/huora-beauty/cover.png",
    desc: "Landing page klinik kecantikan premium dengan desain elegan, animasi fluid, dan alur booking WhatsApp yang mulus — mengubah pengunjung menjadi pelanggan setia.",
    metric: "Premium Brand Image",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    year: "2026",
    link: "https://ssh-client-huora-beauty.vercel.app/",
  },
];

/* ── Gallery Modal ── */

function GalleryModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const items = project.gallery;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIdx((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setIdx((i) => Math.min(items.length - 1, i + 1));
    };
    document.body.style.overflow = "hidden";
    // Restore native cursor inside gallery (custom cursor hides it)
    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "auto";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.body.style.cursor = prevCursor;
      window.removeEventListener("keydown", onKey);
    };
  }, [items.length, onClose]);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(items.length - 1, i + 1));

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col bg-[var(--bg-root)]/95 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 shrink-0">
        <div>
          <h3 className="text-[15px] font-semibold text-[var(--text-primary)]">
            {project.title}
          </h3>
          <p className="text-[12px] text-[var(--text-muted)]">
            {idx + 1} / {items.length}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--border-default)] border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-strong)] transition-all"
        >
          <X size={16} />
        </button>
      </div>

      {/* Image */}
      <div
        className="flex-1 flex items-center justify-center px-4 md:px-16 pb-2 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            className="relative flex items-center justify-center w-full h-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
          >
            <img
              src={items[idx].src}
              alt={items[idx].caption}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                const img = e.currentTarget;
                if (img.dataset.retried) return;
                if (items[idx].fallback && img.src !== items[idx].fallback) {
                  img.dataset.retried = "1";
                  img.src = items[idx].fallback;
                }
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        {idx > 0 && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 md:left-6 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--border-default)] border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-strong)] transition-all"
          >
            <ChevronLeft size={18} />
          </button>
        )}
        {idx < items.length - 1 && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--border-default)] border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-strong)] transition-all"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>

      {/* Caption + Thumbnails */}
      <div className="shrink-0 px-6 pb-5 pt-2" onClick={(e) => e.stopPropagation()}>
        <p className="text-center text-[13px] text-[var(--text-muted)] mb-3">
          {items[idx].caption}
        </p>
        <div className="flex justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              className={`w-16 h-10 rounded-md overflow-hidden border transition-all ${
                i === idx
                  ? "border-[var(--accent)] ring-1 ring-[var(--accent)]/30"
                  : "border-[var(--border-default)] opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.dataset.retried) return;
                  if (item.fallback && img.src !== item.fallback) {
                    img.dataset.retried = "1";
                    img.src = item.fallback;
                  }
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Project Card ── */

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const handleClick = () => {
    if (!project.gallery && project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    } else {
      onOpen();
    }
  };

  return (
    <motion.article
      onClick={handleClick}
      className="group relative rounded-xl overflow-hidden glass-card cursor-pointer flex flex-col h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative h-56 md:h-64 overflow-hidden shrink-0">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.dataset.retried) return;
            if (project.fallbackImage && img.src !== project.fallbackImage) {
              img.dataset.retried = "1";
              img.src = project.fallbackImage;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-root)] via-[var(--bg-root)]/20 to-transparent" />

        {/* Metric badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--bg-root)]/70 backdrop-blur-sm border border-[var(--border-default)]">
          <TrendingUp size={11} className="text-[var(--success)]" />
          <span className="text-[10px] font-semibold text-[var(--success)]">
            {project.metric}
          </span>
        </div>

        <span className="absolute top-4 left-4 text-[10px] font-medium text-[var(--text-ghost)] bg-[var(--bg-root)]/50 backdrop-blur-sm px-2 py-0.5 rounded-md">
          {project.year}
        </span>

        {project.gallery && project.gallery.length > 0 ? (
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-root)]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--border-strong)] backdrop-blur-sm border border-[var(--border-strong)]">
              <Monitor size={14} className="text-[var(--text-primary)]" />
              <span className="text-[12px] font-medium text-[var(--text-primary)]">
                Lihat Galeri
              </span>
            </div>
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[var(--text-primary)] mb-1.5">
          {project.title}
        </h3>
        <div>
          <span className="inline-block text-[10px] font-medium text-[var(--accent-bright)] bg-[var(--accent)]/[0.08] px-2 py-0.5 rounded-md mb-3 uppercase tracking-wider">
            {project.type}
          </span>
        </div>
        <p className="text-[13px] text-[var(--text-muted)] leading-relaxed mb-6">
          {project.desc}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-medium text-[var(--text-ghost)] bg-[var(--border-subtle)] border border-[var(--border-subtle)] rounded-md uppercase tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Section ── */

const categories = ["All", "System", "Website"] as const;

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
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
                      ? "bg-[var(--border-default)] text-[var(--text-primary)] border border-[var(--border-strong)]"
                      : "bg-transparent text-[var(--text-muted)] border border-[var(--border-subtle)] hover:border-[var(--border-default)] hover:text-[var(--text-secondary)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 items-stretch">
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
                  <ProjectCard
                    project={project}
                    onOpen={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <GalleryModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSection;
