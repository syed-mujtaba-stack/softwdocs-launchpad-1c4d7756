import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        scrolled ? "glass border-white/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group relative z-[60]">
            <img src={logo} alt="SoftwDocs" className="h-7 w-auto transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`nav-link ${location.pathname === link.href ? "text-white after:scale-x-100" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="premium-btn px-6 py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase flex items-center gap-2 group shadow-lg shadow-white/5"
            >
              Let's Talk
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-foreground relative z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-2xl z-[55] flex flex-col pt-32 px-8 overflow-y-auto noise-bg"
          >
            <div className="flex flex-col gap-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">Navigation</p>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-display font-bold tracking-tight transition-colors ${
                      location.pathname === link.href ? "text-gradient" : "text-foreground hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto mb-12 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold">Connect</p>
                <div className="flex gap-6">
                  {[
                    { icon: Twitter, href: "https://twitter.com/mujtabaxabbas" },
                    { icon: Github, href: "https://github.com/mujtabaxabbas" },
                    { icon: Linkedin, href: "https://linkedin.com/in/syedmujtabaabbas" },
                  ].map((social, i) => (
                    <motion.a 
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
              <p className="text-[11px] tracking-widest uppercase text-muted-foreground/40 text-left">
                © 2025 SoftwDocs. Crafting Excellence.
              </p>
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
