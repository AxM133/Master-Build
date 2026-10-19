import { Container, Reveal, Section, SectionDescription, SectionTitle } from '@/shared/ui'
import { LAYERS, useLayers } from '../model'
import { LayerDetails } from './LayerDetails'
import { LayersDiagram } from './LayersDiagram'

export function LayersSection() {
  const layers = useLayers(LAYERS.items)

  return (
    <Section id={LAYERS.id}>
      <Container>
        <SectionTitle>{LAYERS.title}</SectionTitle>
        <SectionDescription size="sm" className="mt-4 max-w-xl">
          {LAYERS.description}
        </SectionDescription>
        <Reveal className="mx-auto mt-10 grid max-w-[1050px] items-center gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          <LayersDiagram items={LAYERS.items} activeId={layers.activeId} onSelect={layers.select} />
          <LayerDetails layer={layers.activeLayer} index={layers.activeIndex} total={LAYERS.items.length} />
        </Reveal>
      </Container>
    </Section>
  )
}
