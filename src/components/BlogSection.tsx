import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Clock, Calendar } from "lucide-react";

/* ── Article Data ── */

type Article = (typeof articles)[number];

const articles = [
  {
    id: "umkm-butuh-website-2026",
    title: "5 Alasan UMKM Butuh Website di 2026",
    excerpt:
      "Masih mikir 'bisnis saya kecil, ngapain punya website'? Ini 5 alasan kenapa bisnis tanpa website di 2026 = bisnis yang jalan di tempat.",
    category: "Tips Bisnis",
    readTime: "4 menit",
    date: "Juli 2026",
    content: `
## 1. Konsumen Cari di Google, Bukan di Jalan

73% konsumen Indonesia cari informasi bisnis di Google sebelum memutuskan beli. Kalau bisnis Anda tidak muncul di Google, Anda kehilangan 7 dari 10 calon pelanggan.

**Contoh nyata:** Warung makan yang punya website sederhana dengan menu + lokasi di Google Maps bisa dapat 3x lebih banyak pelanggan baru dibanding yang cuma andalkan lokasi fisik.

## 2. Website = Kredibilitas Instan

Bisnis tanpa website di mata konsumen = bisnis yang "nggak serius". Bahkan website satu halaman sederhana sudah cukup untuk:
- Menampilkan produk/jasa
- Menunjukkan testimoni klien
- Memberikan cara kontak yang mudah

**Data:** 84% konsumen menganggap bisnis dengan website lebih terpercaya daripada yang hanya punya media sosial.

## 3. Kompetitor Sudah Online

Coba search "[jenis bisnis Anda] + [kota Anda]" di Google. Kalau kompetitor Anda sudah muncul dan Anda belum — Anda sudah kalah sebelum bertanding.

Website bukan lagi "nice to have" — ini kebutuhan dasar untuk bersaing.

## 4. WhatsApp + Website = Mesin Penjualan 24/7

Website yang terintegrasi WhatsApp bisa jadi sales yang tidak pernah tidur:
- Pengunjung lihat produk di website
- Klik tombol WhatsApp
- Langsung chat dengan Anda

Tidak perlu karyawan jaga telepon 24 jam. Website yang handle presentasi, Anda tinggal close deal.

## 5. Biayanya Sudah Sangat Terjangkau

Dulu bikin website bisa habis Rp 10-50 juta. Sekarang? Mulai dari Rp 750rb sudah dapat website profesional, domain, hosting, dan WhatsApp integration.

**ROI:** Kalau website bantu Anda dapat 1 klien baru per bulan, investasi Rp 750rb sudah balik di bulan pertama.

---

**Kesimpulan:** Website bukan pengeluaran — ini investasi yang terbayar. Yang mahal bukan bikin website, tapi **tidak punya website** di era digital ini.

💬 **Mau konsultasi gratis?** [Chat kami di WhatsApp](https://wa.me/6288971084208?text=Halo%20SSH%2C%20saya%20tertarik%20bikin%20website%20untuk%20bisnis%20saya)
    `,
  },
  {
    id: "cara-milih-jasa-dev",
    title: "Cara Memilih Jasa Pembuatan Website yang Tepat",
    excerpt:
      "Freelancer murah tapi kabur? Agency mahal tapi template? Ini checklist 7 hal yang wajib dicek sebelum pilih jasa pembuatan website.",
    category: "Tips Bisnis",
    readTime: "5 menit",
    date: "Juli 2026",
    content: `
## Checklist 7 Hal Sebelum Pilih Jasa Website

### 1. Lihat Portfolio Real, Bukan Mockup
Jangan percaya screenshot yang bisa diedit. Minta link website yang benar-benar live dan bisa dikunjungi. Klik-klik sendiri, cek responsivenya di HP.

### 2. Tanya Soal Source Code
"Source code jadi milik saya nggak setelah selesai?" — kalau jawabannya "tidak" atau "nanti dulu", **lari**. Anda bisa terjebak vendor lock-in.

### 3. Pastikan Ada Garansi
Jasa yang bagus berani kasih garansi bug minimal 30 hari. Website itu software — pasti ada bug di awal. Yang penting ada yang bertanggung jawab fix.

### 4. Transparansi Harga
Harga harus jelas di awal. Kalau ada "biaya tambahan" yang muncul di tengah jalan = red flag. Minta breakdown biaya sebelum mulai.

### 5. Timeline yang Realistis
"Landing page 1 hari" = template yang diedit. Website bagus butuh waktu: 5-7 hari untuk landing page, 2-6 minggu untuk web app.

### 6. Tech Stack Modern
Tanya: "Pakai teknologi apa?" Kalau jawab WordPress untuk semua kebutuhan = kemungkinan besar template. Tech stack harus disesuaikan dengan kebutuhan project.

### 7. Komunikasi yang Jelas
Seberapa sering update progress? Bisa chat langsung atau harus lewat ticket? Komunikasi yang buruk di awal = project yang berantakan di akhir.

---

💬 **Butuh second opinion?** [Konsultasi gratis dengan kami](https://wa.me/6288971084208?text=Halo%20SSH%2C%20saya%20mau%20tanya%20soal%20pembuatan%20website)
    `,
  },
  {
    id: "whatsapp-otomatis-bisnis",
    title: "WhatsApp Otomatis: Cara Balas Customer Tanpa Nganggurin HP",
    excerpt:
      "Balas WhatsApp customer satu-satu? Buang waktu. Ini cara setup WhatsApp auto-reply untuk bisnis Anda — dari order sampai follow-up otomatis.",
    category: "Otomasi",
    readTime: "3 menit",
    date: "Juli 2026",
    content: `
## Masalah: Balas WA Manual = Buang Waktu

Bayangkan: 50 pesan WhatsApp masuk per hari. Masing-masing butuh 2 menit untuk balas. Itu = **100 menit = 1 jam 40 menit** habis cuma untuk copy-paste pesan yang sama.

## Solusi: WhatsApp Bot

Dengan WhatsApp Bot, Anda bisa:
- **Auto-reply** saat ada pesan masuk (di luar jam kerja)
- **Kirim notifikasi otomatis** ke customer (status pesanan, reminder)
- **Broadcast** promosi ke ribuan kontak sekaligus
- **Chatbot** untuk FAQ umum (harga, jam buka, lokasi)

## Contoh Kasus: SIPEKAD

Klien kami STTPU pakai WhatsApp Bot untuk:
- Notifikasi otomatis ke mahasiswa saat pengajuan diproses
- Update status real-time: "Pengajuan Anda sedang dikerjakan"
- Konfirmasi selesai: "Surat sudah siap diambil"

**Result:** Mahasiswa tidak perlu telepon kampus untuk tanya status. Admin hemat 3+ jam per hari.

## Berapa Biayanya?

Tergantung kompleksitas:
- **Simple auto-reply:** Mulai Rp 500rb
- **Chatbot + integrasi sistem:** Mulai Rp 2jt
- **Full automation (CRM + broadcast):** Mulai Rp 5jt

---

💬 **Mau WhatsApp otomatis untuk bisnis Anda?** [Chat kami](https://wa.me/6288971084208?text=Halo%20SSH%2C%20saya%20mau%20tanya%20soal%20WhatsApp%20otomatis)
    `,
  },
];

