import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Gift } from "lucide-react";
import { scrollTo } from "../utils/scroll-utils";
import { haptic } from "../utils/haptic";

// ─────────────────────────────────────────────────────────────
// Exit Intent Popup — triggers when mouse leaves viewport
// Only shows once per session (sessionStorage gated)
// Offers free consultation to capture leaving visitors
// ─────────────────────────────────────────────────────────────

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger when mouse goes above viewport (exit intent)
    if (e.clientY <= 0 && !sessionStorage.getItem("exit_popup_shown")) {
      setShow(true);
      sessionStorage.setItem("exit_popup_shown", "1");
    }
  }, []);

  useEffect(() => {
    // Don't show on mobile (no mouse exit intent)
    if ("ontouchstart" in window) return;
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("exit_popup_shown")) return;

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  // Also show after 45s of engagement (alternative trigger for users who don't exit)
  useEffect(() => {
    if ("ontouchstart" in window) return;
    if (sessionStorage.getItem("exit_popup_shown")) return;

    const timer = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem("exit_popup_shown", "1");
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when popup is visible
  useEffect(() => {
    if (show && !dismissed) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [show, dismissed]);

  const handleCTA = () => {
    haptic("medium");
    setShow(false);
    scrollTo("#contact");
  };

  const handleDismiss = () => {
    setDismissed(true);
    setShow(false);
  };

  return createPortal(
    <AnimatePresence>
      {show && !dismissed && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
          />

          {/* Popup — centering wrapper (no FM, no transform conflict) */}
          <div className="fixed inset-0 z-[9991] flex items-center justify-center pointer-events-none">
            <motion.div
              className="pointer-events-auto w-[90vw] max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
            <div className="relative rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-8 shadow-2xl shadow-black/50">
              {/* Close button */}
              <button
                type="button"
                onClick={handleDismiss}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--border-subtle)] border border-[var(--border-default)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-strong)] transition-all"
                aria-label="Close popup"
              >
                <X size={14} />
              </button>

              {/* Content */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mb-5">
                  <Gift size={24} className="text-[var(--accent-bright)]" />
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-[-0.02em] mb-2">
                  Tunggu Dulu! 🎁
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-6 max-w-xs">
                  Dapatkan <span className="text-[var(--accent-bright)] font-semibold">konsultasi gratis</span> + estimasi biaya untuk project Anda. Tanpa komitmen.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <button
                    type="button"
                    onClick={handleCTA}
                    className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-semibold bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-xl transition-all"
                  >
                    Ya, Konsultasi <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="flex-1 h-11 px-6 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--border-subtle)] border border-[var(--border-default)] hover:bg-[var(--border-default)] rounded-xl transition-all"
                  >
                    Nanti Saja
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ExitIntentPopup;
