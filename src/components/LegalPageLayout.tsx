import { motion } from "framer-motion";
import { Minus, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface LegalSection {
  title: string;
  content: string | string[];
}

interface LegalPageLayoutProps {
  tag: string;
  title: string;
  titleHighlight: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

const LegalPageLayout = ({ tag, title, titleHighlight, lastUpdated, intro, sections }: LegalPageLayoutProps) => {
  return (
    <section className="relative min-h-screen pt-32 pb-24 noise-bg">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.015] blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Minus className="w-6 h-6 text-muted-foreground" />
            <span className="text-[11px] sm:text-[13px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              {tag}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-4">
            {title} <span className="text-gradient-shine">{titleHighlight}</span>
          </h1>
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/50">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="premium-card p-8 sm:p-10 mb-8"
          >
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
              {intro}
            </p>
          </motion.div>

          {/* Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
              className="mb-6"
            >
              <div className="premium-card p-8 sm:p-10 group">
                {/* Section number + title */}
                <div className="flex items-start gap-4 mb-5">
                  <span className="text-[10px] font-mono text-muted-foreground/30 mt-1.5 flex-shrink-0 tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground">
                    {section.title}
                  </h2>
                </div>

                {/* Section content */}
                <div className="pl-10">
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-3">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/40 mt-2.5 flex-shrink-0" />
                          <p className="text-muted-foreground text-sm leading-relaxed font-light">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {section.content}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 premium-card p-8 sm:p-10 text-center"
          >
            <p className="text-muted-foreground text-sm leading-relaxed font-light mb-6">
              If you have any questions about this document, please reach out to us.
            </p>
            <Link
              to="/contact"
              className="premium-btn px-8 py-3 rounded-full font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2 group"
            >
              Contact Us
              <ArrowLeft className="w-3.5 h-3.5 rotate-180 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LegalPageLayout;
