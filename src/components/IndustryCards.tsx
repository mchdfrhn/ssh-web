import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scrollTo } from "../utils/scroll-utils";

/* ── Inline SVG mini-website mockups per industry ── */
function FnBMockup() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Background */}
      <rect width="400" height="200" fill="#1a1210" />
      {/* Browser bar */}
      <rect x="12" y="10" width="376" height="20" rx="4" fill="#2a2018" />
      <circle cx="22" cy="20" r="2.5" fill="#ff6b4a" />
      <circle cx="32" cy="20" r="2.5" fill="#ffa94d" />
      <circle cx="42" cy="20" r="2.5" fill="#69db7c" />
      <rect x="60" y="16" width="140" height="8" rx="2" fill="#3a2e22" />
      {/* Hero area */}
      <rect x="12" y="36" width="376" height="70" fill="#2a1f16" />
      <rect x="30" y="48" width="120" height="10" rx="2" fill="#ff8c42" opacity="0.6" />
      <rect x="30" y="64" width="180" height="6" rx="2" fill="#fff" opacity="0.15" />
      <rect x="30" y="76" width="140" height="6" rx="2" fill="#fff" opacity="0.1" />
      <rect x="30" y="90" width="70" height="16" rx="4" fill="#ff6b3a" opacity="0.7" />
      {/* Food image placeholder */}
      <rect x="260" y="44" width="110" height="56" rx="6" fill="#3d2a1a" />
      <circle cx="315" cy="68" r="16" fill="#ff8c42" opacity="0.3" />
      <circle cx="315" cy="68" r="8" fill="#ff6b3a" opacity="0.5" />
      {/* Menu grid */}
      <rect x="12" y="114" width="120" height="80" rx="6" fill="#241a12" />
      <rect x="140" y="114" width="120" height="80" rx="6" fill="#241a12" />
      <rect x="268" y="114" width="120" height="80" rx="6" fill="#241a12" />
      <rect x="24" y="148" width="96" height="6" rx="2" fill="#ff8c42" opacity="0.3" />
      <rect x="24" y="160" width="60" height="5" rx="2" fill="#fff" opacity="0.1" />
      <rect x="24" y="170" width="40" height="8" rx="2" fill="#ff6b3a" opacity="0.4" />
      <rect x="152" y="148" width="96" height="6" rx="2" fill="#ff8c42" opacity="0.3" />
      <rect x="152" y="160" width="70" height="5" rx="2" fill="#fff" opacity="0.1" />
      <rect x="152" y="170" width="45" height="8" rx="2" fill="#ff6b3a" opacity="0.4" />
      <rect x="280" y="148" width="96" height="6" rx="2" fill="#ff8c42" opacity="0.3" />
      <rect x="280" y="160" width="55" height="5" rx="2" fill="#fff" opacity="0.1" />
      <rect x="280" y="170" width="38" height="8" rx="2" fill="#ff6b3a" opacity="0.4" />
    </svg>
  );
}

