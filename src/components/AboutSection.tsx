import { motion } from "framer-motion";
import { Sparkles, Heart, Palette, Eye } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const traits = [
  { icon: Sparkles, label: "Creative", desc: "Bringing ideas to life" },
  { icon: Heart, label: "Passionate", desc: "Love what I do" },
  { icon: Palette, label: "Detail-Oriented", desc: "Pixel perfection" },
  { icon: Eye, label: "Ambitious", desc: "Always growing" },
];

const skills = [
  { name: "UI/UX Design", level: 92 },
  { name: "React & TypeScript", level: 88 },
  { name: "Figma & Adobe Suite", level: 95 },
  { name: "Branding & Identity", level: 85 },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Get to know me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">About Me 💎</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden glow-border animate-glow-pulse">
                <img src={profileImg} alt="Dilisha" className="w-full h-full object-cover" />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-pulse" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-foreground/80 leading-relaxed mb-8 text-lg">
              I'm a creative designer and developer who loves transforming ideas into stunning
              digital experiences. With a keen eye for aesthetics and a passion for clean code,
              I bridge the gap between beautiful design and functional technology.
            </p>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {traits.map((t, i) => (
                <motion.div
                  key={t.label}
                  className="glass-card-solid rounded-2xl p-4 flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="w-10 h-10 rounded-xl bg-blush flex items-center justify-center">
                    <t.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-sm">{t.label}</p>
                    <p className="font-body text-xs text-muted-foreground">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skill Bars */}
            <div className="space-y-4">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                >
                  <div className="flex justify-between font-body text-sm mb-1.5">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-skill)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 + 0.5, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
