import { Card } from "../components/Card.jsx";
import { Container } from "../components/Container.jsx";
import { Reveal } from "../components/motion/Reveal.jsx";

function DetailCard({ label, value, delay }) {
  return (
    <Reveal
      delay={delay}
      className="rounded-[22px] bg-white/70 px-6 py-6 ring-1 ring-[var(--border)] shadow-[0_18px_55px_rgba(17,24,39,0.08)]"
    >
      <p className="text-[11px] font-medium tracking-[0.28em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-2 font-[Playfair_Display] text-xl tracking-tight text-[var(--ink)] sm:text-2xl">
        {value}
      </p>
    </Reveal>
  );
}

export function EventDetails({ date, time, venue }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Card className="px-6 py-12 sm:px-12 sm:py-14">
          <div className="mx-auto max-w-[820px] text-center">
            <Reveal
              as="p"
              className="text-xs font-medium tracking-[0.32em] text-[var(--muted)]"
            >
              THE CELEBRATION
            </Reveal>
            <Reveal
              as="h2"
              delay={0.08}
              className="mt-4 font-[Playfair_Display] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl"
            >
              Mark your calendar.
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3">
            <DetailCard label="DATE" value={date} delay={0.08} />
            <DetailCard label="TIME" value={time} delay={0.18} />
            <DetailCard label="VENUE" value={venue} delay={0.28} />
          </div>
        </Card>
      </Container>
    </section>
  );
}

