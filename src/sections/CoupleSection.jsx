import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../components/Card.jsx";
import { Container } from "../components/Container.jsx";
import { Reveal } from "../components/motion/Reveal.jsx";

function PersonCard({ side, imageSrc, name, role, family }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.45 });
  const fromX = side === "left" ? -40 : 40;

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, x: fromX, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 1.05, ease: "easeInOut" }}
        className="overflow-hidden rounded-[26px] bg-white/75 ring-1 ring-[var(--border)]"
      >
        <img
          src={imageSrc}
          alt={name}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
        className="mt-5 text-center"
      >
        <p className="text-[11px] font-medium tracking-[0.28em] text-[var(--muted)]">
          {side === "left" ? "BRIDE" : "GROOM"}
        </p>
        <p className="mt-2 font-[Playfair_Display] text-2xl tracking-tight text-[var(--ink)] sm:text-3xl">
          {name}
        </p>
        <p className="mt-1 text-sm text-[var(--muted)]">
          {role} <span className="text-[var(--ink)]/70">{family}</span>
        </p>
      </motion.div>
    </div>
  );
}

export function CoupleSection({ bride, groom }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Card className="px-6 py-12 sm:px-12 sm:py-14">
          <div className="mx-auto max-w-[820px] text-center">
            <Reveal
              as="p"
              className="text-xs font-medium tracking-[0.32em] text-[var(--muted)]"
            >
              THE COUPLE
            </Reveal>
            <Reveal
              as="h2"
              delay={0.08}
              className="mt-4 font-[Playfair_Display] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl"
            >
              Two stories, one journey.
            </Reveal>
          </div>

          <div className="mt-10 grid gap-10 sm:mt-14 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
            <PersonCard
              side="left"
              imageSrc={bride.imageSrc}
              name={bride.name}
              role={bride.role}
              family={bride.family}
            />

            <div className="hidden sm:flex sm:flex-col sm:items-center sm:pt-20">
              <div className="h-28 w-px bg-[linear-gradient(180deg,transparent,rgba(201,164,75,0.70),transparent)]" />
              <div className="mt-5 h-10 w-10 rounded-full bg-white/70 ring-1 ring-[var(--border)] grid place-items-center">
                <span className="font-[Playfair_Display] text-[var(--gold)]">&</span>
              </div>
              <div className="mt-5 h-28 w-px bg-[linear-gradient(180deg,transparent,rgba(19,32,53,0.16),transparent)]" />
            </div>

            <PersonCard
              side="right"
              imageSrc={groom.imageSrc}
              name={groom.name}
              role={groom.role}
              family={groom.family}
            />
          </div>
        </Card>
      </Container>
    </section>
  );
}

