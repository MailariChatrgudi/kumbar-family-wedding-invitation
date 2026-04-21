import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────
   SVG Peony flower — pure vector, matches the card's white florals
───────────────────────────────────────────────────────────────── */
function PeonySVG({ className = "", opacity = 1 }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <g fill="white">
        {/* Outer petals */}
        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle) => (
          <ellipse
            key={angle}
            cx="100" cy="100"
            rx="18" ry="44"
            transform={`rotate(${angle} 100 100)`}
            fillOpacity="0.55"
          />
        ))}
        {/* Mid petals */}
        {[20, 60, 100, 140, 180, 220, 260, 300, 340].map((angle) => (
          <ellipse
            key={angle}
            cx="100" cy="100"
            rx="14" ry="35"
            transform={`rotate(${angle} 100 100)`}
            fillOpacity="0.45"
          />
        ))}
        {/* Inner petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx="100" cy="100"
            rx="10" ry="22"
            transform={`rotate(${angle} 100 100)`}
            fillOpacity="0.55"
          />
        ))}
        {/* Center */}
        <circle cx="100" cy="100" r="14" fillOpacity="0.7" />
        <circle cx="100" cy="100" r="7"  fillOpacity="0.9" />
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SVG corner ornament — gold filigree style
───────────────────────────────────────────────────────────────── */
function GoldCorner({ flip = false, flipY = false }) {
  const tfm = `scale(${flip ? -1 : 1}, ${flipY ? -1 : 1})`;
  return (
    <svg
      viewBox="0 0 60 60"
      className="w-10 h-10 text-gold/70"
      fill="none"
      style={{ transform: tfm, transformOrigin: "center" }}
    >
      <path d="M4 4 L56 4 L56 10" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 4 L4 56 L10 56" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 14 Q14 4 24 14 Q14 24 4 14Z" fill="currentColor" fillOpacity="0.35" />
      <circle cx="4"  cy="4"  r="2.5" fill="currentColor" fillOpacity="0.8" />
      <circle cx="18" cy="4"  r="1.2" fill="currentColor" fillOpacity="0.5" />
      <circle cx="4"  cy="18" r="1.2" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SVG Ganesh / Om emblem — pure vector
───────────────────────────────────────────────────────────────── */
function GaneshEmblem() {
  return (
    <div className="flex flex-col items-center">
      {/* Outer ring */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        <svg viewBox="0 0 80 80" className="absolute inset-0 w-full h-full">
          {/* Dashed gold ring */}
          <circle cx="40" cy="40" r="36" stroke="#c9a44b" strokeWidth="1" strokeDasharray="4 3" fill="none" />
          <circle cx="40" cy="40" r="29" stroke="#c9a44b" strokeWidth="0.6" fill="none" opacity="0.5" />
          {/* Petals around ring */}
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse
              key={a}
              cx="40" cy="40"
              rx="3.5" ry="8"
              fill="#c9a44b"
              fillOpacity="0.4"
              transform={`rotate(${a} 40 40) translate(0 -28)`}
            />
          ))}
        </svg>
        {/* Centre: Ganesh image in gold-ringed circle */}
        <div className="relative z-10 w-12 h-12 rounded-full bg-white/90 border border-gold/50 flex items-center justify-center shadow-md overflow-hidden">
          <img
            src="/photos/ganesh.png"
            alt="Ganesh"
            className="w-10 h-10 object-contain drop-shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Panel face — zero images, pure CSS + SVG
───────────────────────────────────────────────────────────────── */
function PanelFace({ side, name, role }) {
  const isLeft = side === "left";

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-between py-7 px-5 overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, #c8ddf0 0%, #b4cde5 30%, #a8c2de 60%, #b8d0e8 85%, #cddff2 100%)",
      }}
    >
      {/* ── Background peony pattern (pure SVG, no images) ── */}
      {/* Large centre bloom */}
      <PeonySVG
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72"
        opacity={0.18}
      />
      {/* Corner blooms */}
      <PeonySVG className="absolute -top-8 -left-8 w-44 h-44"   opacity={0.22} />
      <PeonySVG className="absolute -top-8 -right-8 w-44 h-44"  opacity={0.22} />
      <PeonySVG className="absolute -bottom-8 -left-8 w-44 h-44" opacity={0.22} />
      <PeonySVG className="absolute -bottom-8 -right-8 w-44 h-44" opacity={0.22} />
      {/* Mid-side accent blooms */}
      <PeonySVG className="absolute top-1/3 -left-6 w-28 h-28"  opacity={0.15} />
      <PeonySVG className="absolute top-1/3 -right-6 w-28 h-28" opacity={0.15} />

      {/* ── Gold border frames ── */}
      <div className="absolute inset-3   border border-[#c9a44b]/55 pointer-events-none" />
      <div className="absolute inset-[18px] border border-[#c9a44b]/30 pointer-events-none border-dashed" />

      {/* ── Gold corner ornaments ── */}
      <div className="absolute top-3    left-3">  <GoldCorner /></div>
      <div className="absolute top-3    right-3"> <GoldCorner flip /></div>
      <div className="absolute bottom-3 left-3">  <GoldCorner flipY /></div>
      <div className="absolute bottom-3 right-3"> <GoldCorner flip flipY /></div>

      {/* ── Top: Sanskrit blessing ── */}
      <div className="relative z-10 flex flex-col items-center gap-3 mt-2">
        <p className="text-[#8b6914] text-[9px] uppercase tracking-[0.25em] font-semibold">
          || ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ ||
        </p>
        <GaneshEmblem />
      </div>

      {/* ── Centre ornamental rule ── */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 w-2/3">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a44b]/70 to-transparent" />
        <div className="flex items-center gap-2 text-[#c9a44b]/70 text-[10px]">
          <div className="w-5 h-px bg-[#c9a44b]/50" />
          ✦
          <div className="w-5 h-px bg-[#c9a44b]/50" />
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a44b]/70 to-transparent" />
      </div>

      {/* ── Bottom: name + role ── */}
      <div className="relative z-10 flex flex-col items-center gap-1 mb-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#8b6914] font-semibold">{role}</p>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#1a2d4a]">{name}</h3>
        <div className="w-12 h-px bg-[#c9a44b]/60 mt-1" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CardReveal — main component
───────────────────────────────────────────────────────────────── */
export default function CardReveal({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const leftX        = useTransform(scrollYProgress, [0, 0.45], ["0%", "-115%"]);
  const rightX       = useTransform(scrollYProgress, [0, 0.45], ["0%",  "115%"]);
  const panelOpacity = useTransform(scrollYProgress, [0.38, 0.5],  [1, 0]);
  const hingeScale   = useTransform(scrollYProgress, [0, 0.35],    [1, 0]);
  const hintOpacity  = useTransform(scrollYProgress, [0, 0.12],    [1, 0]);

  return (
    <div ref={ref} style={{ height: "300vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── Revealed content (CoupleSection behind panels) ── */}
        <div className="absolute inset-0 overflow-hidden bg-[#f6fbff]">
          {children}
        </div>

        {/* ══════ LEFT PANEL ══════ */}
        <motion.div
          style={{ x: leftX, opacity: panelOpacity }}
          className="absolute top-0 left-0 w-[51%] h-full z-30 select-none"
        >
          <PanelFace side="left" name="ಭೂಮಿಕಾ" role="Bride" />

          {/* Right-edge hinge */}
          <motion.div
            style={{ scaleY: hingeScale }}
            className="absolute right-0 inset-y-0 w-5 flex flex-col items-center justify-center origin-center z-10"
          >
            <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#c9a44b]/80 to-transparent" />
            <div className="w-2.5 h-2.5 rounded-full border border-[#c9a44b]/80 bg-white/70 shrink-0" />
            <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#c9a44b]/80 to-transparent" />
          </motion.div>
        </motion.div>

        {/* ══════ RIGHT PANEL ══════ */}
        <motion.div
          style={{ x: rightX, opacity: panelOpacity }}
          className="absolute top-0 right-0 w-[51%] h-full z-30 select-none"
        >
          <PanelFace side="right" name="ತಿಪ್ಪೇಶ್" role="Groom" />

          {/* Left-edge hinge */}
          <motion.div
            style={{ scaleY: hingeScale }}
            className="absolute left-0 inset-y-0 w-5 flex flex-col items-center justify-center origin-center z-10"
          >
            <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#c9a44b]/80 to-transparent" />
            <div className="w-2.5 h-2.5 rounded-full border border-[#c9a44b]/80 bg-white/70 shrink-0" />
            <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#c9a44b]/80 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Centre gold seam */}
        <motion.div
          style={{ opacity: panelOpacity }}
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[#c9a44b]/70 to-transparent z-40 pointer-events-none"
        />

        {/* "Open the card" hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#1a2d4a]/50">
            Open the card
          </p>
          <motion.svg
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            width="18" height="18" viewBox="0 0 20 20" fill="none"
          >
            <path
              d="M10 4v12M4 10l6 6 6-6"
              stroke="#c9a44b" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>

      </div>
    </div>
  );
}
