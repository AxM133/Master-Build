import { Container, Reveal, Section, SectionDescription, SectionTitle } from '@/shared/ui'
import { SERVICES } from '../model'
import { ServiceCard } from './ServiceCard'

export function ServicesSection() {
  return (
    <Section id={SERVICES.id}>
      <Container>
        <SectionTitle>{SERVICES.title}</SectionTitle>
        <SectionDescription size="sm" className="mt-4 max-w-xl">
          {SERVICES.description}
        </SectionDescription>
        <ul className="mx-auto mt-10 grid max-w-[1050px] gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {SERVICES.items.map(({ id, ...service }, index) => (
            <Reveal as="li" key={id} delay={(index % 3) * 80}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
