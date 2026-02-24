import { motion } from "framer-motion";

const skills = [
  { name: "Design", level: 92, color: "340, 65%, 65%" },
  { name: "Frontend", level: 88, color: "270, 50%, 70%" },
  { name: "Figma", level: 95, color: "20, 80%, 75%" },
  { name: "Branding", level: 85, color: "350, 50%, 70%" },
  { name: "Motion", level: 80, color: "340, 80%, 80%" },
  { name: "Research", level: 78, color: "270, 40%, 75%" },
];

const CircularProgress = ({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
    >
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={`hsl(${color})`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - (level / 100) * circumference }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
            style={{
              filter: `drop-shadow(0 0 8px hsla(${color}, 0.4))`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl font-bold">{level}%</span>
        </div>
      </div>
      <p className="font-body font-medium text-sm">{name}</p>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">What I know</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">My Skills 🌷</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {skills.map((s, i) => (
            <CircularProgress key={s.name} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
