import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll("a, button");

    links.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsHover(true));
      el.addEventListener("mouseleave", () => setIsHover(false));
    });

    return () => {
      links.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsHover(true));
        el.removeEventListener("mouseleave", () => setIsHover(false));
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full border border-stone-400 pointer-events-none z-[999] mix-blend-difference"
      animate={{
        x: mouse.x - (isHover ? 16 : 8),
        y: mouse.y - (isHover ? 16 : 8),
        width: isHover ? 32 : 16,
        height: isHover ? 32 : 16,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 32 }}
    />
  );
}