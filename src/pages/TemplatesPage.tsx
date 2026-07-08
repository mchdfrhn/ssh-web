import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Clock, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ── SVG mockup helpers ── */
const Bar = ({ x, y, w, h, fill, opacity = 0.3 }: { x: number; y: number; w: number; h: number; fill: string; opacity?: number }) => (
  <rect x={x} y={y} width={w} height={h} rx={h <= 4 ? 1 : h <= 8 ? 2 : 3} fill={fill} opacity={opacity} />
);

function TemplateMockup({ accent, bg, layout }: { accent: string; bg: string; layout: "hero-grid" | "hero-split" | "hero-form" | "hero-features" | "hero-tabs" }) {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-full" aria-hidden="true">
      <rect width="400" height="200" fill={bg} />
      {/* Browser chrome */}
      <rect x="10" y="8" width="380" height="18" rx="4" fill={accent} opacity="0.15" />
      <circle cx="20" cy="17" r="2" fill="#ff6b6b" opacity="0.7" />
      <circle cx="28" cy="17" r="2" fill="#ffd43b" opacity="0.7" />
      <circle cx="36" cy="17" r="2" fill="#69db7c" opacity="0.7" />
      <Bar x={54} y={13} w={120} h={7} fill={accent} opacity={0.12} />

      {layout === "hero-grid" && (
        <>
          {/* Hero */}
          <rect x="10" y="32" width="380" height="60" fill={accent} opacity="0.06" />
          <Bar x={28} y={46} w={140} h={10} fill={accent} opacity={0.5} />
          <Bar x={28} y={62} w={200} h={5} fill="#fff" opacity={0.1} />
          <Bar x={28} y={72} w={160} h={5} fill="#fff" opacity={0.08} />
          <Bar x={28} y={82} w={60} h={12} fill={accent} opacity={0.6} />
          {/* Grid 3col */}
          <rect x="10" y="100" width="120" height="92" rx="4" fill={accent} opacity="0.06" />
          <rect x="138" y="100" width="120" height="92" rx="4" fill={accent} opacity="0.06" />
          <rect x="266" y="100" width="124" height="92" rx="4" fill={accent} opacity="0.06" />
          <Bar x={22} y={140} w={96} h={5} fill={accent} opacity={0.25} />
          <Bar x={22} y={150} w={60} h={4} fill="#fff" opacity={0.08} />
          <Bar x={150} y={140} w={96} h={5} fill={accent} opacity={0.25} />
          <Bar x={150} y={150} w={70} h={4} fill="#fff" opacity={0.08} />
          <Bar x={278} y={140} w={100} h={5} fill={accent} opacity={0.25} />
          <Bar x={278} y={150} w={55} h={4} fill="#fff" opacity={0.08} />
        </>
      )}

      {layout === "hero-split" && (
        <>
          <rect x="10" y="32" width="380" height="70" fill={accent} opacity="0.05" />
          <Bar x={28} y={48} w={160} h={10} fill={accent} opacity={0.5} />
          <Bar x={28} y={64} w={120} h={5} fill="#fff" opacity={0.1} />
          <Bar x={28} y={74} w={180} h={5} fill="#fff" opacity={0.08} />
          <Bar x={28} y={86} w={55} h={10} fill={accent} opacity={0.6} />
          <rect x="240" y="40" width="130" height="54" rx="6" fill={accent} opacity={0.12} />
          {/* Booking form */}
          <rect x="10" y="110" width="180" height="84" rx="4" fill={accent} opacity="0.06" />
          <Bar x={22} y={120} w={100} h={6} fill={accent} opacity={0.35} />
          <Bar x={22} y={134} w={156} h={10} fill="#fff" opacity={0.06} />
          <Bar x={22} y={150} w={156} h={10} fill="#fff" opacity={0.06} />
          <Bar x={22} y={166} w={156} h={10} fill="#fff" opacity={0.06} />
          <Bar x={22} y={182} w={80} h={8} fill={accent} opacity={0.5} />
          {/* Info cards */}
          <rect x="198" y="110" width="192" height="38" rx="4" fill={accent} opacity="0.06" />
          <rect x="198" y="156" width="192" height="38" rx="4" fill={accent} opacity={0.06} />
        </>
      )}

      {layout === "hero-form" && (
        <>
          <rect x="10" y="32" width="380" height="56" fill={accent} opacity="0.06" />
          <Bar x={28} y={44} w={180} h={10} fill={accent} opacity={0.5} />
          <Bar x={28} y={60} w={220} h={5} fill="#fff" opacity={0.1} />
          <Bar x={28} y={72} w={60} h={10} fill={accent} opacity={0.6} />
          {/* Two-column form */}
          <rect x="10" y="96" width="240" height="96" rx="4" fill={accent} opacity="0.06" />
          <Bar x={22} y={106} w={100} h={6} fill={accent} opacity={0.35} />
          <Bar x={22} y={120} w={106} h={10} fill="#fff" opacity={0.06} />
          <Bar x={134} y={120} w={106} h={10} fill="#fff" opacity={0.06} />
          <Bar x={22} y={136} w={218} h={10} fill="#fff" opacity={0.06} />
          <Bar x={22} y={152} w={218} h={20} fill="#fff" opacity={0.04} />
          <Bar x={22} y={178} w={80} h={8} fill={accent} opacity={0.5} />
          {/* Sidebar */}
          <rect x="258" y="96" width="132" height="96" rx="4" fill={accent} opacity={0.06} />
          <Bar x={270} y={110} w={80} h={5} fill={accent} opacity={0.25} />
          <Bar x={270} y={122} w={108} h={4} fill="#fff" opacity={0.08} />
          <Bar x={270} y={132} w={90} h={4} fill="#fff" opacity={0.08} />
          <Bar x={270} y={148} w={80} h={5} fill={accent} opacity={0.25} />
          <Bar x={270} y={160} w={108} h={4} fill="#fff" opacity={0.08} />
        </>
      )}

      {layout === "hero-features" && (
        <>
          <rect x="10" y="32" width="380" height="56" fill={accent} opacity="0.06" />
          <Bar x={28} y={44} w={200} h={10} fill={accent} opacity={0.5} />
          <Bar x={28} y={60} w={160} h={5} fill="#fff" opacity={0.1} />
          <Bar x={28} y={72} w={70} h={10} fill={accent} opacity={0.6} />
          {/* Feature blocks 2x2 */}
          <rect x="10" y="96" width="186" height="44" rx="4" fill={accent} opacity="0.06" />
          <rect x="204" y="96" width="186" height="44" rx="4" fill={accent} opacity="0.06" />
          <rect x="10" y="148" width="186" height="44" rx="4" fill={accent} opacity="0.06" />
          <rect x="204" y="148" width="186" height="44" rx="4" fill={accent} opacity="0.06" />
          <Bar x={24} y={108} w={36} h={18} fill={accent} opacity={0.2} />
          <Bar x={68} y={108} w={80} h={5} fill={accent} opacity={0.25} />
          <Bar x={68} y={118} w={108} h={4} fill="#fff" opacity={0.08} />
          <Bar x={218} y={108} w={36} h={18} fill={accent} opacity={0.2} />
          <Bar x={262} y={108} w={80} h={5} fill={accent} opacity={0.25} />
          <Bar x={262} y={118} w={108} h={4} fill="#fff" opacity={0.08} />
          <Bar x={24} y={160} w={36} h={18} fill={accent} opacity={0.2} />
          <Bar x={68} y={160} w={80} h={5} fill={accent} opacity={0.25} />
          <Bar x={68} y={170} w={108} h={4} fill="#fff" opacity={0.08} />
          <Bar x={218} y={160} w={36} h={18} fill={accent} opacity={0.2} />
          <Bar x={262} y={160} w={80} h={5} fill={accent} opacity={0.25} />
          <Bar x={262} y={170} w={108} h={4} fill="#fff" opacity={0.08} />
        </>
      )}

      {layout === "hero-tabs" && (
        <>
          <rect x="10" y="32" width="380" height="50" fill={accent} opacity="0.06" />
          <Bar x={28} y={44} w={180} h={10} fill={accent} opacity={0.5} />
          <Bar x={28} y={60} w={140} h={5} fill="#fff" opacity={0.1} />
          {/* Tab bar */}
          <rect x="10" y="88" width="380" height="18" fill={accent} opacity="0.04" />
          <Bar x={18} y={90} w={56} h={14} fill={accent} opacity={0.2} />
          <Bar x={80} y={92} w={50} h={10} fill="#fff" opacity={0.05} />
          <Bar x={136} y={92} w={50} h={10} fill="#fff" opacity={0.05} />
          {/* Product grid 2x3 */}
          {[0, 1].map((row) => (
            <g key={row}>
              <rect x="10" y={114 + row * 42} width="120" height="36" rx="4" fill={accent} opacity="0.06" />
              <rect x="138" y={114 + row * 42} width="120" height="36" rx="4" fill={accent} opacity="0.06" />
              <rect x="266" y={114 + row * 42} width="124" height="36" rx="4" fill={accent} opacity="0.06" />
              <Bar x={22} y={124 + row * 42} w={50} h={5} fill={accent} opacity={0.25} />
              <Bar x={22} y={134 + row * 42} w={36} h={4} fill="#fff" opacity={0.08} />
              <Bar x={150} y={124 + row * 42} w={60} h={5} fill={accent} opacity={0.25} />
              <Bar x={150} y={134 + row * 42} w={40} h={4} fill="#fff" opacity={0.08} />
              <Bar x={278} y={124 + row * 42} w={55} h={5} fill={accent} opacity={0.25} />
              <Bar x={278} y={134 + row * 42} w={44} h={4} fill="#fff" opacity={0.08} />
            </g>
          ))}
        </>
      )}
    </svg>
  );
}

