import { Instagram, Linkedin } from "lucide-react";
import SSHLogo from "./SSHLogo";

const links = {
  nav: [
    { label: "Layanan", href: "#services" },
    { label: "Portofolio", href: "#portfolio" },
    { label: "Harga", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "Kontak", href: "#contact" },
  ],
  industri: [
    { label: "F&B & Kuliner", href: "/industri/fnb" },
    { label: "Klinik & Kesehatan", href: "/industri/klinik" },
    { label: "Distributor & Grosir", href: "/industri/distributor" },
    { label: "Template Library", href: "/templates" },
  ],
};

const Footer = () => (
  <footer className="relative border-t border-white/[0.06]">
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="mb-3">
            <SSHLogo size={24} showText={true} />
          </div>
          <p className="text-[13px] text-[var(--text-muted)] max-w-sm leading-relaxed">
            Digitalisasi Tanpa Drama. Solusi digital end-to-end untuk UMKM,
            startup, dan korporat — dengan harga transparan dan hasil nyata.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[11px] font-medium text-[var(--text-ghost)] uppercase tracking-[0.15em] mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {links.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Industri Links */}
        <div>
          <h4 className="text-[11px] font-medium text-[var(--text-ghost)] uppercase tracking-[0.15em] mb-4">
            Untuk Industri
          </h4>
          <ul className="space-y-2.5">
            {links.industri.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[11px] font-medium text-[var(--text-ghost)] uppercase tracking-[0.15em] mb-4">
            Contact
          </h4>
          <ul className="space-y-2.5">
            <li>
              <a
                href="mailto:halo@surupan.tech"
                className="text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                halo@surupan.tech
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6285771826637"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                +62 857 7182 6637
              </a>
            </li>
          </ul>

          <div className="flex gap-2 mt-4">
            <a
              href="https://www.linkedin.com/company/surupan-software-house"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-md bg-white/[0.03] border border-white/[0.06] flex items-center justify-center hover:border-white/[0.10] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} className="text-[var(--text-muted)]" />
            </a>
            <a
              href="https://www.instagram.com/surupansh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-md bg-white/[0.03] border border-white/[0.06] flex items-center justify-center hover:border-white/[0.10] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={14} className="text-[var(--text-muted)]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[12px] text-[var(--text-ghost)]">
          &copy; {new Date().getFullYear()} Surupan Software House. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[11px] text-[var(--text-ghost)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
            SSL Secure
          </span>
          <span className="text-[11px] text-[var(--text-ghost)]">
            Uptime 99.9%
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
