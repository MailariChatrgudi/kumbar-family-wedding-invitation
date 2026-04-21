import { motion } from "framer-motion";
import { BsCalendarHeart, BsClockHistory, BsGeoAlt } from "react-icons/bs";

export default function EventDetails() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-24 px-4 bg-white/50 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-widest text-sm mb-4">When & Where</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink">Wedding Details</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Date */}
          <motion.div variants={item} className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-2/50 flex flex-col items-center text-center border border-blue px-6">
            <div className="w-16 h-16 rounded-full bg-blue-2 flex items-center justify-center text-gold mb-6 text-2xl">
              <BsCalendarHeart />
            </div>
            <h3 className="font-serif text-xl text-ink mb-3 font-semibold">ದಿನಾಂಕ</h3>
            <p className="text-muted leading-relaxed">
              <span className="block font-medium text-ink text-lg">29-04-2026</span>
              <span className="block">ಬುಧವಾರ (Wednesday)</span>
            </p>
          </motion.div>

          {/* Time */}
          <motion.div variants={item} className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-2/50 flex flex-col items-center text-center border border-blue px-6 transform md:-translate-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-2 flex items-center justify-center text-gold mb-6 text-2xl">
              <BsClockHistory />
            </div>
            <h3 className="font-serif text-xl text-ink mb-3 font-semibold">ಮುಹೂರ್ತ</h3>
            <p className="text-muted leading-relaxed">
              <span className="block font-medium text-ink text-lg">ಬೆಳಿಗ್ಗೆ 09:30 ರಿಂದ 11:00 ಗಂಟೆಗೆ</span>
              <span className="block italic text-sm mt-2">ಸಲ್ಲುವ ಶುಭ ಲಗ್ನದಲ್ಲಿ</span>
            </p>
          </motion.div>

          {/* Venue */}
          <motion.div variants={item} className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-2/50 flex flex-col items-center text-center border border-blue px-6">
            <div className="w-16 h-16 rounded-full bg-blue-2 flex items-center justify-center text-gold mb-6 text-2xl">
              <BsGeoAlt />
            </div>
            <h3 className="font-serif text-xl text-ink mb-3 font-semibold">ಸ್ಥಳ</h3>
            <p className="text-muted leading-relaxed">
              <span className="block text-ink font-medium">ಕ್ಲಾಸಿಕ್ ಫಂಕ್ಷನ್‌ಹಾಲ್</span>
              <span className="block text-sm">ಕೆಂಗಲ್ ರಸ್ತೆ, ಸಾಲಗುಂದಾ ಗ್ರಾಮ</span>
              <span className="block text-sm">ಸಿಂಧನೂರು ತಾಲೂಕು</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
