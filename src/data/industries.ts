/* ── Industry configs — each drives an /industri/:slug landing page ── */

export interface IndustryConfig {
  slug: string;
  badge: string;
  headline: string;
  headlineAccent: string;
  subtitle: string;
  painPoints: string[];
  solutions: {
    icon: string; // lucide icon name
    title: string;
    desc: string;
    features: string[];
  }[];
  caseStudy: {
    title: string;
    desc: string;
    result: string;
  };
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
  pricingNote: string;
  waMessage: string;
}

export const industries: Record<string, IndustryConfig> = {
  fnb: {
    slug: "fnb",
    badge: "F&B & Kuliner",
    headline: "Bisnis F&B Anda",
    headlineAccent: "Butuh Order Online?",
    subtitle:
      "Website + WhatsApp otomatis untuk restoran, kafe, dan bisnis kuliner. Pelanggan lihat menu, langsung order — tanpa perlu install app.",
    painPoints: [
      "Bergantung 100% ke GoFood/GrabFood — komisi 20-30% habis di platform",
      "Pelanggan repeat order harus chat manual setiap kali",
      "Menu berubah tapi info di Google Maps ketinggalan jaman",
      "Kompetitor sudah punya website, Anda belum",
    ],
    solutions: [
      {
        icon: "UtensilsCrossed",
        title: "Website Menu + Order",
        desc: "Menu digital interaktif dengan foto HD, harga, dan tombol order langsung ke WhatsApp.",
        features: [
          "Menu kategori (Makanan, Minuman, Dessert)",
          "Foto produk profesional",
          "Tombol WA langsung ke chat",
          "Update menu sendiri via CMS",
        ],
      },
      {
        icon: "MessageCircle",
        title: "WhatsApp Auto-Order",
        desc: "Bot balas otomatis saat pelanggan order — konfirmasi, hitung total, kirim struk.",
        features: [
          "Auto-reply 24/7",
          "Katalog produk di WA Business",
          "Broadcast promo ke pelanggan",
          "Reminder untuk repeat order",
        ],
      },
      {
        icon: "MapPin",
        title: "Google Maps + SEO Lokal",
        desc: "Muncul di pencarian 'restoran dekat sini' — foto, menu, jam buka, semua terupdate.",
        features: [
          "Google Business Profile setup",
          "Foto & menu ter-update",
          "Review management",
          "SEO lokal Jakarta",
        ],
      },
    ],
    caseStudy: {
      title: "Contoh: Restoran Sunda di Jakarta Selatan",
      desc: "Restoran dengan 3 cabang, sebelumnya hanya andalkan GoFood. 30% revenue habis di komisi platform.",
      result:
        "Setelah punya website + WhatsApp order: repeat customer naik 40%, revenue dari channel sendiri naik 2x dalam 3 bulan.",
    },
    testimonial: {
      quote:
        "Dulu saya kira website itu mahal dan ribet. Ternyata Rp 750rb sudah jalan, dan pelanggan lebih suka order langsung ke WA kita daripada lewat GoFood.",
      name: "Pemilik Restoran",
      role: "Jakarta Selatan",
    },
    pricingNote:
      "Paket F&B: Landing page + menu digital + WhatsApp bot — mulai Rp 2.5jt (Paket Go Digital)",
    waMessage:
      "Halo%20SSH%2C%20saya%20punya%20bisnis%20F%26B%20dan%20tertarik%20bikin%20website%20%2B%20WhatsApp%20order",
  },
  klinik: {
    slug: "klinik",
    badge: "Klinik & Kesehatan",
    headline: "Klinik Anda",
    headlineAccent: "Butuh Sistem Janji Temu?",
    subtitle:
      "Website + booking online untuk klinik, praktek dokter, dan layanan kesehatan. Pasien daftar dari HP, tidak perlu antre.",
    painPoints: [
      "Pasien antre panjang karena tidak ada sistem booking",
      "Info layanan & jadwal dokter sulit diakses publik",
      "Tidak ada cara untuk pasien cek hasil lab online",
      "Kompetitor klinik sudah punya app, Anda masih manual",
    ],
    solutions: [
      {
        icon: "CalendarCheck",
        title: "Sistem Booking Online",
        desc: "Pasien pilih dokter, pilih jadwal, booking dari HP. Konfirmasi otomatis via WhatsApp.",
        features: [
          "Kalender jadwal dokter real-time",
          "Booking 24/7 dari website",
          "Reminder H-1 via WA",
          "Antrian digital (no more antre fisik)",
        ],
      },
      {
        icon: "Stethoscope",
        title: "Profil Dokter & Layanan",
        desc: "Tampilkan daftar dokter, spesialisasi, jadwal praktek, dan layanan klinik secara profesional.",
        features: [
          "Profil dokter lengkap",
          "Daftar layanan & harga",
          "FAQ kesehatan",
          "Google Maps integrasi",
        ],
      },
      {
        icon: "FileText",
        title: "Portal Pasien",
        desc: "Pasien bisa cek hasil lab, resep, dan riwayat kunjungan via dashboard aman.",
        features: [
          "Login aman (enkripsi)",
          "Hasil lab PDF",
          "Riwayat kunjungan",
          "Notifikasi hasil keluar",
        ],
      },
    ],
    caseStudy: {
      title: "Contoh: Klinik Gigi di Bandung",
      desc: "Klinik gigi dengan 5 dokter. Sebelumnya, pasien harus telepon untuk booking — sering miss karena admin sibuk.",
      result:
        "Setelah sistem booking online: no-show rate turun 60%, pasien baru dari Google naik 3x.",
    },
    testimonial: {
      quote:
        "Pasien kami sekarang booking dari HP, tidak perlu telepon. Admin kami bisa fokus handle pasien, bukan jawab telepon.",
      name: "Manajer Klinik",
      role: "Bandung",
    },
    pricingNote:
      "Paket Klinik: Website + booking online + WhatsApp reminder — mulai Rp 5jt (Custom Web App)",
    waMessage:
      "Halo%20SSH%2C%20saya%20punya%20klinik%20dan%20tertarik%20bikin%20website%20%2B%20sistem%20booking",
  },
  distributor: {
    slug: "distributor",
    badge: "Distributor & Grosir",
    headline: "Bisnis Distribusi Anda",
    headlineAccent: "Butuh Order Otomatis?",
    subtitle:
      "Website B2B + WhatsApp order untuk distributor, grosir, dan supplier. Agen lihat harga, langsung order — invoice otomatis.",
    painPoints: [
      "Agen/reseller masih order via telepon — rawan salah, lambat",
      "Harga berubah tapi agen masih lihat katalog lama",
      "Tidak ada tracking order — 'barang sudah dikirim belum?'",
      "Invoice manual via Excel — rawan salah hitung",
    ],
    solutions: [
      {
        icon: "Package",
        title: "Katalog Produk B2B",
        desc: "Katalog digital dengan harga grosir, minimum order, dan stok real-time. Agen login, lihat harga khusus mereka.",
        features: [
          "Multi-tier pricing (grosir/ritel)",
          "Stok real-time",
          "Filter & search produk",
          "Download katalog PDF",
        ],
      },
      {
        icon: "ShoppingCart",
        title: "Order & Invoice Otomatis",
        desc: "Agen pilih produk, submit order, sistem generate invoice otomatis. Bayar via transfer/QRIS.",
        features: [
          "Order via website atau WA",
          "Invoice auto-generate PDF",
          "Payment tracking",
          "Order history per agen",
        ],
      },
      {
        icon: "Truck",
        title: "Tracking Pengiriman",
        desc: "Agen bisa cek status pengiriman sendiri — tidak perlu telepon kantor.",
        features: [
          "Status order real-time",
          "Notifikasi WA saat barang dikirim",
          "Resi otomatis",
          "Laporan penjualan bulanan",
        ],
      },
    ],
    caseStudy: {
      title: "Contoh: Distributor Minuman di Surabaya",
      desc: "Distributor dengan 50+ agen. Order masih via telepon/WA manual — admin kewalahan, sering salah input.",
      result:
        "Setelah website B2B: error order turun 90%, admin hemat 4 jam/hari, agen bisa order kapan saja.",
    },
    testimonial: {
      quote:
        "Dulu agen telepon, admin tulis manual, sering salah. Sekarang agen order sendiri di website, langsung masuk sistem.",
      name: "Owner Distributor",
      role: "Surabaya",
    },
    pricingNote:
      "Paket Distributor: Website B2B + order system + WhatsApp notifikasi — mulai Rp 8jt (Custom Web App)",
    waMessage:
      "Halo%20SSH%2C%20saya%20punya%20bisnis%20distributor%20dan%20tertarik%20bikin%20sistem%20order%20otomatis",
  },
};

export const industryList = Object.values(industries);
