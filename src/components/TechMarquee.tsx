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

const TechItem = ({ tech, isDup }: { tech: typeof techs[number]; isDup?: boolean }) => (
  <div className="marquee-item flex items-center px-5 md:px-7 shrink-0">
    <img
      src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
      alt={isDup ? undefined : `${tech.name} logo`}
      aria-hidden={isDup}
      width={40}
      height={40}
      className="tech-icon w-8 h-8 md:w-10 md:h-10 opacity-40 dark:opacity-30 dark:grayscale hover:grayscale-0 hover:opacity-90 transition-all duration-300"
      loading="lazy"
    />
  </div>
);

const TechMarquee = () => (
  <section className="relative py-5 border-y border-[var(--border-subtle)] overflow-hidden">
    <div className="marquee-track">
      {techs.map((tech) => (
        <TechItem key={tech.slug} tech={tech} />
      ))}
      {techs.map((tech) => (
        <TechItem key={`${tech.slug}__dup`} tech={tech} isDup />
      ))}
    </div>

    {/* Fade edges */}
    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg-root)] to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg-root)] to-transparent z-10 pointer-events-none" />
  </section>
);

export default TechMarquee;
