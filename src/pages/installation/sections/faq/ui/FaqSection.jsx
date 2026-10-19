import { Accordion, Container, Reveal, Section, SectionTitle } from '@/shared/ui'
import { INSTALLATION_FAQ } from '../model'

export function FaqSection() {
  return (
    <Section id={INSTALLATION_FAQ.id}>
      <Container>
        <SectionTitle>{INSTALLATION_FAQ.title}</SectionTitle>
        <Reveal className="mx-auto mt-10 max-w-3xl lg:mt-14">
          <Accordion items={INSTALLATION_FAQ.items} />
        </Reveal>
      </Container>
    </Section>
  )
}