function KlinikMockup() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-full" aria-hidden="true">
      <rect width="400" height="200" fill="#0e1520" />
      <rect x="12" y="10" width="376" height="20" rx="4" fill="#162030" />
      <circle cx="22" cy="20" r="2.5" fill="#4dabf7" />
      <circle cx="32" cy="20" r="2.5" fill="#69db7c" />
      <circle cx="42" cy="20" r="2.5" fill="#ffd43b" />
      <rect x="60" y="16" width="140" height="8" rx="2" fill="#1e3050" />
      {/* Hero with medical cross */}
      <rect x="12" y="36" width="376" height="66" fill="#132035" />
      <rect x="30" y="50" width="140" height="10" rx="2" fill="#4dabf7" opacity="0.6" />
      <rect x="30" y="66" width="200" height="6" rx="2" fill="#fff" opacity="0.15" />
      <rect x="30" y="78" width="100" height="6" rx="2" fill="#fff" opacity="0.1" />
      <rect x="30" y="88" width="80" height="14" rx="4" fill="#339af0" opacity="0.7" />
      {/* Doctor profile cards */}
      <rect x="260" y="44" width="112" height="50" rx="6" fill="#1a2d45" />
      <circle cx="290" cy="60" r="10" fill="#4dabf7" opacity="0.3" />
      <rect x="306" y="54" width="54" height="5" rx="2" fill="#fff" opacity="0.2" />
      <rect x="306" y="63" width="40" height="4" rx="2" fill="#4dabf7" opacity="0.3" />
      {/* Booking + stats row */}
      <rect x="12" y="110" width="185" height="84" rx="6" fill="#162238" />
      <rect x="205" y="110" width="183" height="84" rx="6" fill="#162238" />
      {/* Calendar slots */}
      <rect x="24" y="124" width="50" height="18" rx="3" fill="#1e3a5a" />
      <rect x="80" y="124" width="50" height="18" rx="3" fill="#1e3a5a" />
      <rect x="136" y="124" width="50" height="18" rx="3" fill="#339af0" opacity="0.4" />
      <rect x="24" y="148" width="160" height="6" rx="2" fill="#4dabf7" opacity="0.3" />
      <rect x="24" y="160" width="120" height="5" rx="2" fill="#fff" opacity="0.1" />
      <rect x="24" y="174" width="60" height="12" rx="3" fill="#339af0" opacity="0.5" />
      {/* Stats */}
      <rect x="217" y="124" width="30" height="16" rx="2" fill="#4dabf7" opacity="0.2" />
      <rect x="253" y="124" width="30" height="16" rx="2" fill="#69db7c" opacity="0.2" />
      <rect x="289" y="124" width="30" height="16" rx="2" fill="#ffd43b" opacity="0.2" />
      <rect x="325" y="124" width="30" height="16" rx="2" fill="#ff6b6b" opacity="0.2" />
      <rect x="217" y="148" width="154" height="6" rx="2" fill="#fff" opacity="0.1" />
      <rect x="217" y="160" width="120" height="5" rx="2" fill="#fff" opacity="0.08" />
      <rect x="217" y="174" width="60" height="12" rx="3" fill="#339af0" opacity="0.5" />
    </svg>
  );
}

function DistributorMockup() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-full" aria-hidden="true">
      <rect width="400" height="200" fill="#130e1a" />
      <rect x="12" y="10" width="376" height="20" rx="4" fill="#1e1628" />
      <circle cx="22" cy="20" r="2.5" fill="#b197fc" />
      <circle cx="32" cy="20" r="2.5" fill="#69db7c" />
      <circle cx="42" cy="20" r="2.5" fill="#ffd43b" />
      <rect x="60" y="16" width="140" height="8" rx="2" fill="#2a2040" />
      {/* Dashboard header */}
      <rect x="12" y="36" width="376" height="28" fill="#1a1328" />
      <rect x="24" y="44" width="80" height="8" rx="2" fill="#b197fc" opacity="0.5" />
      <rect x="300" y="42" width="72" height="12" rx="3" fill="#7048d8" opacity="0.4" />
      {/* Product catalog table */}
      <rect x="12" y="72" width="244" height="122" rx="6" fill="#1a1328" />
      {/* Table header */}
      <rect x="20" y="78" width="228" height="14" rx="2" fill="#241a38" />
      <rect x="24" y="81" width="50" height="6" rx="1" fill="#b197fc" opacity="0.3" />
      <rect x="84" y="81" width="40" height="6" rx="1" fill="#b197fc" opacity="0.3" />
      <rect x="134" y="81" width="30" height="6" rx="1" fill="#b197fc" opacity="0.3" />
      <rect x="174" y="81" width="50" height="6" rx="1" fill="#b197fc" opacity="0.3" />
      {/* Table rows */}
      {[0, 1, 2, 3].map((row) => (
        <g key={row}>
          <rect x="20" y={98 + row * 22} width="228" height="16" rx="2" fill="#201630" opacity="0.5" />
          <rect x="24" y={101 + row * 22} width="50" height="5" rx="1" fill="#fff" opacity="0.15" />
          <rect x="84" y={101 + row * 22} width="40" height="5" rx="1" fill="#fff" opacity="0.1" />
          <rect x="134" y={101 + row * 22} width="30" height="5" rx="1" fill="#69db7c" opacity="0.3" />
          <rect x="174" y={101 + row * 22} width="50" height="5" rx="1" fill="#fff" opacity="0.1" />
        </g>
      ))}
      {/* Order tracking panel */}
      <rect x="264" y="72" width="124" height="122" rx="6" fill="#1a1328" />
      <rect x="276" y="82" width="80" height="7" rx="2" fill="#b197fc" opacity="0.4" />
      {/* Progress steps */}
      <circle cx="284" cy="102" r="5" fill="#7048d8" opacity="0.6" />
      <rect x="294" y="99" width="60" height="5" rx="2" fill="#fff" opacity="0.15" />
      <rect x="282" y="107" width="2" height="14" fill="#7048d8" opacity="0.3" />
      <circle cx="284" cy="128" r="5" fill="#7048d8" opacity="0.6" />
      <rect x="294" y="125" width="55" height="5" rx="2" fill="#fff" opacity="0.15" />
      <rect x="282" y="133" width="2" height="14" fill="#7048d8" opacity="0.3" />
      <circle cx="284" cy="154" r="5" fill="#b197fc" opacity="0.3" />
      <rect x="294" y="151" width="60" height="5" rx="2" fill="#fff" opacity="0.1" />
      <rect x="276" y="170" width="80" height="14" rx="4" fill="#7048d8" opacity="0.5" />
    </svg>
  );
}

