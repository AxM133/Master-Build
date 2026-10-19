import { Container, InfoCard, Reveal, Section, SectionTitle } from '@/shared/ui'
import { TRANSPORT } from '../model'

export function TransportSection() {
  return (
    <Section id={TRANSPORT.id} className="bg-neutral-50">
      <Container>
        <SectionTitle>{TRANSPORT.title}</SectionTitle>
        <ul className="mx-auto mt-10 grid max-w-[1050px] gap-6 md:grid-cols-3 lg:mt-14">
          {TRANSPORT.items.map(({ id, ...item }, index) => (
            <Reveal as="li" key={id} delay={index * 100}>
              <InfoCard {...item} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
