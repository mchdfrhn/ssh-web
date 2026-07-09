import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { scrollTo } from "../utils/scroll-utils";
import { haptic } from "../utils/haptic";

// ─────────────────────────────────────────────────────────────
// StickyCTA — floating WhatsApp-style button
// Appears after scrolling 400px, bottom-right corner
// Pulses gently to attract attention
// ─────────────────────────────────────────────────────────────

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    haptic("medium");
    // Open WhatsApp with pre-filled message
    const waUrl = "https://wa.me/6285771826637?text=Halo%20Surupan%2C%20saya%20tertarik%20dengan%20layanan%20Anda";
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors group"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          aria-label="Chat WhatsApp"
        >
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />

          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />

          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 text-xs font-medium bg-[var(--bg-surface)] text-[var(--text-primary)] rounded-lg border border-white/[0.06] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Chat Kami 💬
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
