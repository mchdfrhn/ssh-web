import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    label: "SEKALI BAYAR",
    name: "Landing Page",
    desc: "Website profesional untuk UMKM & bisnis lokal. Siap dalam 7 hari.",
    price: "Rp 750rb",
    priceDesc: "mulai dari",
    features: [
      "Custom design sesuai brand Anda",
      "Mobile-first, SEO-optimized",
      "WhatsApp button langsung aktif",
      "Domain .com + hosting 1 tahun",
      "Free revisi 2x, garansi 30 hari",
    ],
    cta: "Mulai Sekarang",
    popular: false,
  },
  {
    label: "BUNDLE",
    name: "Paket Go Digital",
    desc: "Landing page + maintenance 6 bulan + WhatsApp integration. Hemat 40%.",
    price: "Rp 2.5 Juta",
    priceDesc: "sekali bayar",
    features: [
      "Semua fitur Landing Page",
      "Maintenance 6 bulan (monitoring + backup)",
      "WhatsApp auto-reply bot",
      "Google Business Profile setup",
      "Full source code ownership",
    ],
    cta: "Ambil Paket Ini",
    popular: true,
  },
  {
    label: "BULANAN",
    name: "Maintenance",
    desc: "Website Anda tetap aman, cepat, dan up-to-date.",
    price: "Rp 500rb",
    priceDesc: "/bulan",
    features: [
      "Uptime monitoring 24/7",
      "Security updates & patches",
      "Monthly performance report",
      "Database backups",
      "Bug fixes & minor updates",
    ],
    cta: "Amankan Website",
    popular: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const PricingSection = () => (
  <section id="pricing" className="relative py-24 md:py-32">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

    <div className="max-w-[1100px] mx-auto px-6">
      {/* Header — centered */}
      <motion.div
        className="text-center mb-14 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-ghost)] font-medium mb-3">
          Investasi
        </p>
        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] mb-4">
          Harga Transparan, Hasil Maksimal
        </h2>
      </motion.div>

      {/* Pricing cards */}
      <div className="grid md:grid-cols-3 gap-4 items-start">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col rounded-xl overflow-hidden transition-all ${
              plan.popular
                ? "gradient-border bg-white/[0.04] shadow-lg shadow-[var(--accent)]/[0.08]"
                : "bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.10]"
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={i}
          >
            {plan.popular && (
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/[0.04] to-transparent pointer-events-none" />
            )}

            <div className="relative z-10 p-6 md:p-7 flex-1 flex flex-col">
              {/* Header */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-[10px] font-medium text-[var(--text-ghost)] tracking-[0.15em] uppercase">
                    {plan.label}
                  </p>
                  {plan.popular && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-[var(--accent-bright)] bg-[var(--accent)]/[0.12] px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                      <Star size={8} className="fill-current" />
                      Best Value
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[28px] font-bold tracking-[-0.03em]">{plan.price}</span>
                  <span className="text-[13px] text-[var(--text-muted)]">{plan.priceDesc}</span>
                </div>
              </div>

              <h3 className="text-[16px] font-semibold tracking-[-0.02em] mb-2">{plan.name}</h3>
              <p className="text-[13px] text-[var(--text-muted)] mb-5 leading-relaxed">{plan.desc}</p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[13px] text-[var(--text-secondary)]">
                    <Check size={14} className="text-[var(--accent-bright)] mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 h-10 text-[13px] font-medium rounded-lg transition-all ${
                  plan.popular
                    ? "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-lg shadow-[var(--accent)]/20"
                    : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] text-[var(--text-primary)]"
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center mt-8 text-[13px] text-[var(--text-muted)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        Butuh penawaran khusus?{" "}
        <a href="#contact" className="text-[var(--accent-bright)] hover:text-[var(--accent-hover)] underline underline-offset-2 transition-colors">
          Hubungi kami
        </a>
      </motion.p>
    </div>
  </section>
);

export default PricingSection;
