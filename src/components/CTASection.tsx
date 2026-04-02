import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="premium-card p-16 md:p-24 text-center relative overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] via-transparent to-foreground/[0.02]" />
          
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight mb-6">
              Ready to Build<br />
              <span className="text-gradient-shine">Something Great?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto font-light leading-relaxed mb-10">
              Let's turn your idea into a powerful, scalable product. 
              No project is too ambitious for us.
            </p>
            <div className="flex items-center justify-center gap-5">
              <a
                href="#contact"
                className="premium-btn px-10 py-4 rounded-full font-semibold text-sm tracking-wider uppercase flex items-center gap-3 group"
              >
                Start Your Project
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#services"
                className="premium-btn-outline px-10 py-4 rounded-full font-semibold text-sm tracking-wider uppercase"
              >
                Our Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