/* ── Article Modal ── */

function ArticleModal({
  article,
  onClose,
}: {
  article: Article;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-start justify-center bg-[var(--bg-root)]/95 backdrop-blur-xl overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[720px] mx-4 my-8 md:my-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-2 right-0 w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.06] border border-white/[0.08] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/[0.10] transition-all"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <span className="inline-block text-[10px] font-medium text-[var(--accent-bright)] bg-[var(--accent)]/[0.08] px-2 py-0.5 rounded-md mb-4 uppercase tracking-wider">
          {article.category}
        </span>
        <h1 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold tracking-[-0.03em] text-[var(--text-primary)] mb-4">
          {article.title}
        </h1>
        <div className="flex items-center gap-4 text-[12px] text-[var(--text-ghost)] mb-8">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {article.readTime}
          </span>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-sm max-w-none prose-headings:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)] prose-strong:text-[var(--text-primary)] prose-a:text-[var(--accent-bright)] prose-hr:border-white/[0.06] prose-li:text-[var(--text-secondary)]">
          {article.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="text-[18px] font-semibold mt-8 mb-3">
                  {line.slice(3)}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3 key={i} className="text-[16px] font-semibold mt-6 mb-2">
                  {line.slice(4)}
                </h3>
              );
            }
            if (line.startsWith("---")) {
              return <hr key={i} className="my-8 border-white/[0.06]" />;
            }
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="text-[14px] leading-relaxed ml-4 mb-1">
                  {line.slice(2)}
                </li>
              );
            }
            if (line.trim() === "") return <div key={i} className="h-2" />;
            // Handle bold **text**
            const boldParsed = line.replace(
              /\*\*(.*?)\*\*/g,
              '<strong>$1</strong>'
            );
            // Handle links [text](url)
            const linkParsed = boldParsed.replace(
              /\[(.*?)\]\((.*?)\)/g,
              '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
            );
            return (
              <p
                key={i}
                className="text-[14px] leading-relaxed mb-3 text-[var(--text-secondary)]"
                dangerouslySetInnerHTML={{ __html: linkParsed }}
              />
            );
          })}
        </article>

        {/* CTA */}
        <div className="mt-10 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
          <p className="text-[14px] text-[var(--text-secondary)] mb-4">
            Butuh bantuan untuk bisnis Anda?
          </p>
          <a
            href="https://wa.me/6288971084208?text=Halo%20SSH%2C%20saya%20baca%20artikel%20Anda%20dan%20tertarik%20konsultasi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-10 px-6 text-[13px] font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-all"
          >
            Konsultasi Gratis via WhatsApp
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ── */

const BlogSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <>
      <section id="blog" className="relative py-24 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <motion.div
            className="mb-14 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-ghost)] font-medium mb-3">
              Insights
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] mb-4">
              Tips & Wawasan untuk Bisnis Digital
            </h2>
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed font-light">
              Artikel praktis untuk UMKM yang ingin go digital — tanpa jargon
              teknis.
            </p>
          </motion.div>

          {/* Article grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {articles.map((article, i) => (
              <motion.article
                key={article.id}
                className="group relative flex flex-col rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.10] transition-all cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-medium text-[var(--accent-bright)] bg-[var(--accent)]/[0.08] px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-[10px] text-[var(--text-ghost)]">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-bright)] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-[13px] text-[var(--text-muted)] leading-relaxed flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-1.5 mt-5 text-[12px] font-medium text-[var(--accent-bright)] group-hover:gap-2.5 transition-all">
                    Baca selengkapnya
                    <ArrowRight size={12} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleModal
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BlogSection;
