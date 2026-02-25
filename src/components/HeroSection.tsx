import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Github, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const subtitles = [
  "UI/UX Designer ✦ Developer ✦ Dreamer",
  "Crafting Pixel-Perfect Experiences",
  "Design is intelligence made visible",
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/simply_dilisha/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/Dilisha-arya/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/SimplyDilisha", label: "GitHub" },
];

const HeroSection = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = subtitles[subtitleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 60);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 30);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, subtitleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.4 }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
              >
                <span
                  style={{
                    background: "linear-gradient(90deg, #120114 0%, #39033b 00%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    fontWeight: 900,
                    fontSize: "2rem",
                    letterSpacing: "0.05em"
                  }}
                >
                  Welcome to my Cute world
                </span>
          </motion.p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Hi, I'm Dilisha{" "}
            <span className="gradient-text"></span>{" "}
            <span className="inline-block animate-float"></span>
          </h1>

          <motion.p
            className="font-display text-xl md:text-2xl italic text-foreground/80 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Turning Ideas Into Beautiful Experiences.
          </motion.p>

          {/* Typing subtitle */}
          <div className="h-8 mb-10">
            <span
              className="font-body text-lg"
              style={{
                background: "linear-gradient(90deg, #540505 0%, #4d1404 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent"
              }}
            >
              {displayText}
              <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
            </span>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#about" className="glass-card px-8 py-4 rounded-full font-body font-medium text-lg inline-flex items-center gap-2 text-foreground hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              💌 About Me
            </a>
            <a
              href="#projects"
              className="glass-card px-8 py-4 rounded-full font-body font-medium text-lg inline-flex items-center gap-2 text-foreground hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              💖 View My Work
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground/70 hover:text-primary transition-all duration-300 hover:shadow-lg hover:scale-110"
                style={{ transition: "all 0.3s ease" }}
              >
                <s.icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
