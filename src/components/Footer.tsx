import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 text-center border-t border-border/50">
      <nav className="flex justify-center gap-8 mb-6 font-body text-sm text-muted-foreground">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </nav>
      <p className="font-display text-lg italic text-foreground/60 flex items-center justify-center gap-2">
        Made with <Heart size={16} className="text-primary fill-primary" /> by Dilisha
      </p>
      <p className="font-body text-xs text-muted-foreground mt-2">© 2026 All rights reserved</p>
    </footer>
  );
};

export default Footer;
