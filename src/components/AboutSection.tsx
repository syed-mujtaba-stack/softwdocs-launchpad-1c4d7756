import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "We deliver high-quality projects on time, every time. Our agile workflow ensures rapid development without compromising quality.",
  },
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Every line of code is crafted with purpose. We build scalable, maintainable solutions that grow with your business.",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Security-first approach with modern best practices. Your data and applications are protected at every level.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Where <span className="text-gradient">Expertise</span> Meets Innovation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            SoftwDocs is a team of passionate developers specializing in full-stack development, 
            AI solutions, and enterprise-grade web applications. We bring your ideas to life with 
            cutting-edge technology and creative problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 card-shadow group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
