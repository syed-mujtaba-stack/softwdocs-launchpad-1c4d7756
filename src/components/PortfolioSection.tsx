import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "EcoStream Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Next-generation environmental monitoring system with real-time data visualization."
  },
  {
    title: "AI Chat Assistant",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    description: "Deep learning based customer support agent with natural language understanding."
  },
  {
    title: "Nexus ERP",
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea10c3b?auto=format&fit=crop&q=80&w=800",
    description: "Custom enterprise resource planning software for large-scale manufacturing."
  },
  {
    title: "Pulse Mobile App",
    category: "Mobile Solutions",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    description: "Real-time health tracking and wellness platform with biometric integration."
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="section-title">Selected Works</h2>
            <p className="section-description">
              A showcase of our precision-engineered solutions that blend cutting-edge 
              technology with human-centric design.
            </p>
          </div>
          <button className="flex items-center gap-2 group text-sm font-bold tracking-widest uppercase hover:text-white transition-colors">
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 bg-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-14 h-14 rounded-full glass border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-bold mb-2">{project.category}</p>
                  <h3 className="text-2xl font-display font-bold group-hover:text-gradient transition-all">{project.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-light leading-relaxed max-w-md">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default PortfolioSection;
