import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DEFAULT_TRANSITION = { duration: 0.9, ease: "easeInOut" };

export function Reveal({
  as = "div",
  className = "",
  children,
  delay = 0,
  y = 18,
  blur = 8,
  once = true,
  amount = 0.35,
}) {
  const Tag = motion[as] ?? motion.div;
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ ...DEFAULT_TRANSITION, delay }}
    >
      {children}
    </Tag>
  );
}

