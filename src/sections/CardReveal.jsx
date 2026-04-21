import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "../components/Card.jsx";
import { Container } from "../components/Container.jsx";
import { Reveal } from "../components/motion/Reveal.jsx";

export function CardReveal() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.2"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-105%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "105%"]);
  const veil = useTransform(scrollYProgress, [0, 0.75, 1], [0.55, 0.2, 0]);

  return (
    <section ref={ref} className="relative py-16 sm:py-24">
      <Container>
        <Card className="mx-auto">
          <div className="relative min-h-[520px] overflow-hidden px-6 py-14 sm:px-12">
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(900px_380px_at_50%_0%,rgba(201,164,75,0.16),transparent_60%)]"
                style={{ opacity: veil }}
              />
            </div>

            <div className="relative z-10 mx-auto max-w-[720px] text-center">
              <Reveal as="p" className="text-xs font-medium tracking-[0.32em] text-[var(--muted)]">
                INVITATION CARD
              </Reveal>
              <Reveal
                as="h2"
                delay={0.08}
                className="mt-4 font-[Playfair_Display] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl"
              >
                As you scroll, the card opens.
              </Reveal>
              <Reveal
                as="p"
                delay={0.16}
                className="mx-auto mt-4 max-w-[58ch] text-sm leading-7 text-[var(--muted)] sm:text-base"
              >
                A slow, elegant reveal—like unfolding a luxury printed invitation.
              </Reveal>
            </div>

            <div className="pointer-events-none absolute inset-0 z-20">
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(180deg,rgba(234,243,255,0.95),rgba(255,255,255,0.82))] ring-1 ring-[var(--border)]"
                style={{ x: leftX }}
              />
              <motion.div
                className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(247,243,232,0.92))] ring-1 ring-[var(--border)]"
                style={{ x: rightX }}
              />
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(201,164,75,0.65),transparent)] opacity-70" />
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

