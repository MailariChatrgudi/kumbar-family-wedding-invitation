import { Card } from "../components/Card.jsx";
import { Container } from "../components/Container.jsx";
import { Reveal } from "../components/motion/Reveal.jsx";

export function FamilyText({ text }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Card className="px-6 py-12 sm:px-12 sm:py-14">
          <div className="mx-auto max-w-[860px] text-center">
            <Reveal
              as="p"
              className="text-xs font-medium tracking-[0.32em] text-[var(--muted)]"
            >
              WITH LOVE
            </Reveal>

            <Reveal
              as="p"
              delay={0.1}
              blur={10}
              className="mt-6 font-[Playfair_Display] text-xl leading-9 text-[var(--ink)]/90 sm:text-2xl sm:leading-10"
            >
              {text}
            </Reveal>

            <Reveal
              as="div"
              delay={0.22}
              className="mx-auto mt-10 h-px w-40 bg-[linear-gradient(90deg,transparent,var(--gold),transparent)]"
            >
              <span className="sr-only">Divider</span>
            </Reveal>
          </div>
        </Card>
      </Container>
    </section>
  );
}

