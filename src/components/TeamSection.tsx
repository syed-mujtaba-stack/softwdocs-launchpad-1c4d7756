import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Minus } from "lucide-react";

const team = [
  {
    name: "Syed Mujtaba Abbas",
    role: "Founder & Lead Developer",
    title: "Full Stack & Agentic AI Developer",
    skills: [
      "React", "Next.js", "Node.js", "TypeScript", "Python", "FastAPI", "Flask", "Django",
      "Docker", "Kubernetes", "OpenAI Agents SDK", "PostgreSQL", "MongoDB", "Vector DB",
      "Tailwind CSS", "Vercel", "Git/GitHub", "Figma", "Sanity CMS", "cPanel",
    ],
    initial: "MA",
  },
  {
    name: "Syeda Noor Fatima",
    role: "Co-Founder & Developer",
    title: "Full Stack & WordPress Expert",
    skills: [
      "React", "Next.js", "Node.js", "TypeScript", "Python", "FastAPI", "Django",
      "Docker", "Kubernetes", "WordPress", "Elementor", "PostgreSQL", "MongoDB",
      "Tailwind CSS", "Vercel", "Git/GitHub", "Figma", "Sanity CMS",
    ],
    initial: "NF",
  },
  {
    name: "Sister #3",
    role: "Co-Founder & Developer",
    title: "Backend & Enterprise Developer",
    skills: [
      "HTML", "CSS", "JavaScript", "TypeScript", "PHP", "XAMPP", "MySQL",
      "Laravel", "WordPress", "Angular", "C#", ".NET",
    ],
    initial: "SD",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 sm:py-32 relative noise-bg" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Minus className="w-6 h-6 text-muted-foreground" />
            <span className="text-[11px] sm:text-[13px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              The Team
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight">
            Meet The <span className="text-gradient-shine">Experts</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-px bg-transparent md:bg-border/30 overflow-hidden">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="premium-card p-8 sm:p-10 group"
            >
              {/* Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-border flex items-center justify-center mb-8 group-hover:border-foreground/20 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent" />
                <span className="text-lg sm:text-xl font-display font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-500 relative z-10">
                  {member.initial}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold tracking-tight text-foreground">{member.name}</h3>
              <p className="text-foreground/60 text-[11px] sm:text-[13px] font-medium tracking-wider uppercase mt-2">{member.role}</p>
              <p className="text-muted-foreground text-sm mt-1 mb-8 font-light">{member.title}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {member.skills.slice(0, 6).map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] sm:text-[11px] tracking-wider uppercase border border-border text-muted-foreground px-3 py-1.5 rounded-full hover:border-foreground/20 hover:text-foreground/70 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
                {member.skills.length > 6 && (
                  <span className="text-[10px] sm:text-[11px] tracking-wider uppercase border border-foreground/20 text-foreground/50 px-3 py-1.5 rounded-full font-medium">
                    +{member.skills.length - 6}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
