import { motion } from "framer-motion";
import { Gift, Users, ArrowRight, Percent } from "lucide-react";

const ReferralSection = () => (
  <section className="relative py-20 md:py-24">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-px bg-gradient-to-r from-transparent via-[var(--border-default)] to-transparent" />

    <div className="max-w-[1200px] mx-auto px-6">
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--accent)]/[0.08] via-[var(--border-subtle)] to-[var(--accent-bright)]/[0.05] border border-[var(--accent)]/[0.12] p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Decorative orbs */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Left — Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/[0.12] border border-[var(--accent)]/[0.20] flex items-center justify-center">
                <Gift size={18} className="text-[var(--accent-bright)]" />
              </div>
              <span className="text-[10px] font-medium text-[var(--accent-bright)] uppercase tracking-[0.15em]">
                Program Referral
              </span>
            </div>

            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.03em] mb-4">
              Ajak Teman, Dapat Diskon
            </h2>

            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-6">
              Puas dengan hasil kerja kami? Referensikan ke teman atau rekan
              bisnis Anda. Keduanya dapat untung.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[var(--success)]/[0.08] border border-[var(--success)]/[0.15] flex items-center justify-center shrink-0 mt-0.5">
                  <Percent size={14} className="text-[var(--success)]" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[var(--text-primary)]">
                    Anda dapat diskon 20%
                  </p>
                  <p className="text-[12px] text-[var(--text-muted)]">
                    Untuk project berikutnya setelah teman Anda deal
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[var(--success)]/[0.08] border border-[var(--success)]/[0.15] flex items-center justify-center shrink-0 mt-0.5">
                  <Users size={14} className="text-[var(--success)]" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[var(--text-primary)]">
                    Teman Anda dapat diskon 10%
                  </p>
                  <p className="text-[12px] text-[var(--text-muted)]">
                    Untuk project pertama mereka
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/6285771826637?text=Halo%20SSH%2C%20saya%20mau%20referensikan%20teman%20untuk%20bikin%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-6 text-[13px] font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-all shadow-lg shadow-[var(--accent)]/20"
            >
              Referensikan Teman
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right — Visual */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Card mockup */}
              <div className="w-64 p-6 rounded-xl bg-[var(--border-subtle)] border border-[var(--border-default)] backdrop-blur-md shadow-xl shadow-[var(--border-subtle)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent)]/[0.15] flex items-center justify-center text-[14px] font-bold text-[var(--accent-bright)]">
                    A
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-[var(--text-primary)]">
                      Andi (Anda)
                    </p>
                    <p className="text-[11px] text-[var(--success)]">
                      Diskon 20% aktif ✓
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-[var(--border-default)] my-3" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-bright)]/[0.15] flex items-center justify-center text-[14px] font-bold text-[var(--accent-bright)]">
                    B
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-[var(--text-primary)]">
                      Budi (Teman)
                    </p>
                    <p className="text-[11px] text-[var(--success)]">
                      Diskon 10% aktif ✓
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg bg-[var(--success)] text-[11px] font-semibold text-white shadow-lg">
                Win-Win 🤝
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ReferralSection;
