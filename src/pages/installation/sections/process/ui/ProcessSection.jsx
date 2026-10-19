import { Container, Reveal, Section, SectionTitle } from '@/shared/ui'
import { PROCESS } from '../model'
import { ProcessStep } from './ProcessStep'

export function ProcessSection() {
  return (
    <Section id={PROCESS.id} dark>
      <Container>
        <SectionTitle>{PROCESS.title}</SectionTitle>
        <ol className="relative mx-auto mt-12 grid max-w-[1050px] lg:mt-16 lg:grid-cols-6 lg:gap-6">
          {/* соединительная линия между шагами */}
          <span aria-hidden="true" className="absolute bottom-8 left-6 top-6 w-px bg-white/15 lg:inset-x-6 lg:bottom-auto lg:top-6 lg:h-px lg:w-auto" />
          {PROCESS.steps.map(({ id, title, text }, index) => (
            <Reveal as="li" key={id} delay={index * 80}>
              <ProcessStep number={index + 1} title={title} text={text} />
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
