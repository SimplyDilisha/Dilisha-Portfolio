import footerBg from "@/assets/FooterBg.jpg";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 text-center border-t border-border/50 relative" style={{ position: 'relative' }}>
      <img src={footerBg} alt="Footer Background" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, pointerEvents: 'none'}} />
      <nav className="flex justify-center items-center gap-8 mb-6 font-body text-sm text-muted-foreground relative z-10">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
      </nav>
      <p className="font-display text-lg italic text-foreground/60 flex items-center justify-center gap-2 relative z-10">
        Made with <Heart size={16} className="text-primary fill-primary" /> by Dilisha
      </p>
      <p className="font-body text-xs text-muted-foreground mt-2 relative z-10">© 2026 All rights reserved</p>
    </footer>
  );
};

export default Footer;
