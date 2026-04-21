import { motion } from "framer-motion";
import { Container } from "../components/Container.jsx";
import { Emblem } from "../components/Emblem.jsx";

export function Hero({ backgroundSrc, title }) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 scale-105 bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundSrc})`, filter: "blur(14px)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.45),rgba(17,24,39,0.28),rgba(246,251,255,0.96))]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_520px_at_20%_0%,rgba(234,243,255,0.35),transparent_60%)]" />
      </div>

      <Container className="relative flex min-h-[100svh] items-center">
        <div className="mx-auto w-full max-w-[720px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="mx-auto flex flex-col items-center"
          >
            <Emblem />
            <div className="mt-6">
              <div className="mx-auto mb-3 h-px w-20 bg-[linear-gradient(90deg,transparent,var(--gold),transparent)]" />
              <p className="text-xs font-medium tracking-[0.26em] text-white/80">
                BLESSINGS & INVITATION
              </p>
            </div>

            <h1 className="mt-4 font-[Playfair_Display] text-4xl tracking-tight text-white drop-shadow-sm sm:text-5xl">
              {title}
            </h1>

            <p className="mx-auto mt-4 max-w-[54ch] text-sm leading-7 text-white/80 sm:text-base">
              Scroll gently to open the card and reveal the invitation.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-12 h-10 w-[2px] rounded-full bg-white/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.9 }}
          >
            <motion.div
              className="mx-auto mt-1 h-3 w-[2px] rounded-full bg-white/70"
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

