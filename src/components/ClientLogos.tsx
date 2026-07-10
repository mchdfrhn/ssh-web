import { motion } from "framer-motion";

const clients = [
  {
    name: "STTPU",
    src: "/logos/sttpu.webp",
    fallback: "/logos/sttpu.png",
    alt: "Logo STT Pekerjaan Umum Jakarta",
    h: "h-14 md:h-16",
  },
  {
    name: "Pusdatin Kementerian PU",
    src: "/logos/pusdatin.webp",
    fallback: "/logos/pusdatin.png",
    alt: "Logo Pusdatin Kementerian PUPR",
    h: "h-6 md:h-8",
  },
];

const ClientLogos = () => (
  <section className="relative py-10 border-y border-[var(--border-subtle)]">
    <div className="max-w-[1200px] mx-auto px-6">
      <motion.p
        className="text-center text-[11px] font-medium text-[var(--text-ghost)] uppercase tracking-[0.2em] mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Dipercaya oleh
      </motion.p>
      <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
        {clients.map((client, i) => (
          <motion.div
            key={i}
            className={`flex items-center ${client.h}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <img
              src={client.src}
              alt={client.alt}
              className="h-full w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-300"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget;
                if (img.dataset.retried) return;
                img.dataset.retried = "1";
                if (img.src !== client.fallback) img.src = client.fallback;
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientLogos;
