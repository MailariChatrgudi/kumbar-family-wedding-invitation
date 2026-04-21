import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent">
      <motion.div
        className="h-full origin-left bg-[linear-gradient(90deg,var(--gold),rgba(201,164,75,0.2))]"
        style={{ scaleX }}
      />
    </div>
  );
}

