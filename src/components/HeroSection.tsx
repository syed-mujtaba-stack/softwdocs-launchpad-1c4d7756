import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/[0.02] blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[180px]" />
      
      {/* Animated line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="absolute left-12 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent origin-top hidden lg:block"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl">
          {/* Spacer for navbar */}
          <div className="mb-6" />

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-tight"
            >
              We Craft
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-tight text-gradient-shine"
            >
              Digital
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-tight"
            >
              Experiences<span className="text-muted-foreground">.</span>
            </motion.h1>
          </div>

          {/* Subtext + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-10"
          >
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed font-light">
              Full-stack development, AI solutions & enterprise applications — 
              built with precision and passion by a team of experts.
            </p>

            <div className="flex items-center gap-5 flex-shrink-0">
              <a
                href="#contact"
                className="premium-btn px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase flex items-center gap-3 group"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#services"
                className="premium-btn-outline px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase"
              >
                Explore
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-24 flex flex-wrap gap-16 md:gap-24"
          >
            {[
              { value: "03", label: "Expert\nDevelopers" },
              { value: "20+", label: "Technologies\nMastered" },
              { value: "∞", label: "Commitment\nTo Quality" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2 whitespace-pre-line leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
