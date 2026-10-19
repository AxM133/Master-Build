import { Container, Section, SectionTitle } from '@/shared/ui'
import { AdvantageCard } from './AdvantageCard'

export function AdvantagesSection({ title, items }) {
  return (
    <Section id="advantages" dark>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <ul className="mx-auto mt-10 grid max-w-[870px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ id, ...advantage }) => (
            <li key={id}>
              <AdvantageCard {...advantage} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
