const techs = [
  { name: "Next.js", slug: "nextdotjs", color: "ffffff" },
  { name: "React", slug: "react", color: "61dafb" },
  { name: "TypeScript", slug: "typescript", color: "3178c6" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06b6d4" },
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169e1" },
  { name: "Supabase", slug: "supabase", color: "3ecf8e" },
  { name: "Vercel", slug: "vercel", color: "ffffff" },
  { name: "Docker", slug: "docker", color: "2496ed" },
  { name: "Figma", slug: "figma", color: "f24e1e" },
  { name: "Laravel", slug: "laravel", color: "ff2d20" },
  { name: "MongoDB", slug: "mongodb", color: "47a248" },
  { name: "Redis", slug: "redis", color: "dc382d" },
  { name: "Astro", slug: "astro", color: "bc52ee" },
  { name: "Prisma", slug: "prisma", color: "2d3748" },
];

// Duplicate for seamless loop
const doubled = [...techs, ...techs];

const TechMarquee = () => (
  <section className="relative py-6 border-y border-white/[0.04] overflow-hidden">
    <div className="marquee-track">
      {doubled.map((tech, i) => (
        <div
          key={`${tech.slug}-${i}`}
          className="flex items-center px-4 shrink-0"
        >
          <img
            src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
            alt={`${tech.name} logo`}
            width={28}
            height={28}
            className="opacity-50 hover:opacity-80 transition-opacity"
            loading="lazy"
          />
        </div>
      ))}
    </div>

    {/* Fade edges */}
    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--bg-root)] to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--bg-root)] to-transparent z-10 pointer-events-none" />
  </section>
);

export default TechMarquee;
