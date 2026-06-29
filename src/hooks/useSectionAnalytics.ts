import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
// useSectionAnalytics — track section visibility via IO
// Logs section name + visibility duration to console
// Replace console.log with real analytics (GA4, Plausible, etc.)
// ─────────────────────────────────────────────────────────────

interface SectionEvent {
  section: string;
  visible: boolean;
  duration?: number;
  timestamp: number;
}

const visibleSections = new Map<string, number>();

function trackSection(name: string, visible: boolean) {
  const now = Date.now();
  const event: SectionEvent = { section: name, visible, timestamp: now };

  if (visible) {
    visibleSections.set(name, now);
  } else {
    const enteredAt = visibleSections.get(name);
    if (enteredAt) {
      event.duration = now - enteredAt;
      visibleSections.delete(name);
    }
  }

  // ── Replace with your analytics provider ──
  // GA4: gtag('event', 'section_view', { section_name: name, duration: event.duration });
  // Plausible: plausible('Section View', { props: { section: name } });
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${visible ? "👁️ Enter" : "🚶 Leave"}: ${name}${event.duration ? ` (${(event.duration / 1000).toFixed(1)}s)` : ""}`);
  }
}

export function useSectionAnalytics(sectionName: string) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        trackSection(sectionName, entry.isIntersecting);
      },
      { threshold: 0.3 } // 30% visible = "viewed"
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionName]);

  return ref;
}
