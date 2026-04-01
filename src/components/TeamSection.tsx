import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, ExternalLink } from "lucide-react";

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
    gradient: "from-white to-gray-400",
    initial: "SM",
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
    gradient: "from-gray-300 to-gray-500",
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
    gradient: "from-gray-400 to-gray-600",
    initial: "SD",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Meet The <span className="text-gradient">Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A powerhouse team of developers with combined expertise across 20+ technologies 
            and frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 card-shadow group"
            >
              {/* Avatar */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl font-bold font-display text-primary-foreground">
                  {member.initial}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold">{member.name}</h3>
              <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
              <p className="text-muted-foreground text-sm mt-1 mb-5">{member.title}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {member.skills.slice(0, 8).map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
                {member.skills.length > 8 && (
                  <span className="text-xs bg-secondary text-primary px-2.5 py-1 rounded-md font-medium">
                    +{member.skills.length - 8} more
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
