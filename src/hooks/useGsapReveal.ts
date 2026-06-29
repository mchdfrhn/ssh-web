import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface RevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  trigger?: string;
}

export function useGsapReveal(options: RevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: options.y ?? 40,
        x: options.x ?? 0,
        opacity: options.opacity ?? 0,
        scale: options.scale ?? 1,
        duration: options.duration ?? 0.7,
        delay: options.delay ?? 0,
        ease: options.ease ?? "power3.out",
        scrollTrigger: {
          trigger: options.trigger ?? el,
          start: "top 85%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return ref;
}

export function useGsapStagger(options: {
  childSelector: string;
  stagger?: number;
  y?: number;
  duration?: number;
  ease?: string;
} = { childSelector: ".stagger-child" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    const children = el.querySelectorAll(options.childSelector);
    if (!children.length) return;

    const ctx = gsap.context(() => {
      gsap.from(children, {
        y: options.y ?? 30,
        opacity: 0,
        duration: options.duration ?? 0.6,
        stagger: options.stagger ?? 0.08,
        ease: options.ease ?? "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return ref;
}
