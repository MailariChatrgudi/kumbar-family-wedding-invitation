import { Card } from "../components/Card.jsx";
import { Container } from "../components/Container.jsx";
import { Reveal } from "../components/motion/Reveal.jsx";

export function Footer({ contacts = [] }) {
  return (
    <footer className="pb-16 sm:pb-20">
      <Container>
        <Card className="px-6 py-12 sm:px-12 sm:py-14">
          <div className="mx-auto max-w-[900px] text-center">
            <Reveal
              as="p"
              className="text-xs font-medium tracking-[0.32em] text-[var(--muted)]"
            >
              BLESSINGS
            </Reveal>
            <Reveal
              as="h2"
              delay={0.08}
              className="mt-4 font-[Playfair_Display] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl"
            >
              We await your presence.
            </Reveal>
            <Reveal
              as="p"
              delay={0.16}
              className="mx-auto mt-5 max-w-[60ch] text-sm leading-7 text-[var(--muted)] sm:text-base"
            >
              Your blessings are the most cherished gift. With warm regards and love.
            </Reveal>

            {contacts.length ? (
              <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2">
                {contacts.map((c, idx) => (
                  <Reveal
                    key={`${c.name}-${c.phone}-${idx}`}
                    delay={0.18 + idx * 0.08}
                    className="rounded-[20px] bg-white/65 px-5 py-5 ring-1 ring-[var(--border)]"
                  >
                    <p className="text-sm font-medium text-[var(--ink)]/85">
                      {c.name}
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{c.phone}</p>
                  </Reveal>
                ))}
              </div>
            ) : null}

            <div className="mt-12 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(201,164,75,0.65),transparent)]" />
            <p className="mt-6 text-xs tracking-wide text-[var(--muted)]">
              Made with love — minimal, premium, and scroll-based.
            </p>
          </div>
        </Card>
      </Container>
    </footer>
  );
}

