import { motion } from "framer-motion";

const techs = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
  "PostgreSQL", "Supabase", "Vercel", "Docker", "Figma",
  "Laravel", "MongoDB", "Redis", "Astro", "Prisma",
];

// Duplicate for seamless loop
const doubled = [...techs, ...techs];

const TechMarquee = () => (
  <section className="relative py-8 border-y border-white/[0.04] overflow-hidden">
    <div className="marquee-track">
      {doubled.map((tech, i) => (
        <div
          key={`${tech}-${i}`}
          className="flex items-center gap-3 px-6 shrink-0"
        >
          <span className="w-1 h-1 rounded-full bg-white/[0.10]" />
          <span className="text-[13px] font-medium text-[var(--text-ghost)] tracking-wide whitespace-nowrap">
            {tech}
          </span>
        </div>
      ))}
    </div>

    {/* Fade edges */}
    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg-root)] to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg-root)] to-transparent z-10 pointer-events-none" />
  </section>
);

export default TechMarquee;
