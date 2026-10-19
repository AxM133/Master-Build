import { Container, Section, SectionTitle } from '@/shared/ui'
import { ADVANTAGES } from '../model'
import { AdvantagesGrid } from './AdvantagesGrid'

export function AdvantagesSection() {
  return (
    <Section id={ADVANTAGES.id} dark className="lg:py-[120px]">
      <Container>
        <SectionTitle>{ADVANTAGES.title}</SectionTitle>
        <AdvantagesGrid items={ADVANTAGES.items} />
      </Container>
    </Section>
  )
}
