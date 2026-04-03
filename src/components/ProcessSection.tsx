import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    description:
      "We deep-dive into your goals, target audience, and technical requirements. A thorough discovery phase ensures we build the right thing — not just any thing.",
    details: ["Requirements Analysis", "Competitor Research", "Technical Scoping", "Timeline & Budget Planning"],
    color: "from-white/5 to-white/[0.02]",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    subtitle: "Pixel-Perfect Before Code",
    description:
      "Wireframes and high-fidelity prototypes crafted in Figma. Every screen, every interaction — approved by you before a single line of code is written.",
    details: ["UX Wireframing", "UI Prototype in Figma", "Client Approval Rounds", "Design System Setup"],
    color: "from-white/5 to-white/[0.02]",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    subtitle: "Engineering with Precision",
    description:
      "Full-stack engineering with modern frameworks. Clean architecture, comprehensive testing, and rigorous code reviews at every stage.",
    details: ["Agile Sprints", "Daily Progress Updates", "Code Reviews", "Automated Testing"],
    color: "from-white/5 to-white/[0.02]",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Scale",
    subtitle: "Deployed. Monitored. Growing.",
    description:
      "Seamless deployment via CI/CD pipelines, real-time monitoring, and dedicated post-launch support. We don't just ship — we scale.",
    details: ["CI/CD Deployment", "Performance Monitoring", "Post-Launch Support", "Growth Optimization"],
    color: "from-white/5 to-white/[0.02]",
  },
];

const TimelineStep = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative grid lg:grid-cols-2 gap-0 items-center min-h-[320px]"
    >
      {/* Step number — centered on the timeline axis */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-14 h-14 rounded-full border border-white/20 bg-background flex items-center justify-center relative"
        >
          <step.icon className="w-5 h-5 text-white/60" />
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="absolute -inset-2 rounded-full border border-white/5"
          />
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono mt-2"
        >
          {step.number}
        </motion.span>
      </div>

      {/* Left content (even) or empty (odd) */}
      <div className={isEven ? "lg:pr-24 xl:pr-32" : "hidden lg:block"}>
        {isEven && <StepContent step={step} index={index} isInView={isInView} direction="right" />}
      </div>

      {/* Right content (odd) or empty (even) */}
      <div className={!isEven ? "lg:pl-24 xl:pl-32" : "hidden lg:block"}>
        {!isEven && <StepContent step={step} index={index} isInView={isInView} direction="left" />}
      </div>

      {/* Mobile layout — always full width */}
      <div className="lg:hidden col-span-2">
        <StepContent step={step} index={index} isInView={isInView} direction="up" />
      </div>
    </div>
  );
};

const StepContent = ({
  step,
  index,
  isInView,
  direction,
}: {
  step: typeof steps[0];
  index: number;
  isInView: boolean;
  direction: "left" | "right" | "up";
}) => {
  const xInitial = direction === "left" ? 40 : direction === "right" ? -40 : 0;
  const yInitial = direction === "up" ? 30 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: xInitial, y: yInitial }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
      className="premium-card p-8 lg:p-10 group hover:border-white/10 transition-all duration-500"
    >
      {/* Mobile step icon */}
      <div className="flex items-center gap-4 mb-6 lg:hidden">
        <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center">
          <step.icon className="w-4 h-4 text-white/60" />
        </div>
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono">{step.number}</span>
      </div>

      <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium mb-2">{step.subtitle}</p>
      <h3 className="font-display text-2xl lg:text-3xl font-extrabold tracking-tight mb-4">{step.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed font-light mb-8">{step.description}</p>

      <ul className="space-y-2">
        {step.details.map((detail, i) => (
          <motion.li
            key={detail}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
            className="flex items-center gap-3 text-xs text-white/40 group-hover:text-white/50 transition-colors"
          >
            <ArrowRight className="w-3 h-3 text-white/20 flex-shrink-0" />
            {detail}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // The vertical line fills as you scroll through the section
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 relative noise-bg">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 sm:mb-28 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-white/30" />
            <span className="text-[11px] sm:text-[13px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Process
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight">
            How We <span className="text-gradient-shine">Deliver</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed font-light">
            A proven 4-step process refined across dozens of projects — from idea to launch, nothing is left to chance.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical scroll progress line (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.05]">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-white/30 via-white/10 to-transparent origin-top"
            />
          </div>

          <div className="flex flex-col gap-16 sm:gap-24">
            {steps.map((step, index) => (
              <TimelineStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
