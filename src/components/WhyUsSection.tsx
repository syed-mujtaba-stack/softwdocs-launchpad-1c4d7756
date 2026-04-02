import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Minus, CheckCircle2 } from "lucide-react";

const reasons = [
  "End-to-end development — from idea to deployment",
  "AI-powered solutions with OpenAI Agents SDK",
  "Full-stack mastery across 20+ technologies",
  "Pixel-perfect UI/UX with modern design systems",
  "DevOps & cloud infrastructure expertise",
  "Dedicated team — no outsourcing, ever",
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Minus className="w-6 h-6 text-muted-foreground" />
              <span className="text-[13px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                Why SoftwDocs
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-6">
              Built Different.<br />
              <span className="text-gradient-shine">Delivered Better.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              We're not just developers — we're partners in your success. Every project gets our 
              full attention, creative energy, and technical expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <CheckCircle2 className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {reason}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
