import { motion } from "framer-motion";
import { Zap, Code, Shield, Check, ArrowRight, Globe, Smartphone, Database, Cloud, Lock, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Zap,
    name: "Landing Page Package",
    desc: "Website profesional siap pakai dalam 5-7 hari. SEO-optimized, mobile-first. Cocok untuk UMKM yang baru go digital.",
    features: ["Custom Design", "Lighthouse 95+", "WhatsApp Integration"],
    price: "Mulai Rp 750rb",
    popular: false,
    span: "md:col-span-1",
  },
  {
    icon: Code,
    name: "Custom Web Application",
    desc: "Sistem kompleks: dashboard, manajemen data, integrasi API. Full-stack dari database sampai frontend.",
    features: ["Scalable Architecture", "Admin Dashboard", "API Integration"],
    price: "Mulai Rp 3 Juta",
    popular: true,
    span: "md:col-span-2",
  },
  {
    icon: Shield,
    name: "Maintenance & DevOps",
    desc: "Website Anda tetap aman, cepat, dan up-to-date. Biarkan Anda fokus jualan — kami yang urus teknisnya.",
    features: ["24/7 Monitoring", "Security Updates", "Auto Backups"],
    price: "Mulai Rp 500rb/bln",
    popular: false,
    span: "md:col-span-1",
  },
];

const capabilities = [
  { icon: Globe, label: "Web Development" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Database, label: "Database Design" },
  { icon: Cloud, label: "Cloud Infrastructure" },
  { icon: Lock, label: "Security Audit" },
  { icon: BarChart3, label: "Analytics & SEO" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ServicesSection = () => (
  <section id="services" className="relative py-24 md:py-32">
    <div className="floating-orb w-[500px] h-[500px] bg-[var(--accent)]/[0.04] top-1/2 left-0 -translate-y-1/2" aria-hidden="true" />

    <div className="max-w-[1200px] mx-auto px-6">
      {/* Header — LEFT aligned, not centered */}
      <motion.div
        className="mb-14 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-ghost)] font-medium mb-3">
          Layanan
        </p>
        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] mb-4">
          Solusi Digital End-to-End
        </h2>
        <p className="text-[15px] text-[var(--text-muted)] leading-relaxed font-light">
          Kami tidak sekadar menulis kode. Kami membangun solusi yang
          memecahkan masalah bisnis Anda.
        </p>
      </motion.div>

      {/* Bento grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={i}
              className={`glow-card group relative flex flex-col rounded-xl glass-card transition-all ${svc.span}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
            >
              {svc.popular && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/[0.03] to-transparent pointer-events-none" />
                </>
              )}

              <div className="relative z-10 p-6 md:p-7 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <div className="absolute w-8 h-8 rounded-full bg-[var(--accent)]/[0.10]" />
                    <Icon size={18} className="relative z-10 text-[var(--accent-bright)]" />
                    <div className="absolute top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-[var(--accent-bright)]" />
                  </div>
                  {svc.popular && (
                    <span className="text-[10px] font-semibold text-[var(--accent-bright)] bg-[var(--accent)]/[0.10] px-2 py-0.5 rounded-md uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-[16px] font-semibold tracking-[-0.02em] mb-2">{svc.name}</h3>
                <p className="text-[13px] text-[var(--text-muted)] mb-5 leading-relaxed flex-1">
                  {svc.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {svc.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-[var(--text-secondary)] bg-[var(--border-subtle)] border border-[var(--border-subtle)] rounded-md"
                    >
                      <Check size={10} className="text-[var(--accent-bright)]" />
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
                  <span className="text-[14px] font-semibold text-[var(--text-primary)]">{svc.price}</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--accent-bright)] hover:text-[var(--accent-hover)] transition-colors"
                  >
                    Konsultasi <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Capability tags */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {capabilities.map((cap) => {
          const Icon = cap.icon;
          return (
            <div
              key={cap.label}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[11px] font-medium text-[var(--text-ghost)] hover:text-[var(--text-muted)] hover:border-[var(--border-default)] transition-all cursor-default"
            >
              <Icon size={12} className="text-[var(--text-ghost)]" />
              {cap.label}
            </div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
