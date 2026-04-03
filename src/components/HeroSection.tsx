import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subtextY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const glowTopY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const glowBottomY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.6], [0.5, 0]);
  const lineY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-end pb-24 overflow-hidden noise-bg"
    >
      {/* Grid pattern with parallax fade */}
      <motion.div className="absolute inset-0 grid-pattern" style={{ opacity: gridOpacity }} />

      {/* Ambient glows with parallax */}
      <motion.div
        style={{ y: glowTopY }}
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/[0.02] blur-[200px]"
      />
      <motion.div
        style={{ y: glowBottomY }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[180px]"
      />

      {/* Vertical line with parallax */}
      <motion.div
        style={{ y: lineY }}
        className="absolute left-12 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl pt-24 sm:pt-32">
          {/* Headline with parallax */}
          <motion.div style={{ y: headlineY }}>
            <h1 className="font-display text-[clamp(1.5rem,8vw,7rem)] sm:text-[clamp(3rem,10vw,7rem)] font-extrabold leading-[1.1] sm:leading-[0.9] tracking-tighter sm:tracking-tight">
              We Craft
            </h1>
            <h1 className="font-display text-[clamp(1.5rem,8vw,7rem)] sm:text-[clamp(3rem,10vw,7rem)] font-extrabold leading-[1.1] sm:leading-[0.9] tracking-tighter sm:tracking-tight text-gradient-shine">
              Digital
            </h1>
            <h1 className="font-display text-[clamp(1.5rem,8vw,7rem)] sm:text-[clamp(3rem,10vw,7rem)] font-extrabold leading-[1.1] sm:leading-[0.9] tracking-tighter sm:tracking-tight">
              Experiences<span className="text-muted-foreground">.</span>
            </h1>
          </motion.div>

          {/* Subtext + CTA with slower parallax */}
          <motion.div
            style={{ y: subtextY }}
            className="mt-10 sm:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-10"
          >
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-lg leading-relaxed font-light">
              Full-stack development, AI solutions & enterprise applications —{" "}
              built with precision and passion by a team of experts.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 flex-shrink-0">
              <a
                href="#contact"
                className="premium-btn px-8 py-4 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-3 group"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#services"
                className="premium-btn-outline px-8 py-4 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase text-center"
              >
                Explore
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            style={{ y: subtextY }}
            className="mt-20 sm:mt-24 grid grid-cols-2 lg:flex flex-wrap gap-10 md:gap-24"
          >
            {[
              { value: "03", label: "Expert\nDevelopers" },
              { value: "20+", label: "Technologies\nMastered" },
              { value: "∞", label: "Commitment\nTo Quality" },
            ].map((stat, i) => (
              <div key={stat.label} className={`group ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
                <div className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tighter text-foreground">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2 whitespace-pre-line leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
