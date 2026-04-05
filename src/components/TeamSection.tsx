import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Minus, Github, Linkedin, ExternalLink } from "lucide-react";

const team = [
  {
    name: "Syed Mujtaba Abbas",
    role: "Founder & Lead Developer",
    title: "Full Stack & Agentic AI Expert",
    skills: ["Next.js", "Python", "FastAPI", "OpenAI SDK", "Neon DB", "Docker"],
    initial: "MA",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    name: "Syeda Noor Fatima",
    role: "Co-Founder & Developer",
    title: "Full Stack & CMS Architect",
    skills: ["React", "TypeScript", "WordPress", "Directus", "Figma", "Tailwind"],
    initial: "NF",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    name: "Syeda Quratulain Zaidi",
    role: "Co-Founder & Developer",
    title: "Backend & Enterprise Developer",
    skills: ["Laravel", "PHP", "Angular", ".NET", "MySQL", "PostgreSQL"],
    initial: "QZ",
    gradient: "from-orange-500/20 to-rose-500/20",
  },
];

const TeamMemberCard = ({ member, index, isInView }: { member: any, index: number, isInView: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-full"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="h-full bg-background/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col items-start shadow-2xl transition-all duration-500 group-hover:border-primary/30 group-hover:bg-background/60"
      >
        {/* Animated Background Orb */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.gradient} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />

        {/* Morphing Avatar Orb */}
        <div className="relative mb-10">
          <motion.div
            animate={{
              borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "30% 60% 70% 40% / 50% 60% 30% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`w-20 h-20 bg-gradient-to-br ${member.gradient} flex items-center justify-center border border-white/20 shadow-inner`}
          >
            <span className="text-2xl font-display font-bold text-foreground/80 group-hover:text-foreground transition-colors duration-500">
              {member.initial}
            </span>
          </motion.div>
          {/* Status Dot */}
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-4 border-background shadow-lg shadow-emerald-500/20" />
        </div>

        {/* Content */}
        <div style={{ transform: "translateZ(30px)" }} className="flex-1">
          <p className="text-primary text-[10px] sm:text-[12px] font-bold tracking-[0.2em] uppercase mb-3">{member.role}</p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">{member.name}</h3>
          <p className="text-muted-foreground text-sm sm:text-base mt-2 font-light max-w-[280px]">{member.title}</p>
        </div>

        {/* Skills - Premium Badges */}
        <div className="flex flex-wrap gap-2 mt-8">
          {member.skills.map((skill: string) => (
            <span
              key={skill}
              className="text-[10px] tracking-wider uppercase bg-white/5 border border-white/10 text-muted-foreground px-3 py-1.5 rounded-lg group-hover:border-primary/20 group-hover:text-foreground/80 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-4 mt-10 pt-6 border-t border-white/5 w-full">
          <button className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300">
            <Linkedin className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300">
            <Github className="w-4 h-4" />
          </button>
          <div className="ml-auto">
            <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors group/btn">
              Portfolio
              <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Minus className="w-4 h-4 text-primary" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary">
              The Architecture Team
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Designers of <br />
            <span className="text-gradient-shine">Digital Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 perspect-1000">
          {team.map((member, index) => (
            <TeamMemberCard 
              key={member.name} 
              member={member} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
