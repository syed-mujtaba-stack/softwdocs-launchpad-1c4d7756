const technologies = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "FastAPI", "Django", "Flask",
  "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Angular", "Laravel", "WordPress",
  "Tailwind CSS", "C#", "PHP", "OpenAI SDK", "Vercel", "Figma", "MySQL",
];

const TechMarquee = () => {
  return (
    <div className="py-8 overflow-hidden relative">
      <div className="section-divider mb-8" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...technologies, ...technologies].map((tech, i) => (
          <span key={i} className="mx-10 text-sm font-heading font-medium tracking-[0.15em] uppercase text-muted-foreground/30 hover:text-foreground transition-colors duration-500 cursor-default">
            {tech}
          </span>
        ))}
      </div>
      <div className="section-divider mt-8" />
    </div>
  );
};

export default TechMarquee;
