// ─────────────────────────────────────────────────────────────
// Haptic feedback — navigator.vibrate on mobile CTA taps
// No-op on desktop (vibrate API not available)
// ─────────────────────────────────────────────────────────────

export function haptic(style: "light" | "medium" | "heavy" = "light") {
  if (!navigator.vibrate) return;
  const durations = { light: 10, medium: 20, heavy: 40 };
  navigator.vibrate(durations[style]);
}

// React hook for haptic on click
export function useHapticClick(style: "light" | "medium" | "heavy" = "light") {
  return () => haptic(style);
}
