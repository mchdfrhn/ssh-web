import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  AlertTriangle,
  UtensilsCrossed,
  MessageCircle,
  MapPin,
  CalendarCheck,
  Stethoscope,
  FileText,
  Package,
  ShoppingCart,
  Truck,
  Quote,
  Star,
} from "lucide-react";
import { industries } from "../data/industries";
import type { IndustryConfig } from "../data/industries";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";



/* ── Icon map (avoid dynamic import) ── */
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  UtensilsCrossed,
  MessageCircle,
  MapPin,
  CalendarCheck,
  Stethoscope,
  FileText,
  Package,
  ShoppingCart,
  Truck,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Industry Hero ── */
function IndustryHero({ config }: { config: IndustryConfig }) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="mesh-gradient" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" aria-hidden="true" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, var(--bg-root) 100%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-[1200px] mx-auto px-5 pt-16 md:pt-20 pb-16 md:pb-20 text-center"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
      >
        {/* Breadcrumb */}
        <motion.div variants={fadeUp} custom={0} className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[12px] text-[var(--text-ghost)] hover:text-[var(--text-muted)] transition-colors"
          >
            <ArrowLeft size={12} />
            Kembali ke Beranda
          </Link>
        </motion.div>

        {/* Badge */}
        <motion.div variants={fadeUp} custom={0} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/[0.06] border border-[var(--accent)]/[0.12] text-[12px] font-medium text-[var(--accent-bright)] tracking-wide">
            {config.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-[2.25rem] md:text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.95] tracking-[-0.045em] text-[var(--text-primary)] mb-6"
        >
          {config.headline}
          <br />
          <span className="gradient-text-animated">{config.headlineAccent}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          custom={2}
          className="max-w-lg mx-auto text-[15px] md:text-[17px] leading-relaxed text-[var(--text-muted)] mb-10 font-light"
        >
          {config.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={`https://wa.me/6285771826637?text=${config.waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 h-11 px-7 text-[13px] font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-all shadow-lg shadow-[var(--accent)]/20"
          >
            Konsultasi Gratis
            <ArrowRight size={15} />
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2.5 h-11 px-7 text-[13px] font-medium bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.12] text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg transition-all"
          >
            Lihat Solusi
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ── Pain Points ── */
function PainPoints({ points }: { points: string[] }) {
  return (
    <section className="relative py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="max-w-xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-ghost)] font-medium mb-3">
            Masalah
          </p>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.03em]">
            Masalah yang Sering Kami Temui
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.10] transition-all"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              custom={i}
            >
              <div className="w-8 h-8 rounded-md bg-[var(--error)]/[0.06] border border-[var(--error)]/[0.10] flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle size={14} className="text-[var(--error)]" />
              </div>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Solutions ── */
function Solutions({
  solutions,
}: {
  solutions: IndustryConfig["solutions"];
}) {
  return (
    <section id="solutions" className="relative py-20 md:py-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="mb-14 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-ghost)] font-medium mb-3">
            Solusi
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] mb-4">
            Solusi yang Kami Tawarkan
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {solutions.map((svc, i) => {
            const Icon = iconMap[svc.icon] || Check;
            return (
              <motion.div
                key={i}
                className="glow-card group relative flex flex-col rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.10] transition-all"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
              >
                {i === 0 && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/[0.03] to-transparent pointer-events-none" />
                  </>
                )}

                <div className="relative z-10 p-6 md:p-7 flex-1 flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/[0.06] border border-[var(--accent)]/[0.10] flex items-center justify-center mb-5">
                    <Icon size={18} className="text-[var(--accent-bright)]" />
                  </div>

                  <h3 className="text-[16px] font-semibold tracking-[-0.02em] mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-[13px] text-[var(--text-muted)] mb-5 leading-relaxed">
                    {svc.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {svc.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-[var(--text-secondary)] bg-white/[0.03] border border-white/[0.04] rounded-md"
                      >
                        <Check size={10} className="text-[var(--accent-bright)]" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Case Study ── */
function CaseStudy({ caseStudy }: { caseStudy: IndustryConfig["caseStudy"] }) {
  return (
    <section className="relative py-20 md:py-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Star size={16} className="text-[var(--accent-bright)] fill-current" />
            <span className="text-[11px] font-medium text-[var(--accent-bright)] uppercase tracking-[0.15em]">
              Case Study
            </span>
          </div>

          <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold tracking-[-0.03em] text-[var(--text-primary)] mb-4">
            {caseStudy.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed mb-4">
                {caseStudy.desc}
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[var(--success)]/[0.04] border border-[var(--success)]/[0.10]">
              <p className="text-[11px] font-medium text-[var(--success)] uppercase tracking-wider mb-2">
                Result
              </p>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                {caseStudy.result}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Testimonial ── */
function Testimonial({
  testimonial,
}: {
  testimonial: IndustryConfig["testimonial"];
}) {
  return (
    <section className="relative py-16 md:py-20">
      <div className="max-w-[720px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quote
            size={32}
            className="text-[var(--accent)]/[0.20] mx-auto mb-6"
          />
          <blockquote className="text-[16px] md:text-[18px] text-[var(--text-secondary)] leading-relaxed italic mb-6">
            "{testimonial.quote}"
          </blockquote>
          <div>
            <p className="text-[14px] font-semibold text-[var(--text-primary)]">
              {testimonial.name}
            </p>
            <p className="text-[12px] text-[var(--text-ghost)]">
              {testimonial.role}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Industry CTA ── */
function IndustryCTA({ config }: { config: IndustryConfig }) {
  return (
    <section className="relative py-20 md:py-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[720px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.03em] mb-4">
            Siap Go Digital?
          </h2>
          <p className="text-[15px] text-[var(--text-muted)] mb-2">
            {config.pricingNote}
          </p>
          <p className="text-[13px] text-[var(--text-ghost)] mb-8">
            Konsultasi gratis, tidak dipaksa. Kami bantu Anda pilih solusi yang
            tepat untuk bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/6285771826637?text=${config.waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-11 px-7 text-[13px] font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-all shadow-lg shadow-[var(--accent)]/20"
            >
              Konsultasi via WhatsApp
              <ArrowRight size={15} />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 h-11 px-7 text-[13px] font-medium bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.12] text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg transition-all"
            >
              Lihat Semua Layanan
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Industry Page ── */
const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const config = slug ? industries[slug] : undefined;

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-[32px] font-bold mb-4">Industri tidak ditemukan</h1>
          <p className="text-[var(--text-muted)] mb-6">
            Halaman industri yang Anda cari tidak tersedia.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 h-10 px-6 text-[13px] font-medium bg-[var(--accent)] text-white rounded-lg"
          >
            <ArrowLeft size={14} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <IndustryHero config={config} />
        <PainPoints points={config.painPoints} />
        <Solutions solutions={config.solutions} />
        <CaseStudy caseStudy={config.caseStudy} />
        <Testimonial testimonial={config.testimonial} />
        <PricingSection />
        <FAQSection />
        <IndustryCTA config={config} />
      </main>
      <Footer />
    </>
  );
};

export default IndustryPage;