const templates = [
  {
    id: "fnb-modern",
    name: "Culinary — Modern",
    category: "F&B",
    desc: "Landing page untuk restoran & kafe. Menu digital, galeri foto, WhatsApp order.",
    features: ["Menu kategori interaktif", "Galeri foto HD", "Tombol WA order", "Google Maps embed"],
    price: "Rp 750rb",
    delivery: "3 hari",
    accent: "#ff6b3a",
    bg: "#1a1210",
    layout: "hero-grid" as const,
    accentColor: "text-orange-400",
  },
  {
    id: "fnb-elegant",
    name: "Culinary — Elegant",
    category: "F&B",
    desc: "Landing page premium untuk fine dining atau restaurant. Booking meja online.",
    features: ["Booking meja", "Menu degustation", "Reservasi event", "Gallery masonry"],
    price: "Rp 1.2jt",
    delivery: "5 hari",
    accent: "#ffa94d",
    bg: "#1a150e",
    layout: "hero-split" as const,
    accentColor: "text-amber-400",
  },
  {
    id: "klinik-professional",
    name: "Medika — Professional",
    category: "Klinik",
    desc: "Website klinik dengan booking dokter, profil tim, dan portal pasien.",
    features: ["Booking dokter", "Profil tim medis", "Jadwal praktek", "FAQ kesehatan"],
    price: "Rp 1jt",
    delivery: "4 hari",
    accent: "#4dabf7",
    bg: "#0e1520",
    layout: "hero-split" as const,
    accentColor: "text-blue-400",
  },
  {
    id: "klinik-modern",
    name: "Medika — Minimalis",
    category: "Klinik",
    desc: "Website klinik gigi / klinik kecantikan. Clean, modern, trust-building.",
    features: ["Before/after gallery", "Treatment list", "Online booking", "WhatsApp konsultasi"],
    price: "Rp 1jt",
    delivery: "4 hari",
    accent: "#38d9a9",
    bg: "#0e1816",
    layout: "hero-features" as const,
    accentColor: "text-teal-400",
  },
  {
    id: "corporate-clean",
    name: "Corp — Clean",
    category: "Corporate",
    desc: "Website perusahaan profesional. Tim, layanan, kontak. Simple & kredibel.",
    features: ["Profil perusahaan", "Tim & management", "Layanan detail", "Contact form"],
    price: "Rp 750rb",
    delivery: "3 hari",
    accent: "#adb5bd",
    bg: "#151517",
    layout: "hero-features" as const,
    accentColor: "text-slate-400",
  },
  {
    id: "corporate-creative",
    name: "Corp — Creative",
    category: "Corporate",
    desc: "Website perusahaan dengan animasi & interaksi. Portfolio showcase, case studies.",
    features: ["Animasi scroll", "Portfolio grid", "Case study pages", "Blog integrasi"],
    price: "Rp 1.5jt",
    delivery: "5 hari",
    accent: "#b197fc",
    bg: "#130e1a",
    layout: "hero-grid" as const,
    accentColor: "text-violet-400",
  },
  {
    id: "edu-institution",
    name: "Edu — Institutional",
    category: "Edukasi",
    desc: "Website sekolah / kampus. Berita, profil, pendaftaran, alumni network.",
    features: ["Berita & pengumuman", "Profil program studi", "Pendaftaran online", "Alumni directory"],
    price: "Rp 1.2jt",
    delivery: "5 hari",
    accent: "#748ffc",
    bg: "#0f1220",
    layout: "hero-tabs" as const,
    accentColor: "text-indigo-400",
  },
  {
    id: "ecommerce-simple",
    name: "Shop — Simple",
    category: "E-Commerce",
    desc: "Toko online sederhana. Katalog produk, cart, checkout via WhatsApp.",
    features: ["Katalog produk", "Cart + checkout", "WhatsApp order", "Kategori & filter"],
    price: "Rp 1.5jt",
    delivery: "5 hari",
    accent: "#f06595",
    bg: "#1a0e14",
    layout: "hero-tabs" as const,
    accentColor: "text-pink-400",
  },
  {
    id: "personal-portfolio",
    name: "Personal — Portfolio",
    category: "Personal",
    desc: "Portfolio profesional untuk freelancer, konsultan, atau creative professional.",
    features: ["Project showcase", "Blog pribadi", "Testimonial", "Contact & booking"],
    price: "Rp 600rb",
    delivery: "2 hari",
    accent: "#51cf66",
    bg: "#0e160e",
    layout: "hero-form" as const,
    accentColor: "text-emerald-400",
  },
  {
    id: "event-landing",
    name: "Event — Landing",
    category: "Event",
    desc: "Landing page untuk event, seminar, atau workshop. Countdown, registrasi, speaker lineup.",
    features: ["Countdown timer", "Registrasi online", "Speaker lineup", "Sponsor logos"],
    price: "Rp 750rb",
    delivery: "3 hari",
    accent: "#e599f7",
    bg: "#180e1a",
    layout: "hero-form" as const,
    accentColor: "text-fuchsia-400",
  },
];

