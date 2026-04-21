import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section className="h-full min-h-screen flex flex-col items-center justify-center px-4 py-10 max-w-6xl mx-auto w-full">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9 }}
        className="text-center mb-8"
      >
        <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-3">
          Together with their families
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-ink">Celebrate our union</h2>
        <div className="mx-auto mt-4 w-20 h-px bg-gold/50" />
      </motion.div>

      {/* Portraits row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-20 w-full">

        {/* ── Bride ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-44 h-56 sm:w-52 sm:h-64 rounded-t-[50%] overflow-hidden border-4 border-white shadow-xl mb-4 relative group">
            <div className="absolute inset-0 border border-gold/30 rounded-t-[50%] z-10 m-2 transition-transform duration-700 group-hover:scale-95" />
            <img
              src="/photos/bride.png"
              alt="Bride"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-ink mb-0.5">ಭೂಮಿಕಾ</h3>
          <p className="text-muted tracking-widest text-xs uppercase">Bride</p>
        </motion.div>

        {/* ── Divider (desktop) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="hidden md:flex flex-col items-center"
        >
          <div className="w-px h-12 bg-gold/50 mb-3" />
          <span className="font-serif text-5xl text-gold italic">&</span>
          <div className="w-px h-12 bg-gold/50 mt-3" />
        </motion.div>

        

        {/* ── Groom ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-44 h-56 sm:w-52 sm:h-64 rounded-t-[50%] overflow-hidden border-4 border-white shadow-xl mb-4 relative group">
            <div className="absolute inset-0 border border-gold/30 rounded-t-[50%] z-10 m-2 transition-transform duration-700 group-hover:scale-95" />
            <img
              src="/photos/groom.png"
              alt="Groom"
              className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-ink mb-0.5">ತಿಪ್ಪೇಶ್</h3>
          <p className="text-muted tracking-widest text-xs uppercase">Groom</p>
        </motion.div>
      </div>
    </section>
  );
}
