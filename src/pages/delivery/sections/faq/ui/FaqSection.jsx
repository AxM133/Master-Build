import { Accordion, Container, Reveal, Section, SectionTitle } from '@/shared/ui'
import { DELIVERY_FAQ } from '../model'

export function FaqSection() {
  return (
    <Section id={DELIVERY_FAQ.id}>
      <Container>
        <SectionTitle>{DELIVERY_FAQ.title}</SectionTitle>
        <Reveal className="mx-auto mt-10 max-w-3xl lg:mt-14">
          <Accordion items={DELIVERY_FAQ.items} />
        </Reveal>
      </Container>
    </Section>
  )
}
