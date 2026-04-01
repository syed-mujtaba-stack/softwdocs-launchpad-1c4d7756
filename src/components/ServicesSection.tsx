import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Minus, ArrowUpRight, Globe, Smartphone, Brain, Database, Palette, Server, ShoppingCart, Cloud } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", description: "React, Next.js, Angular, Laravel — modern, responsive applications built for performance." },
  { icon: Smartphone, title: "Mobile Apps", description: "Cross-platform and native mobile apps with seamless user experiences." },
  { icon: Brain, title: "AI Solutions", description: "OpenAI Agents SDK, custom AI integrations, intelligent automation." },
  { icon: Database, title: "Backend & APIs", description: "Node.js, FastAPI, Django, Flask — robust backends with PostgreSQL, MongoDB." },
  { icon: Palette, title: "UI/UX Design", description: "Stunning designs with Figma, WordPress, Elementor — pixel-perfect and user-centered." },
  { icon: Server, title: "DevOps", description: "Docker, Kubernetes, Vercel, cPanel — streamlined CI/CD and cloud infrastructure." },
  { icon: ShoppingCart, title: "E-Commerce", description: "Complete online stores with payment integration and analytics." },
  { icon: Cloud, title: "Cloud & Data", description: "PostgreSQL, MongoDB, Vector DBs, Sanity CMS — scalable architectures." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Minus className="w-6 h-6 text-muted-foreground" />
            <span className="text-[13px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Services
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              What We <span className="text-gradient-shine">Build</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md font-light leading-relaxed">
              From concept to deployment, we cover every dimension of software development.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="premium-card p-8 group cursor-pointer relative overflow-hidden"
            >
              {/* Hover line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/0 to-transparent group-hover:via-foreground/30 transition-all duration-700" />
              
              <div className="flex items-center justify-between mb-6">
                <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/0 group-hover:text-muted-foreground transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="font-display text-base font-bold mb-3 tracking-tight group-hover:text-foreground transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
