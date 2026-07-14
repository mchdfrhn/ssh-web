import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Discovery",
    desc: "Konsultasi gratis untuk memahami kebutuhan, target user, dan goal bisnis Anda.",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design",
    desc: "Wireframe & high-fidelity mockup. Revisi sampai Anda puas sebelum development dimulai.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Development",
    desc: "Build dengan tech stack modern. Progress update setiap minggu. Code review ketat.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch & Support",
    desc: "Deploy ke production, monitoring, dan garansi bug 30 hari. Support berkelanjutan.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ProcessSection = () => (
  <section className="relative py-24 md:py-32 border-y border-[var(--border-subtle)]">
    <div className="max-w-[1200px] mx-auto px-6">
      {/* Header — centered */}
      <motion.div
        className="text-center mb-16 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-ghost)] font-medium mb-3">
          Proses
        </p>
        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] mb-4">
          Dari Ide ke Launch dalam 4 Langkah
        </h2>
      </motion.div>

      {/* Steps — horizontal on desktop, vertical on mobile */}
      <div className="grid md:grid-cols-4 gap-6 md:gap-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              className="relative group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+32px)] right-[-4px] h-px bg-gradient-to-r from-[var(--border-default)] to-[var(--border-subtle)]" />
              )}

              <div className="flex md:flex-col items-start md:items-center md:text-center gap-4 md:gap-0">
                {/* Step number + icon */}
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[var(--border-subtle)] border border-[var(--border-default)] flex items-center justify-center group-hover:border-[var(--accent)]/[0.20] group-hover:bg-[var(--accent)]/[0.06] transition-all">
                    <Icon size={18} className="text-[var(--text-muted)] group-hover:text-[var(--accent-bright)] transition-colors" />
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 text-[9px] font-bold text-[var(--accent-bright)] bg-[var(--bg-root)] border border-[var(--border-default)] rounded-full w-5 h-5 flex items-center justify-center">
                    {step.num}
                  </span>
                </div>

                <div className="md:mt-4">
                  <h3 className="text-[14px] font-semibold text-[var(--text-primary)] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[12px] text-[var(--text-muted)] leading-relaxed md:max-w-[200px] md:mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProcessSection;
