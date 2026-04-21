import { motion, useScroll } from "framer-motion";
import Hero from "./components/Hero";
import CardReveal from "./components/CardReveal";
import CoupleSection from "./components/CoupleSection";
import EventDetails from "./components/EventDetails";
import FamilyInvitation from "./components/FamilyInvitation";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-bg text-ink relative selection:bg-gold/20">
      {/* Global scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold/60 via-gold to-gold/60 origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Card reveal — bride slides LEFT, groom slides RIGHT → CoupleSection revealed */}
      <CardReveal>
        <CoupleSection />
      </CardReveal>

      {/* 3. Continues after card is fully open */}
      <EventDetails />
      <FamilyInvitation />

      {/* 4. Gallery */}
      <Gallery />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}

export default App;
