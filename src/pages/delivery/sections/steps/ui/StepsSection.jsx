import { Container, Reveal, Section, SectionTitle } from '@/shared/ui'
import { DELIVERY_STEPS } from '../model'

export function StepsSection() {
  return (
    <Section id={DELIVERY_STEPS.id} dark>
      <Container>
        <SectionTitle>{DELIVERY_STEPS.title}</SectionTitle>
        <ol className="mx-auto mt-10 grid max-w-[1050px] gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {DELIVERY_STEPS.items.map(({ id, title, text }, index) => (
            <Reveal as="li" key={id} delay={index * 100} className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <span className="text-4xl font-extrabold text-primary-light">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
