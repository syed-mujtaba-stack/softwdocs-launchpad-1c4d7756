const technologies = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "FastAPI", "Django", "Flask",
  "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Angular", "Laravel", "WordPress",
  "Tailwind CSS", "C#", "PHP", "OpenAI SDK", "Vercel", "Figma", "MySQL",
];

const TechMarquee = () => {
  return (
    <div className="py-12 border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...technologies, ...technologies].map((tech, i) => (
          <span
            key={i}
            className="mx-8 text-lg font-display font-semibold text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
