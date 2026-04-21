import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const photos = [
  { src: "/photos/2.jpeg", alt: "Couple" },
  { src: "/photos/wedding-img-3.jpeg", alt: "Celebration" },
  { src: "/photos/wedding-img-4.jpeg", alt: "Ceremony" },
  { src: "/photos/wedding-img-5jpeg.jpeg", alt: "Moments" },
  {
    src: "/photos/highlights-special.jpeg",
    alt: "Special Moment",
  },
];

const variants = {
  enter: (dir) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.96,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.96,
  }),
};

export default function Gallery() {
  const [[page, dir], setPage] = useState([0, 0]);
  const index = ((page % photos.length) + photos.length) % photos.length;

  const paginate = (newDir) => setPage(([p]) => [p + newDir, newDir]);

  return (
    <section className="py-24 px-4 bg-white/40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-3">
            Our Moments
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink">
            Photo Highlights
          </h2>
          <div className="mx-auto mt-5 w-20 h-px bg-gold/50" />
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Prev */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous photo"
            className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-white border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300 shadow-md"
          >
            <BsChevronLeft />
          </button>

          {/* Slide Container */}
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] bg-blue-2">
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              <motion.img
                key={page}
                src={photos[index].src}
                alt={photos[index].alt}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>

            {/* Gold frame overlay */}
            <div className="absolute inset-4 border border-gold/30 rounded-2xl pointer-events-none z-10" />
          </div>

          {/* Next */}
          <button
            onClick={() => paginate(1)}
            aria-label="Next photo"
            className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-white border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300 shadow-md"
          >
            <BsChevronRight />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-7">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > index ? 1 : -1])}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-8 bg-gold"
                  : "w-2 bg-gold/30 hover:bg-gold/60"
              }`}
            />
          ))}
        </div>

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.4 }}
            className="text-center text-sm text-muted mt-4 tracking-wide italic"
          >
            {photos[index].alt} – {index + 1} / {photos.length}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
