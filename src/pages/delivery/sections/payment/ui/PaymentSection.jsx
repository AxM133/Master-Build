import { Container, InfoCard, Reveal, Section, SectionTitle } from '@/shared/ui'
import { PAYMENT } from '../model'

export function PaymentSection() {
  return (
    <Section id={PAYMENT.id}>
      <Container>
        <SectionTitle>{PAYMENT.title}</SectionTitle>
        <ul className="mx-auto mt-10 grid max-w-[1050px] gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {PAYMENT.items.map(({ id, ...item }, index) => (
            <Reveal as="li" key={id} delay={index * 80}>
              <InfoCard {...item} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
