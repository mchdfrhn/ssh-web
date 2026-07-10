import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Saya UMKM, belum punya website sama sekali. Bisa dibantu?",
    a: "Bisa banget. 80% klien kami adalah UMKM yang baru pertama kali go digital. Kami bantu dari nol: beli domain, setup hosting, desain, sampai website live. Anda tinggal kirim foto produk dan info bisnis.",
  },
  {
    q: "Berapa lama pengerjaan website?",
    a: "Landing page: 5-7 hari kerja. Web application: 2-6 minggu tergantung kompleksitas. Kami selalu memberikan timeline di awal dan update progress mingguan via WhatsApp.",
  },
  {
    q: "Harga segitu sudah termasuk apa saja?",
    a: "Sudah termasuk: desain custom, development, testing, deployment, domain .com 1 tahun, hosting 1 tahun, dan WhatsApp integration. Tidak ada biaya tersembunyi.",
  },
  {
    q: "Saya gaptek, bisa maintain sendiri?",
    a: "Bisa. Kami setup CMS yang mudah diedit (ganti foto, tulis artikel). Kalau butuh bantuan teknis, paket maintenance kami mulai Rp 500rb/bulan — kami yang urus semua.",
  },
  {
    q: "Bagaimana sistem pembayaran?",
    a: "50% di awal (DP), 50% setelah selesai. Untuk project besar, bisa dipecah jadi 3 tahap. Pembayaran via transfer bank atau QRIS.",
  },
  {
    q: "Apakah source code menjadi milik saya?",
    a: "Ya, 100%. Setelah project selesai dan pelunasan, semua source code, aset desain, dan dokumentasi menjadi milik penuh Anda. Tidak ada vendor lock-in.",
  },
  {
    q: "Portfolio kalian kan cuma 3 project, kenapa harus pilih kalian?",
    a: "Karena project kami real — dipakai oleh STTPU (kampus) dan Pusdatin Kementerian PUPR. Bukan template. Bukan clone. Kami lebih baik handle 3 project berkualitas daripada 50 project asal jadi.",
  },
  {
    q: "Bisa minta revisi setelah selesai?",
    a: "Free revisi 2x selama masa garansi 30 hari. Revisi di luar garansi dikenakan biaya per-jam yang terjangkau (Rp 150rb/jam).",
  },
  {
    q: "Teknologi apa yang digunakan?",
    a: "Kami pilih tech stack sesuai kebutuhan: Next.js/React untuk frontend, Node.js/Laravel untuk backend, PostgreSQL/MongoDB untuk database. Semua modern, scalable, dan banyak developernya di Indonesia — jadi Anda tidak terkait ke kami selamanya.",
  },
];

const FAQItem = ({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) => (
  <div className="border-b border-[var(--border-subtle)] last:border-0">
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      aria-expanded={isOpen}
    >
      <span className={`text-[14px] font-medium transition-colors ${isOpen ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"}`}>
        {q}
      </span>
      <ChevronDown
        size={16}
        className={`shrink-0 mt-0.5 text-[var(--text-ghost)] transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--accent-bright)]" : ""}`}
      />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="pb-5 text-[13px] text-[var(--text-muted)] leading-relaxed pr-8">
            {a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-px bg-gradient-to-r from-transparent via-[var(--border-default)] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Header */}
          <motion.div
            className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-ghost)] font-medium mb-3">
              FAQ
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed font-light">
              Masih bingung?{" "}
              <a href="#contact" className="text-[var(--accent-bright)] hover:underline">
                Chat langsung
              </a>{" "}
              dan kami akan menjawab semua pertanyaan Anda.
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-xl glass-card p-6 md:p-8">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIdx === i}
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
