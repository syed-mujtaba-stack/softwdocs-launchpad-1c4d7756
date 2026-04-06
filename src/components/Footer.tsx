import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Process", href: "/process" },
      { label: "Contact", href: "/contact" },
    ],
    capabilities: [
      { label: "Web Development", href: "/services" },
      { label: "AI & Machine Learning", href: "/services" },
      { label: "Enterprise Solutions", href: "/services" },
      { label: "WordPress Expertise", href: "/services" },
    ],
    social: [
      { icon: Twitter, href: "https://twitter.com/mujtabaxabbas", label: "Twitter" },
      { icon: Github, href: "https://github.com/mujtabaxabbas", label: "GitHub" },
      { icon: Linkedin, href: "https://linkedin.com/in/syedmujtabaabbas", label: "LinkedIn" },
    ]
  };

  return (
    <footer className="relative bg-background pt-24 pb-12 noise-bg overflow-hidden">
      <div className="section-divider absolute top-0 left-0 w-full" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block group mb-8">
              <img src={logo} alt="SoftwDocs" className="h-8 w-auto opacity-90 transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed font-light max-w-xs">
              Crafting high-performance digital experiences with precision engineering 
              and AI-powered innovation. Available worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase mb-8 text-foreground">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-4 h-px bg-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase mb-8 text-foreground">Capabilities</h4>
            <ul className="space-y-4">
              {footerLinks.capabilities.map((service) => (
                <li key={service.label}>
                  <Link to={service.href} className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-4 h-px bg-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase mb-8 text-foreground">Connect</h4>
            <div className="space-y-6">
              <a href="mailto:contact@softwdocs.com" className="group block">
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">Email</p>
                <div className="flex items-center gap-2 text-sm font-medium decoration-border/50 underline-offset-4 group-hover:underline transition-all">
                  contact@softwdocs.com
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>
              <div className="flex items-center gap-4 pt-2">
                {footerLinks.social.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                    aria-label={item.label}
                  >
                    <item.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground/50 order-2 sm:order-1">
            © {currentYear} SoftwDocs. All rights reserved.
          </p>
          <div className="flex items-center gap-6 sm:gap-8 order-1 sm:order-2 flex-wrap justify-center">
            <Link to="/privacy" className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 hover:text-foreground/70 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 hover:text-foreground/70 transition-colors">Terms</Link>
            <Link to="/cookies" className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 hover:text-foreground/70 transition-colors">Cookies</Link>
            <Link to="/refund" className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 hover:text-foreground/70 transition-colors">Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
