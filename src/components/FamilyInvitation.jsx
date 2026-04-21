import { motion } from "framer-motion";

export default function FamilyInvitation() {
  return (
    <section className="py-24 px-4 bg-bg relative overflow-hidden flex justify-center">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-2/30 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-2xl text-center bg-white/70 backdrop-blur-sm p-8 sm:p-12 md:p-16 rounded-3xl border border-gold/20 shadow-2xl z-10 w-full"
      >
        <div className="mx-auto w-12 h-12 bg-blue-2 rounded-full flex items-center justify-center mb-8">
          <div className="w-8 h-8 rounded-full border border-gold border-dashed" />
        </div>

        <h2 className="font-serif text-3xl text-ink mb-8 leading-normal">
          ಹೃದಯ ತುಂಬಿ ಪತ್ರಿಕೆ ಸ್ವೀಕರಿಸಿದ್ದೀರಿ<br/>
          <span className="text-2xl text-gold mt-2 block">ಪರಿವಾರ ಸಮೇತ ಆಗಮಿಸಿ ಮನತುಂಬಿ ಹಾರೈಸಿ...</span>
        </h2>

        <div className="w-32 h-[1px] bg-gold/50 mx-auto mb-10" />

        <div className="space-y-4 mb-10">
          <p className="text-gold uppercase tracking-widest text-xs font-semibold">ಇವರಿಂದ:</p>
          <p className="font-serif text-lg text-ink">ಶ್ರೀಮತಿ ದೇವಮ್ಮ ಗಂ. ಶ್ರೀ ಶರಣಪ್ಪ ಕುಂಬಾರ</p>
          <p className="font-serif text-lg text-ink">ಶ್ರೀಮತಿ ಮೀನಾಕ್ಷಿ ಗಂ. ಶ್ರೀ ಮಂಜುನಾಥ ಕುಂಬಾರ</p>
          <p className="font-serif text-lg text-ink">ಶ್ರೀಮತಿ ಚೈತ್ರ ಗಂ. ಶ್ರೀ ಕಲ್ಯಾಣಬಸವ ಕುಂಬಾರ</p>
          <p className="text-sm text-muted mt-2">ಸಾ|| ಸಾಲಗುಂದಾ ತಾ|| ಸಿಂಧನೂರು ಜಿ|| ರಾಯಚೂರು</p>
        </div>

        <div className="w-32 h-[1px] bg-gold/50 mx-auto mb-8" />
        
        <p className="text-sm text-ink/70 leading-loose">
          ತಮ್ಮ ಆಗಮನವಾಭಿಲಾಷಿಗಳು<br/>
          ಸಮಸ್ತ ಕುಂಬಾರ ಸಮಾಜದ ಬಂಧುಗಳು, ಸಾಲಗುಂದಾ
        </p>

      </motion.div>
    </section>
  );
}
