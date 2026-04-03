import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Minus,
  Cpu,
  Globe,
  Sparkles,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ─── Step 1: Service Selection ────────────────────────────────────────────────
const services = [
  { id: "web", icon: Globe, label: "Web Development", desc: "Next.js, React, full-stack apps" },
  { id: "ai", icon: Cpu, label: "AI Solutions", desc: "Chatbots, automation, ML pipelines" },
  { id: "design", icon: Sparkles, label: "UI/UX Design", desc: "Figma, design systems, prototypes" },
  { id: "wordpress", icon: Globe, label: "WordPress", desc: "Custom themes & WooCommerce" },
];

// ─── Step 2: Budget Selection ─────────────────────────────────────────────────
const budgets = [
  { id: "starter", label: "Starter", range: "$500 – $2K" },
  { id: "growth", label: "Growth", range: "$2K – $10K" },
  { id: "scale", label: "Scale", range: "$10K – $30K" },
  { id: "enterprise", label: "Enterprise", range: "$30K+" },
];

// ─── Step config ──────────────────────────────────────────────────────────────
const STEPS = [
  { number: "01", label: "What do you need?" },
  { number: "02", label: "Tell us about you" },
  { number: "03", label: "Send it" },
];

const SLIDE = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [done, setDone] = useState(false);

  // Form state
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const toggleService = (id: string) =>
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );

  const handleSubmit = () => {
    toast({ title: "Message Sent! 🚀", description: "We'll be in touch within 24 hours." });
    setDone(true);
  };

  const canNext0 = selectedServices.length > 0 && selectedBudget;
  const canNext1 = formData.name && formData.email;

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Minus className="w-6 h-6 text-muted-foreground" />
            <span className="text-[11px] sm:text-[13px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Contact
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight">
            Let's Work <span className="text-gradient-shine">Together</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed font-light max-w-lg">
            3 quick steps and we'll have everything we need to get started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Step progress indicator */}
            <div className="space-y-4">
              {STEPS.map((s, i) => (
                <div key={s.number} className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      done || i < step
                        ? "border-white/40 bg-white/10"
                        : i === step
                        ? "border-white/60 bg-white/5"
                        : "border-white/10 bg-transparent"
                    }`}
                  >
                    {(done || i < step) ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-white/60" />
                    ) : (
                      <span className="text-[10px] font-mono text-white/40">{s.number}</span>
                    )}
                  </div>
                  <span
                    className={`text-sm transition-colors duration-300 ${
                      i === step && !done ? "text-white/80 font-medium" : "text-white/30"
                    }`}
                  >
                    {s.label}
                  </span>
                  {i < STEPS.length - 1 && (
                    <div className="ml-4 h-5 w-px bg-white/10 absolute left-[1.95rem]" />
                  )}
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-5 pt-6 border-t border-white/5">
              {[
                { icon: Mail, label: "Email", value: "contact@softwdocs.com" },
                { icon: Phone, label: "WhatsApp", value: "+92 300 0000000" },
                { icon: MessageSquare, label: "Response", value: "Within 24 Hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-foreground/20 transition-all duration-300">
                    <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{item.label}</p>
                    <p className="text-xs sm:text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Multi-step form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="premium-card p-8 sm:p-10 min-h-[480px] flex flex-col relative overflow-hidden"
          >
            {/* Progress bar */}
            {!done && (
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">
                    Step {step + 1} of 3
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">
                    {Math.round(((step + 1) / 3) * 100)}%
                  </span>
                </div>
                <div className="h-px bg-white/5 w-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${((step + 1) / 3) * 100}%` }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="h-full bg-white/30"
                  />
                </div>
              </div>
            )}

            {/* Sliding content */}
            <div className="flex-1 relative overflow-hidden">
              <AnimatePresence custom={dir} mode="wait">
                {done ? (
                  <motion.div
                    key="done"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="flex flex-col items-center justify-center h-full text-center gap-5 py-10"
                  >
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-white/60" />
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-tight">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                      Thanks {formData.name.split(" ")[0]}! We'll review your project and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setDone(false); setStep(0); setSelectedServices([]); setSelectedBudget(""); setFormData({ name: "", email: "", phone: "", message: "" }); }}
                      className="text-xs text-white/30 hover:text-white/60 transition-colors tracking-widest uppercase mt-4"
                    >
                      Start over
                    </button>
                  </motion.div>
                ) : step === 0 ? (
                  <motion.div key="step0" custom={dir} variants={SLIDE} initial="enter" animate="center" exit="exit"
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} className="space-y-6"
                  >
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight mb-1">What do you need?</h3>
                      <p className="text-white/30 text-xs">Select all that apply</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services.map((s) => {
                        const active = selectedServices.includes(s.id);
                        return (
                          <button
                            key={s.id}
                            onClick={() => toggleService(s.id)}
                            className={`p-4 rounded-xl border text-left transition-all duration-300 group ${
                              active ? "border-white/30 bg-white/5" : "border-white/8 hover:border-white/15 bg-transparent"
                            }`}
                          >
                            <s.icon className={`w-4 h-4 mb-2 transition-colors ${active ? "text-white" : "text-white/30 group-hover:text-white/50"}`} />
                            <p className={`text-xs font-semibold transition-colors ${active ? "text-white" : "text-white/50"}`}>{s.label}</p>
                            <p className="text-[10px] text-white/25 mt-0.5">{s.desc}</p>
                          </button>
                        );
                      })}
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">Budget Range</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgets.map((b) => (
                          <button
                            key={b.id}
                            onClick={() => setSelectedBudget(b.id)}
                            className={`py-2.5 px-3 rounded-lg border text-center transition-all duration-300 ${
                              selectedBudget === b.id ? "border-white/30 bg-white/5" : "border-white/8 hover:border-white/15"
                            }`}
                          >
                            <p className="text-[10px] font-semibold text-white/60">{b.label}</p>
                            <p className="text-[9px] text-white/25 mt-0.5">{b.range}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : step === 1 ? (
                  <motion.div key="step1" custom={dir} variants={SLIDE} initial="enter" animate="center" exit="exit"
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} className="space-y-6"
                  >
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight mb-1">Tell us about you</h3>
                      <p className="text-white/30 text-xs">We'll use this to reach out</p>
                    </div>
                    {[
                      { icon: User, key: "name" as const, label: "Your Name", placeholder: "John Doe", type: "text", required: true },
                      { icon: Mail, key: "email" as const, label: "Email Address", placeholder: "john@example.com", type: "email", required: true },
                      { icon: Phone, key: "phone" as const, label: "Phone / WhatsApp", placeholder: "+92 300 0000000", type: "tel", required: false },
                    ].map((field) => (
                      <div key={field.key} className="relative">
                        <label className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2 block">{field.label}{field.required && <span className="text-white/50 ml-1">*</span>}</label>
                        <div className="flex items-center gap-3 border-b border-white/10 pb-2 focus-within:border-white/30 transition-colors">
                          <field.icon className="w-4 h-4 text-white/20 flex-shrink-0" />
                          <input
                            type={field.type}
                            required={field.required}
                            value={formData[field.key]}
                            onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                            placeholder={field.placeholder}
                            className="w-full bg-transparent text-sm text-foreground placeholder:text-white/20 focus:outline-none"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div key="step2" custom={dir} variants={SLIDE} initial="enter" animate="center" exit="exit"
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} className="space-y-6"
                  >
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight mb-1">Anything else?</h3>
                      <p className="text-white/30 text-xs">A short description helps us prepare better</p>
                    </div>
                    {/* Summary */}
                    <div className="p-4 rounded-xl border border-white/8 bg-white/[0.02] space-y-2">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-white/20 mb-3">Your Selections</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedServices.map((id) => (
                          <span key={id} className="text-[10px] px-2 py-1 rounded-full border border-white/15 text-white/50">
                            {services.find((s) => s.id === id)?.label}
                          </span>
                        ))}
                        {selectedBudget && (
                          <span className="text-[10px] px-2 py-1 rounded-full border border-white/15 text-white/50">
                            {budgets.find((b) => b.id === selectedBudget)?.range}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2 block">Project Details (Optional)</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project idea, timeline, or any specific requirements..."
                        className="w-full bg-transparent border-b border-white/10 focus:border-white/30 pb-2 text-sm text-foreground placeholder:text-white/20 focus:outline-none resize-none transition-colors"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            {!done && (
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                <button
                  onClick={() => go(step - 1)}
                  disabled={step === 0}
                  className="text-xs text-white/30 hover:text-white/60 transition-colors tracking-widest uppercase disabled:opacity-0 disabled:pointer-events-none"
                >
                  Back
                </button>
                {step < 2 ? (
                  <button
                    onClick={() => go(step + 1)}
                    disabled={step === 0 ? !canNext0 : !canNext1}
                    className="premium-btn px-6 py-3 rounded-full font-semibold text-xs tracking-wider uppercase flex items-center gap-2 group disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="premium-btn px-6 py-3 rounded-full font-semibold text-xs tracking-wider uppercase flex items-center gap-2 group"
                  >
                    Send Message
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
