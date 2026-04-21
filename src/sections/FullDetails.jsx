import { motion, useScroll, useSpring } from "framer-motion";
import { useMemo, useRef } from "react";
import { Card } from "../components/Card.jsx";
import { Container } from "../components/Container.jsx";
import { Reveal } from "../components/motion/Reveal.jsx";

function KeyValue({ label, value, delay }) {
  return (
    <Reveal
      delay={delay}
      className="rounded-[22px] bg-white/70 px-6 py-6 ring-1 ring-[var(--border)]"
    >
      <p className="text-[11px] font-medium tracking-[0.28em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-[var(--ink)]/85 sm:text-base">
        {value}
      </p>
    </Reveal>
  );
}

export function FullDetails({ items }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.25"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.25,
  });

  const labels = useMemo(() => items.map((x) => x.label), [items]);

  return (
    <section ref={ref} className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:items-start">
          <Card className="px-6 py-12 sm:px-12 sm:py-14">
            <div className="mx-auto max-w-[900px]">
              <Reveal
                as="p"
                className="text-xs font-medium tracking-[0.32em] text-[var(--muted)]"
              >
                WEDDING DETAILS
              </Reveal>
              <Reveal
                as="h2"
                delay={0.08}
                className="mt-4 font-[Playfair_Display] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl"
              >
                The full invitation.
              </Reveal>

              <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
                {items.map((it, idx) => (
                  <KeyValue
                    key={it.label}
                    label={it.label}
                    value={it.value}
                    delay={0.08 + idx * 0.08}
                  />
                ))}
              </div>
            </div>
          </Card>

          <div className="hidden lg:block">
            <div className="sticky top-24 rounded-[24px] bg-white/60 px-5 py-6 ring-1 ring-[var(--border)] backdrop-blur-md">
              <p className="text-[11px] font-medium tracking-[0.28em] text-[var(--muted)]">
                PROGRESS
              </p>

              <div className="mt-5 flex gap-4">
                <div className="relative w-1 rounded-full bg-black/5">
                  <motion.div
                    className="absolute left-0 top-0 w-1 origin-top rounded-full bg-[linear-gradient(180deg,var(--gold),rgba(201,164,75,0.12))]"
                    style={{ scaleY: progress, height: "100%" }}
                  />
                </div>
                <ol className="space-y-3">
                  {labels.map((l) => (
                    <li key={l} className="text-sm text-[var(--muted)]">
                      <span className="font-medium text-[var(--ink)]/80">{l}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

