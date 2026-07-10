import { useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────
// Loading skeleton — shimmer effect saat page load
// Shows for ~800ms then fades out, replacing splash screen
// with skeleton layout that matches real content positions
// ─────────────────────────────────────────────────────────────

const ShimmerBar = ({ className }: { className?: string }) => (
  <div
    className={`animate-shimmer rounded-md bg-[var(--border-subtle)] ${className ?? ""}`}
    style={{
      backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)",
      backgroundSize: "200% 100%",
    }}
  />
);

const LoadingSkeleton = () => (
  <div className="min-h-screen bg-[var(--bg-root)] px-6 pt-24 max-w-[1200px] mx-auto">
    {/* Navbar skeleton */}
    <div className="fixed top-0 inset-x-0 h-16 bg-[var(--bg-root)]/80 backdrop-blur-xl z-50 flex items-center justify-between px-6">
      <ShimmerBar className="w-32 h-6" />
      <div className="hidden md:flex gap-4">
        <ShimmerBar className="w-16 h-4" />
        <ShimmerBar className="w-16 h-4" />
        <ShimmerBar className="w-12 h-4" />
        <ShimmerBar className="w-14 h-4" />
      </div>
      <ShimmerBar className="w-28 h-8 rounded-lg" />
    </div>

    {/* Hero skeleton */}
    <div className="flex flex-col items-center gap-6 pt-20">
      <ShimmerBar className="w-48 h-6 rounded-full" />
      <ShimmerBar className="w-[480px] max-w-full h-14" />
      <ShimmerBar className="w-[360px] max-w-full h-14" />
      <ShimmerBar className="w-[280px] max-w-full h-4 mt-2" />
      <div className="flex gap-3 mt-4">
        <ShimmerBar className="w-36 h-11 rounded-xl" />
        <ShimmerBar className="w-32 h-11 rounded-xl" />
      </div>
    </div>

    {/* Stats skeleton */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="p-4 rounded-xl border border-[var(--border-subtle)]">
          <ShimmerBar className="w-10 h-10 rounded-lg mb-3" />
          <ShimmerBar className="w-16 h-7 mb-2" />
          <ShimmerBar className="w-24 h-3" />
        </div>
      ))}
    </div>

    {/* Cards skeleton */}
    <div className="grid md:grid-cols-3 gap-4 mt-16">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="p-5 rounded-xl border border-[var(--border-subtle)]">
          <ShimmerBar className="w-12 h-12 rounded-xl mb-4" />
          <ShimmerBar className="w-32 h-5 mb-3" />
          <ShimmerBar className="w-full h-3 mb-2" />
          <ShimmerBar className="w-3/4 h-3" />
        </div>
      ))}
    </div>
  </div>
);

export default LoadingSkeleton;
