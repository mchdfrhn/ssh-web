import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { getEnv } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-section py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo />
            </div>
            <p className="text-sm text-muted-foreground">
              Digitalisasi Tanpa Drama
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Layanan", href: "#services" },
                { label: "Portofolio", href: "#portfolio" },
                { label: "Harga", href: "#pricing" },
                { label: "Kontak", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={14} />{" "}
                {getEnv("VITE_CONTACT_EMAIL", "hello@surupan.dev")}
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} />{" "}
                {getEnv("VITE_CONTACT_WHATSAPP_DISPLAY", "+62 812 3456 7890")}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Social</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: getEnv("VITE_SOCIAL_GITHUB_URL", "#") },
                {
                  icon: Linkedin,
                  href: getEnv("VITE_SOCIAL_LINKEDIN_URL", "#"),
                },
                {
                  icon: Instagram,
                  href: getEnv("VITE_SOCIAL_INSTAGRAM_URL", "#"),
                },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-section py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>
            © 2024 Surupan Software House. Built with ❤️ using React + Tailwind
          </span>
          <div className="flex gap-4">
            <span>🔒 SSL Secure</span>
            <span>⚡ Uptime 99.9%</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
