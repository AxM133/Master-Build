import { Container, Section, SectionDescription, SectionTitle } from '@/shared/ui'
import { useWorksLightbox, WORKS } from '../model'
import { WorksGallery } from './WorksGallery'
import { WorksLightbox } from './WorksLightbox'

export function WorksSection() {
  const lightbox = useWorksLightbox(WORKS.items.length)

  return (
    <Section id={WORKS.id} className="lg:py-[120px]">
      <Container>
        <SectionTitle>{WORKS.title}</SectionTitle>
        <SectionDescription tone="default" className="mt-6 max-w-[1050px] lg:mt-[85px]">
          {WORKS.description}
        </SectionDescription>
        <WorksGallery items={WORKS.items} onOpen={lightbox.open} />
      </Container>

      <WorksLightbox
        items={WORKS.items}
        index={lightbox.index}
        onClose={lightbox.close}
        onPrev={lightbox.prev}
        onNext={lightbox.next}
      />
    </Section>
  )
}
