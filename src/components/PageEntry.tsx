import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SSHLogo from "./SSHLogo";

const PageEntry = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Short splash then reveal
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-[var(--bg-root)]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Animated logo */}
              <div className="relative">
                <SSHLogo size={48} showText={false} />
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-[var(--accent-bright)]"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                />
              </div>
              {/* Loading bar */}
              <div className="w-32 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--accent)] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageEntry;