const industries = [
  {
    name: "F&B & Kuliner",
    desc: "Menu digital, WhatsApp order, Google Maps SEO untuk restoran & kafe.",
    to: "/industri/fnb",
    accent: "text-orange-400",
    Mockup: FnBMockup,
    thumbnail: "/templates/fnb-modern.webp",
  },
  {
    name: "Klinik & Kesehatan",
    desc: "Booking online, profil dokter, portal pasien untuk klinik & praktek.",
    to: "/industri/klinik",
    accent: "text-blue-400",
    Mockup: KlinikMockup,
  },
  {
    name: "Distributor & Grosir",
    desc: "Katalog B2B, order otomatis, invoice & tracking pengiriman.",
    to: "/industri/distributor",
    accent: "text-violet-400",
    Mockup: DistributorMockup,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const IndustryCards = () => (
  <section className="relative py-16 md:py-20">
    <div className="max-w-[1200px] mx-auto px-6">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-ghost)] font-medium mb-3">
          Spesialisasi
        </p>
        <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.03em] mb-2">
          Solusi Per Industri
        </h2>
        <p className="text-[14px] text-[var(--text-muted)] max-w-md mx-auto">
          Klik industri Anda untuk lihat solusi yang tepat — bukan template
          generic.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {industries.map((ind, i) => {
          const Mockup = ind.Mockup;
          return (
            <motion.div
              key={ind.to}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              custom={i}
            >
              <Link
                to={ind.to}
                className="group block relative rounded-xl glass-card transition-all overflow-hidden"
              >
                {/* Website mockup thumbnail */}
                <div className="relative h-36 overflow-hidden">
                  {ind.thumbnail ? (
                    <img src={ind.thumbnail} alt={ind.name} className="w-full h-full object-cover object-top" loading="lazy" />
                  ) : (
                    <Mockup />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>

                <div className="p-5">
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--text-primary)] mb-1.5 group-hover:text-[var(--accent-bright)] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-4">
                    {ind.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--accent-bright)] group-hover:gap-2.5 transition-all">
                    Lihat solusi
                    <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Templates link */}
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Link
          to="/templates"
          onClick={() => scrollTo(0, { immediate: true })}
          className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--text-muted)] hover:text-[var(--accent-bright)] transition-colors"
        >
          📦 Lihat 10 template siap deploy
          <ArrowRight size={13} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default IndustryCards;
