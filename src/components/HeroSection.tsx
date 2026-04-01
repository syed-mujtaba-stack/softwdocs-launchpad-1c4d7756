import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            Transforming Ideas Into Digital Reality
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          We Build{" "}
          <span className="text-gradient">Digital</span>
          <br />
          Solutions That{" "}
          <span className="text-gradient">Matter</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Full-stack development, AI solutions, and cutting-edge web applications.
          We turn your vision into powerful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity glow-shadow"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#services"
            className="border border-border px-8 py-4 rounded-xl font-semibold text-lg text-foreground hover:bg-secondary transition-colors flex items-center gap-2"
          >
            <Code2 className="w-5 h-5" />
            Our Services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "3+", label: "Expert Developers" },
            { value: "20+", label: "Technologies" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient font-display">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
