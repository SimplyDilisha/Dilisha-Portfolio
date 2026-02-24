import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState, useCallback } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);

  const spawnHeart = useCallback(() => {
    const id = Date.now();
    setHearts((prev) => [...prev, { id, x: Math.random() * 100 }]);
    setTimeout(() => setHearts((prev) => prev.filter((h) => h.id !== id)), 3000);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute bottom-0 text-primary/20 text-2xl animate-heart-float"
          style={{ left: `${h.x}%` }}
        >
          💖
        </span>
      ))}
      {/* Auto-spawn */}
      <HeartsAutoSpawn onSpawn={spawnHeart} />
    </div>
  );
};

const HeartsAutoSpawn = ({ onSpawn }: { onSpawn: () => void }) => {
  useState(() => {
    const interval = setInterval(onSpawn, 2000);
    return () => clearInterval(interval);
  });
  return null;
};

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative bg-blush/20 overflow-hidden">
      <FloatingHearts />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Let's connect</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Get In Touch 💌</h2>
        </motion.div>

        <motion.form
          className="glass-card-solid rounded-3xl p-8 md:p-10 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-body text-sm font-medium mb-2 block">Your Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full px-5 py-3.5 rounded-2xl border border-border bg-background/50 font-body text-sm outline-none input-glow transition-shadow duration-300"
                required
              />
            </div>
            <div>
              <label className="font-body text-sm font-medium mb-2 block">Email</label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full px-5 py-3.5 rounded-2xl border border-border bg-background/50 font-body text-sm outline-none input-glow transition-shadow duration-300"
                required
              />
            </div>
          </div>

          <div>
            <label className="font-body text-sm font-medium mb-2 block">Subject</label>
            <input
              type="text"
              placeholder="Let's work together!"
              className="w-full px-5 py-3.5 rounded-2xl border border-border bg-background/50 font-body text-sm outline-none input-glow transition-shadow duration-300"
            />
          </div>

          <div>
            <label className="font-body text-sm font-medium mb-2 block">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-5 py-3.5 rounded-2xl border border-border bg-background/50 font-body text-sm outline-none input-glow transition-shadow duration-300 resize-none"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full btn-primary-gradient py-4 rounded-2xl font-body font-semibold text-lg inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {submitted ? (
              <span>Sent! 💖</span>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
