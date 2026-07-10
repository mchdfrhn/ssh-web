import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import SSHLogo from "./SSHLogo";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { scrollTo } from "../utils/scroll-utils";
import { haptic } from "../utils/haptic";

const navLinks = [
  { label: "Layanan", href: "#services" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Harga", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Kontak", href: "#contact" },
];

const industryLinks = [
  { label: "F&B & Kuliner", to: "/industri/fnb" },
  { label: "Klinik & Kesehatan", to: "/industri/klinik" },
  { label: "Distributor & Grosir", to: "/industri/distributor" },
];

const sections = ["services", "portfolio", "pricing", "blog", "contact"];

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Add logic to check system preference if no theme in local storage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    haptic("light");
  };

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleNavClick = useCallback((href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    haptic("light");

    const sectionId = href.replace("#", "");
    const el = document.getElementById(sectionId);

    if (el) {
      // Section exists on current page — scroll to it
      scrollTo(href, { offset: -64 });
    } else {
      // Section doesn't exist (sub-page) — navigate home then scroll
      navigate("/");
      // Wait for route change + render, then scroll
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [navigate]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Click outside closes dropdown
  useEffect(() => {
    if (!dropdownOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [dropdownOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg-root)]/80 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-lg shadow-[var(--border-default)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 text-[var(--text-primary)]"
            onClick={() => { if (window.location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <SSHLogo size={28} showText={true} />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`relative px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    isActive
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md bg-[var(--border-subtle)] border border-[var(--border-default)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Industri dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className={`flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  dropdownOpen
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                }`}
              >
                Industri
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-1 w-52 rounded-xl bg-[var(--bg-root)]/90 backdrop-blur-xl border border-[var(--border-default)] shadow-xl shadow-[var(--border-subtle)] overflow-hidden z-[9999] [transform:translateZ(0)]"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {industryLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2.5 text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="h-px bg-[var(--border-default)]" />
                    <Link
                      to="/templates"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 text-[13px] text-[var(--accent-bright)] hover:bg-[var(--border-subtle)] transition-all"
                    >
                      📦 Template Library
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA + Mobile toggle + Theme toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--border-subtle)] border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-default)] transition-all"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              )}
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick("#contact", e)}
              className="hidden md:inline-flex items-center gap-1.5 h-8 px-4 text-[12px] font-semibold bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-all"
            >
              Mulai Project <ArrowRight size={12} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--border-subtle)] border border-[var(--border-default)] text-[var(--text-secondary)]"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--bg-root)]/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="text-[24px] font-bold text-[var(--text-primary)] tracking-[-0.03em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Industri links in mobile */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-ghost)]">
                  Industri
                </span>
                {industryLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="text-[18px] font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/templates"
                  onClick={() => setOpen(false)}
                  className="text-[16px] font-medium text-[var(--accent-bright)] hover:text-[var(--accent-hover)] transition-colors"
                >
                  📦 Template Library
                </Link>
              </motion.div>

              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick("#contact", e)}
                className="mt-4 inline-flex items-center gap-2 h-11 px-8 text-[14px] font-semibold bg-[var(--accent)] text-white rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Mulai Project <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
