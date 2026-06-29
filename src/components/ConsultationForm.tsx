import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Clock, FileText, MessageSquare, ArrowRight } from "lucide-react";

const businessTypes = ["UMKM / Toko Online", "Startup", "Korporat", "Instansi Pemerintah", "Personal Brand", "Lainnya"];
const serviceOptions = ["Landing Page", "Web Application", "Maintenance"];
const budgetOptions = ["< Rp 500rb", "Rp 500rb – 3 Juta", "Rp 3 – 10 Juta", "> Rp 10 Juta"];

const benefits = [
  { icon: Clock, text: "Response dalam 2 jam di hari kerja" },
  { icon: FileText, text: "Gratis project roadmap & estimasi" },
  { icon: MessageSquare, text: "Konsultasi tanpa komitmen" },
];

const ConsultationForm = () => {
  const [form, setForm] = useState({
    name: "", email: "", whatsapp: "", businessType: "",
    services: [] as string[], budget: "", description: "",
  });

  const toggleService = (svc: string) =>
    setForm((p) => ({
      ...p,
      services: p.services.includes(svc) ? p.services.filter((s) => s !== svc) : [...p.services, svc],
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo SSH.dev! 👋

Saya ${form.name || "Ingin konsultasi"}.
📧 ${form.email || "-"} | 📱 ${form.whatsapp || "-"}
🏢 ${form.businessType || "-"} | 💻 ${form.services.join(", ") || "-"} | 💰 ${form.budget || "-"}
${form.description ? `
${form.description}` : ""}`;
    window.open(`https://wa.me/6288971084208?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const inputCls = "w-full h-10 px-3 bg-white/[0.03] border border-white/[0.06] focus:border-[var(--accent)]/40 focus:ring-1 focus:ring-[var(--accent)]/15 text-[var(--text-primary)] placeholder:text-[var(--text-ghost)] rounded-lg text-[13px] outline-none transition-all";

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Ambient orb */}
      <div className="floating-orb w-[400px] h-[400px] bg-[var(--accent)]/[0.04] bottom-0 right-0" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header — LEFT aligned */}
        <motion.div
          className="mb-12 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-ghost)] font-medium mb-3">
            Mulai Project
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] mb-4">
            Ceritakan Kebutuhan Anda
          </h2>
          <p className="text-[15px] text-[var(--text-muted)] leading-relaxed font-light">
            Kami merespons dalam 2 jam di hari kerja dengan estimasi dan roadmap gratis.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-medium text-[var(--text-ghost)] uppercase tracking-wider mb-1.5">Nama *</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className={inputCls} />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-[var(--text-ghost)] uppercase tracking-wider mb-1.5">Email *</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@company.com" className={inputCls} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-medium text-[var(--text-ghost)] uppercase tracking-wider mb-1.5">WhatsApp *</label>
                <input type="text" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="628xxxxxxxxxx" className={inputCls} />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-[var(--text-ghost)] uppercase tracking-wider mb-1.5">Jenis Bisnis *</label>
                <select value={form.businessType} onChange={(e) => setForm({ ...form, businessType: e.target.value })} className={inputCls + " cursor-pointer"}>
                  <option value="" disabled>Pilih jenis bisnis</option>
                  {businessTypes.map((bt) => <option key={bt} value={bt}>{bt}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[var(--text-ghost)] uppercase tracking-wider mb-2">Layanan *</label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((svc) => (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => toggleService(svc)}
                    className={`px-3 py-1.5 text-[12px] font-medium rounded-lg border transition-all ${
                      form.services.includes(svc)
                        ? "bg-[var(--accent)]/[0.12] border-[var(--accent)]/30 text-[var(--accent-bright)]"
                        : "bg-white/[0.02] border-white/[0.06] text-[var(--text-muted)] hover:border-white/[0.10]"
                    }`}
                  >
                    {svc}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[var(--text-ghost)] uppercase tracking-wider mb-2">Budget *</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgetOptions.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setForm({ ...form, budget: b })}
                    className={`px-3 py-1.5 text-[11px] font-medium rounded-lg border transition-all text-center ${
                      form.budget === b
                        ? "bg-[var(--accent)]/[0.12] border-[var(--accent)]/30 text-[var(--accent-bright)]"
                        : "bg-white/[0.02] border-white/[0.06] text-[var(--text-muted)] hover:border-white/[0.10]"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[var(--text-ghost)] uppercase tracking-wider mb-1.5">Deskripsi Project</label>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4} placeholder="Ceritakan project impian Anda..." className={inputCls + " h-auto resize-none"} />
            </div>

            <button
              type="submit"
              className="w-full h-11 inline-flex items-center justify-center gap-2 text-[14px] font-semibold bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg shadow-lg shadow-[var(--accent)]/20 transition-all"
            >
              <Send size={15} />
              Kirim via WhatsApp
            </button>
          </motion.form>

          {/* Sidebar */}
          <motion.aside
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="sticky top-24 space-y-4">
              <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5">
                <h3 className="text-[13px] font-semibold text-[var(--text-primary)] mb-4">Yang Anda Dapatkan</h3>
                <ul className="space-y-3.5">
                  {benefits.map((b, i) => {
                    const Icon = b.icon;
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-md bg-[var(--accent)]/[0.06] border border-[var(--accent)]/[0.10] flex items-center justify-center shrink-0">
                          <Icon size={13} className="text-[var(--accent-bright)]" />
                        </div>
                        <span className="text-[13px] text-[var(--text-secondary)] leading-relaxed">{b.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="rounded-xl bg-[var(--accent)]/[0.03] border border-[var(--accent)]/[0.08] p-5">
                <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed italic">
                  &ldquo;SSH.dev membantu kami membangun sistem akademik yang
                  mengurangi beban admin hingga 60%. Prosesnya transparan dan
                  hasilnya melebihi ekspektasi.&rdquo;
                </p>
                <p className="mt-3 text-[11px] text-[var(--text-ghost)]">
                  — Tim IT, STTPU
                </p>
              </div>

              <a
                href="https://wa.me/6288971084208"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.10] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--success)]/10 flex items-center justify-center">
                  <MessageSquare size={18} className="text-[var(--success)]" />
                </div>
                <div className="flex-1">
                  <p className="text-[12px] font-medium text-[var(--text-primary)]">Chat Langsung</p>
                  <p className="text-[11px] text-[var(--text-ghost)]">+62 889 7108 4208</p>
                </div>
                <ArrowRight size={14} className="text-[var(--text-ghost)] group-hover:text-[var(--text-muted)] group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
