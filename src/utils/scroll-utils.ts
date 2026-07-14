// ─────────────────────────────────────────────────────────────
// scroll-utils.ts — shared Lenis instance for smooth scroll
// Any component can import scrollTo() for programmatic scroll
// Falls back to native scrollIntoView if Lenis not loaded
// ─────────────────────────────────────────────────────────────

let lenisInstance: any = null;

export function setLenis(lenis: any) {
  lenisInstance = lenis;
}

export function getLenis() {
  return lenisInstance;
}

export function scrollTo(target: string | number, options?: { offset?: number; duration?: number; immediate?: boolean }) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset: options?.offset ?? -64, // navbar height
      duration: options?.duration ?? 1.2,
      immediate: options?.immediate ?? false,
    });
  } else if (typeof target === "string") {
    // Fallback: native scroll
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
