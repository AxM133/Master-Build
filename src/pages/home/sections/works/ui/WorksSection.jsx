import { Container, Section, SectionDescription, SectionTitle } from '@/shared/ui'
import { WORKS } from '../model'
import { WorksGallery } from './WorksGallery'

export function WorksSection() {
  return (
    <Section id={WORKS.id}>
      <Container>
        <SectionTitle>{WORKS.title}</SectionTitle>
        <SectionDescription className="mt-6">{WORKS.description}</SectionDescription>
        <WorksGallery items={WORKS.items} />
      </Container>
    </Section>
  )
}
