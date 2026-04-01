import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  Brain,
  Database,
  Palette,
  Server,
  ShoppingCart,
  Cloud,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "React, Next.js, Angular, Laravel — modern, responsive web applications built for performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform and native mobile apps with seamless user experiences.",
  },
  {
    icon: Brain,
    title: "AI & Agentic Solutions",
    description: "OpenAI Agents SDK, custom AI integrations, intelligent automation for your business.",
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description: "Node.js, FastAPI, Django, Flask — robust backends with PostgreSQL, MongoDB, and more.",
  },
  {
    icon: Palette,
    title: "UI/UX & WordPress",
    description: "Stunning designs with Figma, WordPress, Elementor — pixel-perfect and user-centered.",
  },
  {
    icon: Server,
    title: "DevOps & Deployment",
    description: "Docker, Kubernetes, Vercel, cPanel — streamlined CI/CD and cloud infrastructure.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete online stores with payment integration, inventory management, and analytics.",
  },
  {
    icon: Cloud,
    title: "Cloud & Database Solutions",
    description: "PostgreSQL, MongoDB, Vector DBs, Sanity CMS — scalable data architectures.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Full-Stack <span className="text-gradient">Digital Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From concept to deployment, we cover every aspect of software development 
            with expertise across 20+ technologies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:glow-shadow transition-all duration-500 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-gradient-primary transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
