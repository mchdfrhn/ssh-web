import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => (
  <>
    <Navbar />
    <main className="flex items-center justify-center" style={{ minHeight: "calc(100vh - 128px)" }}>
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[80px] md:text-[120px] font-black tracking-[-0.05em] text-[var(--text-primary)] leading-none mb-4">
          404
        </h1>
        <p className="text-[16px] text-[var(--text-muted)] mb-8">
          Halaman yang Anda cari tidak ditemukan.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 h-10 px-6 text-[13px] font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-all"
          >
            <Home size={14} />
            Kembali ke Beranda
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 h-10 px-6 text-[13px] font-medium bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-[var(--text-secondary)] rounded-lg transition-all"
          >
            <ArrowLeft size={14} />
            Kembali
          </button>
        </div>
      </motion.div>
    </main>
    <Footer />
  </>
);

export default NotFound;
