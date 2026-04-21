import { motion } from "framer-motion";
import { BsTelephone, BsSuitHeart } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-4 bg-ink text-white relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center mb-6 text-gold/80 text-3xl">
            <BsSuitHeart />
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-gold mb-6">
            ತಿಪ್ಪೇಶ್ & ಭೂಮಿಕಾ
          </h2>
          <p className="text-white/60 mb-12 max-w-lg mx-auto leading-relaxed">
            We are so excited to celebrate this special day with our family and friends. Thank you for your continued love and blessings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a href="tel:9620339043" className="flex items-center gap-2.5 text-white/80 hover:text-gold transition-colors bg-white/5 py-2.5 px-5 rounded-full border border-white/10 hover:border-gold/30 text-sm">
              <BsTelephone />
              <span>9620 339 043</span>
            </a>
            <a href="tel:9972590189" className="flex items-center gap-2.5 text-white/80 hover:text-gold transition-colors bg-white/5 py-2.5 px-5 rounded-full border border-white/10 hover:border-gold/30 text-sm">
              <BsTelephone />
              <span>9972 590 189</span>
            </a>
            <a href="tel:7975440730" className="flex items-center gap-2.5 text-white/80 hover:text-gold transition-colors bg-white/5 py-2.5 px-5 rounded-full border border-white/10 hover:border-gold/30 text-sm">
              <BsTelephone />
              <span>7975 440 730</span>
            </a>
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />
          
          <p className="text-white/40 text-sm tracking-widest uppercase">
            © 2026 Thippesh & Bhumika. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
