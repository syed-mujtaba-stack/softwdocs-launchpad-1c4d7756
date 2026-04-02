import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Minus, MessageSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery",
    description: "We deep-dive into your vision, goals, and requirements to build a solid foundation.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description: "Wireframes and prototypes crafted in Figma — pixel-perfect before a single line of code.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description: "Full-stack engineering with modern frameworks, clean architecture, and rigorous testing.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Scale",
    description: "Seamless deployment with CI/CD, monitoring, and ongoing support to scale your product.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 relative noise-bg" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Minus className="w-6 h-6 text-muted-foreground" />
            <span className="text-[11px] sm:text-[13px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Process
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight">
            How We <span className="text-gradient-shine">Deliver</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border/50 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="premium-card p-6 sm:p-8 text-center group relative"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-border mx-auto mb-6 flex items-center justify-center group-hover:border-foreground/30 transition-all duration-500 relative bg-background">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
                </div>
                <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-muted-foreground/40 font-mono block mb-3">
                  {step.number}
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold mb-3 tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
