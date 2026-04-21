import { motion } from "framer-motion";

export function Emblem({ className = "" }) {
  return (
    <motion.div
      className={[
        "relative grid place-items-center",
        "h-20 w-20 rounded-full",
        "bg-white/70 ring-1 ring-[var(--border)] shadow-[0_18px_60px_rgba(17,24,39,0.14)]",
        className,
      ].join(" ")}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4.2, ease: "easeInOut", repeat: Infinity }}
    >
      <svg
        width="44"
        height="44"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M32 8C22.6 8 15 15.6 15 25c0 7 4.2 13 10.2 15.7C26.3 47.6 29.2 56 32 56s5.7-8.4 6.8-15.3C44.8 38 49 32 49 25 49 15.6 41.4 8 32 8Z"
          stroke="rgba(201,164,75,0.9)"
          strokeWidth="2.2"
        />
        <path
          d="M24 28c2-3 5-5 8-5s6 2 8 5"
          stroke="rgba(19,32,53,0.55)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M22 36c3 2 6 3 10 3s7-1 10-3"
          stroke="rgba(19,32,53,0.35)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

