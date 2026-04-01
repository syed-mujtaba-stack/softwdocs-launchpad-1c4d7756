import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Clock, Minus, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Minus className="w-6 h-6 text-muted-foreground" />
            <span className="text-[13px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Contact
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Let's Work <span className="text-gradient-shine">Together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-px bg-border/30 rounded-2xl overflow-hidden">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="premium-card p-10 lg:p-14 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 tracking-tight">
                Have a project in mind?
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light mb-12">
                Whether you need a full-stack web application, AI-powered solution, 
                or a stunning WordPress site — our team delivers excellence.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "contact@softwdocs.com" },
                { icon: MapPin, label: "Location", value: "Available Worldwide" },
                { icon: Clock, label: "Response", value: "Within 24 Hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-foreground/20 transition-all duration-300">
                    <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="premium-card p-10 lg:p-14 space-y-8"
          >
            {[
              { id: "name", label: "Your Name", type: "text", placeholder: "John Doe", key: "name" as const },
              { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com", key: "email" as const },
            ].map((field) => (
              <div key={field.id}>
                <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3 block">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={formData[field.key]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/30 transition-colors text-sm"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div>
              <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3 block">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/30 transition-colors resize-none text-sm"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="premium-btn w-full py-4 rounded-full font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-3 group mt-4"
            >
              Send Message
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
