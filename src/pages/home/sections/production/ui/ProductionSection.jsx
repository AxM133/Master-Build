import { Container, Section, SectionTitle, VideoEmbed } from '@/shared/ui'
import { PRODUCTION } from '../model'
import { ProductionFeatures } from './ProductionFeatures'

export function ProductionSection() {
  return (
    <Section id={PRODUCTION.id} dark>
      <Container>
        <SectionTitle>{PRODUCTION.title}</SectionTitle>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
          <ProductionFeatures features={PRODUCTION.features} />
          <VideoEmbed {...PRODUCTION.video} />
        </div>
      </Container>
    </Section>
  )
}
