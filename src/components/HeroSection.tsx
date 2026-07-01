import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { scrollTo } from "../utils/scroll-utils";
import { haptic } from "../utils/haptic";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh */}
      <div className="mesh-gradient" aria-hidden="true" />
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Floating decorative orbs */}
      <motion.div
        className="floating-orb w-[400px] h-[400px] bg-[var(--accent)]/[0.07] top-[10%] left-[-5%]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="floating-orb w-[300px] h-[300px] bg-purple-500/[0.05] bottom-[10%] right-[-3%]"
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, var(--bg-root) 100%)" }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-[1200px] mx-auto px-5 pt-28 md:pt-32 pb-20 md:pb-24 text-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Overline badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-[12px] font-medium text-[var(--text-muted)] tracking-wide">
            <Sparkles size={13} className="text-[var(--accent-bright)]" />
            Trusted by 50+ businesses across Indonesia
          </span>
        </motion.div>

        {/* MASSIVE headline */}
        <motion.h1
          variants={fadeUp}
          className="text-[2.5rem] md:text-[clamp(2.8rem,9vw,6rem)] font-black leading-[0.92] tracking-[-0.045em] text-[var(--text-primary)] mb-8"
        >
          Build Digital
          <br />
          Products That
          <br />
          <span className="gradient-text-animated">Actually Ship</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="max-w-lg mx-auto text-[15px] md:text-[17px] leading-relaxed text-[var(--text-muted)] mb-10 font-light px-2"
        >
          Kami bantu UMKM & startup membangun website, aplikasi, dan sistem
          digital — dari ide sampai deploy. Tanpa drama, tanpa harga agency.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); haptic("medium"); scrollTo("#contact"); }}
            className="group relative inline-flex items-center gap-2 h-12 px-8 text-[14px] font-semibold bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-xl transition-all shadow-lg shadow-[var(--accent)]/25"
          >
            Konsultasi Gratis
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); haptic("light"); scrollTo("#portfolio"); }}
            className="inline-flex items-center gap-2 h-12 px-8 text-[14px] font-medium bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] text-[var(--text-primary)] rounded-xl transition-all"
          >
            Lihat Portofolio
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={fadeUp}
          className="mt-16 flex items-center justify-center gap-6 flex-wrap"
        >
          <div className="flex items-center gap-2 text-[12px] text-[var(--text-ghost)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
            Response &lt; 2 jam
          </div>
          <div className="w-px h-3 bg-white/[0.06]" />
          <div className="text-[12px] text-[var(--text-ghost)]">Free estimasi</div>
          <div className="w-px h-3 bg-white/[0.06]" />
          <div className="text-[12px] text-[var(--text-ghost)]">Garansi 30 hari</div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg-root), transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
};

export default HeroSection;
