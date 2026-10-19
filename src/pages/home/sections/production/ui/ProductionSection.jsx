import { Container, Reveal, Section, SectionTitle, VideoEmbed } from '@/shared/ui'
import { PRODUCTION } from '../model'
import { ProductionFeatures } from './ProductionFeatures'

export function ProductionSection() {
  return (
    <Section id={PRODUCTION.id} dark className="lg:pb-32 lg:pt-[120px]">
      <Container>
        <SectionTitle>{PRODUCTION.title}</SectionTitle>
        <div className="mx-auto mt-10 grid max-w-[1050px] gap-10 lg:mt-[86px] lg:grid-cols-[326px_minmax(0,1fr)] lg:gap-x-[37px]">
          <Reveal>
            <ProductionFeatures features={PRODUCTION.features} />
          </Reveal>
          <Reveal delay={150} className="lg:mt-[9px]">
            <VideoEmbed {...PRODUCTION.video} className="rounded-2xl lg:rounded-none" />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
