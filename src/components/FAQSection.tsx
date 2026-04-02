import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Minus, Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "We work with React, Next.js, Angular, Node.js, Python (FastAPI, Django, Flask), Laravel, WordPress, Docker, Kubernetes, and many more. Our stack covers frontend, backend, AI, DevOps, and cloud infrastructure.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A landing page can be delivered in 1-2 weeks, while full-stack applications typically take 4-12 weeks. We provide detailed timelines after our discovery phase.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Absolutely. We offer maintenance packages that include bug fixes, feature updates, performance monitoring, and technical support to keep your application running smoothly.",
  },
  {
    question: "Can you integrate AI into existing applications?",
    answer: "Yes. We specialize in AI integrations using OpenAI Agents SDK, custom machine learning models, and intelligent automation that can be layered into your existing infrastructure.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing — fixed-price for well-defined projects and hourly rates for ongoing development. Every project begins with a free consultation to scope requirements and provide a transparent quote.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative noise-bg" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Minus className="w-6 h-6 text-muted-foreground" />
            <span className="text-[13px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              FAQ
            </span>
            <Minus className="w-6 h-6 text-muted-foreground" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Common <span className="text-gradient-shine">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-border/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-display text-base font-semibold tracking-tight pr-8 group-hover:text-foreground transition-colors">
                  {faq.question}
                </span>
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0 group-hover:border-foreground/30 transition-all duration-300">
                  {openIndex === index ? (
                    <X className="w-3.5 h-3.5 text-muted-foreground" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-muted-foreground" />
                  )}
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <p className="text-sm text-muted-foreground leading-relaxed font-light pb-6">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
