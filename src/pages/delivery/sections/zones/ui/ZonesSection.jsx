import { Container, Reveal, Section, SectionDescription, SectionTitle } from '@/shared/ui'
import { useZones, ZONES } from '../model'
import { ZoneDetails } from './ZoneDetails'
import { ZoneList } from './ZoneList'

export function ZonesSection() {
  const zones = useZones(ZONES.items)

  return (
    <Section id={ZONES.id}>
      <Container>
        <SectionTitle>{ZONES.title}</SectionTitle>
        <SectionDescription size="sm" className="mt-4 max-w-xl">
          {ZONES.description}
        </SectionDescription>
        <Reveal className="mx-auto mt-10 grid max-w-[1050px] gap-6 lg:mt-14 lg:grid-cols-[380px_minmax(0,1fr)]">
          <ZoneList items={ZONES.items} activeId={zones.activeId} onSelect={zones.select} />
          <ZoneDetails zone={zones.activeZone} includes={ZONES.includes} />
        </Reveal>
      </Container>
    </Section>
  )
}