const categories = [...new Set(templates.map((t) => t.category))];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const TemplatesPage = () => (
  <>
    <Navbar />

    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="mesh-gradient" aria-hidden="true" />
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[12px] text-[var(--text-ghost)] hover:text-[var(--text-muted)] transition-colors mb-8"
          >
            <ArrowLeft size={12} />
            Kembali ke Beranda
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-ghost)] font-medium mb-3">
              Template Library
            </p>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.95] tracking-[-0.045em] text-[var(--text-primary)] mb-4">
              10 Template Siap{" "}
              <span className="gradient-text-animated">Deploy</span>
            </h1>
            <p className="max-w-lg text-[15px] text-[var(--text-muted)] leading-relaxed font-light">
              Pilih template sesuai industri Anda. Kami custom sesuai brand,
              isi konten, dan deploy — dalam 2-5 hari kerja.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category tags */}
      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-medium text-[var(--text-muted)] cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Template grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((tpl, i) => (
              <motion.div
                key={tpl.id}
                className="group relative flex flex-col rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.10] transition-all overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={i}
              >
                {/* Website mockup preview */}
                <div className="relative h-36 overflow-hidden">
                  <TemplateMockup accent={tpl.accent} bg={tpl.bg} layout={tpl.layout} />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded-md bg-black/30 backdrop-blur-sm text-[10px] font-medium text-white/70">
                      {tpl.category}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--text-primary)] mb-1.5">
                    {tpl.name}
                  </h3>
                  <p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-4">
                    {tpl.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tpl.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium text-[var(--text-ghost)] bg-white/[0.03] border border-white/[0.04] rounded-md"
                      >
                        <Check size={8} className="text-[var(--accent-bright)]" />
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/[0.04]">
                    <div>
                      <span className="text-[14px] font-semibold text-[var(--text-primary)]">
                        {tpl.price}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-[var(--text-ghost)] mt-0.5">
                        <Clock size={10} />
                        {tpl.delivery}
                      </span>
                    </div>
                    <a
                      href={`https://wa.me/6288971084208?text=Halo%20SSH%2C%20saya%20tertarik%20template%20${encodeURIComponent(tpl.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-8 px-4 text-[11px] font-medium bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.15] text-[var(--accent-bright)] rounded-md hover:bg-[var(--accent)]/[0.15] transition-all"
                    >
                      Pilih
                      <ArrowRight size={11} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold tracking-[-0.03em] mb-4">
              Tidak Menemukan yang Cocok?
            </h2>
            <p className="text-[14px] text-[var(--text-muted)] mb-6">
              Kami bisa buatkan custom design dari nol sesuai kebutuhan bisnis
              Anda.
            </p>
            <a
              href="https://wa.me/6288971084208?text=Halo%20SSH%2C%20saya%20butuh%20custom%20design%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-11 px-7 text-[13px] font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-all shadow-lg shadow-[var(--accent)]/20"
            >
              Request Custom Design
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>

    <Footer />
  </>
);

export default TemplatesPage;
