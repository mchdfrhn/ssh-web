import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Award, Users } from "lucide-react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: Users, value: 50, suffix: "+", label: "Klien Puas", desc: "Dari UMKM hingga korporat" },
  { icon: Award, value: 100, suffix: "+", label: "Project Selesai", desc: "Tepat waktu & sesuai brief" },
  { icon: Clock, value: 2, suffix: " Jam", label: "Response Time", desc: "Konsultasi cepat & responsif" },
  { icon: Shield, value: 99, suffix: ".9%", label: "Uptime Guarantee", desc: "Sistem Anda selalu online" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ValidationSection = () => (
  <section className="relative py-20">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              className="relative text-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-all group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--accent)]/[0.06] border border-[var(--accent)]/[0.10] mb-4 group-hover:border-[var(--accent)]/[0.20] transition-colors">
                <Icon size={18} className="text-[var(--accent-bright)]" />
              </div>
              <div className="text-[32px] md:text-[38px] font-black text-[var(--text-primary)] mb-1 tracking-[-0.03em] leading-none">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[13px] font-medium text-[var(--text-secondary)] mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-[var(--text-ghost)]">
                {stat.desc}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ValidationSection;
