import projectsBg from "@/assets/ProjectsBg.jpg";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Dilisha – Portfolio Website",
    desc: "A Personal Portfolio",
    image: project1,
    tags: ["Web Design", "React"],
    tall: false,
  },
  {
    title: "Nova Care",
    desc: "AI Medical Chatbot ",
    image: project2,
    tags: ["UI/UX", "Mobile", "API", "Frontend"],
    tall: true,
  },
  {
    title: "AI Safar Sathi",
    desc: "AI Travel Planning App",
    image: project3,
    tags: ["Branding", "Design", "React", "Artificial Intelligence", "API"],
    tall: false,
  },
  {
    title: "Fashion Club Website",
    desc: "Sample project for a fashion club website, showcasing design and development skills.",
    image: project4,
    tags: ["Illustration", "Art", "HTML", "CSS", "UI/UX"],
    tall: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative" style={{ position: 'relative' }}>
      <img src={projectsBg} alt="Projects Background" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, pointerEvents: 'none'}} />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">My Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Projects 💻</h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="break-inside-avoid"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <motion.div
                className="glass-card-solid rounded-3xl overflow-hidden group cursor-pointer"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={`overflow-hidden ${p.tall ? "h-80" : "h-56"}`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-body font-medium px-3 py-1 rounded-full bg-lavender/50 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <motion.button
                    className="font-body text-sm font-medium text-primary inline-flex items-center gap-2 group/btn"
                    whileHover={{ x: 4 }}
                  >
                    View Project
                    <ExternalLink size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
