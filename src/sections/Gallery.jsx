import { Card } from "../components/Card.jsx";
import { Container } from "../components/Container.jsx";
import { Reveal } from "../components/motion/Reveal.jsx";

export function Gallery({ images = [] }) {
  const items = images.filter(Boolean).slice(0, 3);
  if (items.length === 0) return null;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Card className="px-6 py-12 sm:px-12 sm:py-14">
          <div className="mx-auto max-w-[900px] text-center">
            <Reveal
              as="p"
              className="text-xs font-medium tracking-[0.32em] text-[var(--muted)]"
            >
              HIGHLIGHTS
            </Reveal>
            <Reveal
              as="h2"
              delay={0.08}
              className="mt-4 font-[Playfair_Display] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl"
            >
              A few quiet moments.
            </Reveal>
          </div>

          <div className="mt-10 sm:mt-12">
            <div className="-mx-6 overflow-x-auto px-6 pb-4 sm:-mx-12 sm:px-12">
              <div className="flex gap-4 snap-x snap-mandatory">
                {items.map((src, idx) => (
                  <Reveal
                    key={src}
                    delay={0.08 + idx * 0.08}
                    className="snap-start"
                  >
                    <div className="w-[78vw] max-w-[520px] overflow-hidden rounded-[24px] ring-1 ring-[var(--border)] bg-white/60">
                      <img
                        src={src}
                        alt={`Highlight ${idx + 1}`}
                        loading="lazy"
                        className="aspect-[3/2] w-full object-cover"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-[var(--muted)]">
              Swipe horizontally on mobile.
            </p>
          </div>
        </Card>
      </Container>
    </section>
  );
}

