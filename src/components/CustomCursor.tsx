import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-primary/30 mix-blend-screen"
        style={{
          width: 32,
          height: 32,
          left: pos.x - 16,
          top: pos.y - 16,
          transition: "left 0.08s ease-out, top 0.08s ease-out",
          boxShadow: "0 0 20px hsl(340 65% 65% / 0.4), 0 0 40px hsl(340 65% 65% / 0.2)",
        }}
      />
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-primary"
        style={{
          width: 6,
          height: 6,
          left: pos.x - 3,
          top: pos.y - 3,
        }}
      />
    </>
  );
};

export default CustomCursor;
