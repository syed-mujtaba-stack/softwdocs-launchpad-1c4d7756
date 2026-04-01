import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="section-divider" />
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SoftwDocs" className="h-8 w-auto opacity-80" />
          </div>
          
          <div className="flex items-center justify-center gap-8">
            {["Home", "About", "Services", "Team", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground/50 text-right">
            © 2025 SoftwDocs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
