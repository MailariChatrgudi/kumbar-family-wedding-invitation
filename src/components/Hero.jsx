import { motion, useScroll, useTransform } from "framer-motion";

import { BsChevronDown } from "react-icons/bs";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center bg-blue">
      {/* Background Image */}
      <motion.div
        style={{ opacity, y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue/40 via-blue/30 to-bg z-10" />
        <img
          src="/photos/couple.png"
          alt="Bride and Groom"
          className="object-cover w-full h-full opacity-70 blur-[2px]"
          loading="lazy"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="z-20 text-center flex flex-col items-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 relative"
        >
          {/* Emblem Background */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-gold/40 flex items-center justify-center bg-white/40 shadow-[0_0_40px_rgba(201,164,75,0.2)] backdrop-blur-sm">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-gold/20 flex items-center justify-center bg-white/60">
              <img
                src="/photos/ganesh.png"
                alt="Ganesh"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-md"
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 font-semibold"
        >
          || ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ ||
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ink leading-tight mb-2 drop-shadow-sm"
        >
          ಕುಂಬಾರ ಬಂಧುಗಳ
          <br className="sm:hidden" />
          <span className="sm:ml-4">ವಿವಾಹ ಮಹೋತ್ಸವ</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-serif text-xl sm:text-3xl italic text-ink/80 mt-2"
        >
          Wedding Invitation
        </motion.h2>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-xs text-ink/60 uppercase tracking-widest mb-2">Scroll To Open</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <BsChevronDown className="text-gold text-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
