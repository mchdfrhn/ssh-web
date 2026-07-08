import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollTo } from "../utils/scroll-utils";

/** Reset scroll to top on every route change */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use Lenis scrollTo (instant) — window.scrollTo doesn't work with Lenis
    scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
