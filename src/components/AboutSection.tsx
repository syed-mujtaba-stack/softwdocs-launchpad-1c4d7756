import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Minus, Zap, Target, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Agile workflows ensure rapid development without compromising quality. We ship on time, every time.",
    number: "01",
  },
  {
    icon: Target,
    title: "Precision Built",
    description: "Every line of code crafted with purpose. Scalable, maintainable solutions that grow with your business.",
    number: "02",
  },
  {
    icon: Shield,
    title: "Battle Tested",
    description: "Security-first approach with modern best practices. Your data and applications protected at every level.",
    number: "03",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative noise-bg" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Minus className="w-6 h-6 text-muted-foreground" />
              <span className="text-[13px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                About Us
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Where Expertise
              <br />
              <span className="text-gradient-shine">Meets Innovation</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-end"
          >
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              SoftwDocs is a team of passionate developers specializing in full-stack development, 
              AI solutions, and enterprise-grade web applications. We bring your ideas to life with 
              cutting-edge technology and creative problem-solving that transforms businesses.
            </p>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="premium-card p-10 group cursor-default"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-5xl font-display font-extrabold text-muted-foreground/10 group-hover:text-muted-foreground/20 transition-colors duration-500">
                  {feature.number}
                </span>
                <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
