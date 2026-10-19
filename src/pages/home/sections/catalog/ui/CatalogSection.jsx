import { Button, Container, Section, SectionTitle } from '@/shared/ui'
import { CATALOG, useCatalogSection } from '../model'
import { CategoryGrid } from './CategoryGrid'

export function CatalogSection() {
  const { categories, isLoading } = useCatalogSection()

  return (
    <Section id={CATALOG.id} className="lg:py-28">
      <Container>
        <SectionTitle>{CATALOG.title}</SectionTitle>
        <CategoryGrid categories={categories} isLoading={isLoading} skeletonCount={CATALOG.skeletonCount} />
        <div className="mt-10 flex justify-center lg:mt-[72px]">
          <Button href={CATALOG.action.href} size="lg" className="lg:min-w-[266px]">
            {CATALOG.action.label}
          </Button>
        </div>
      </Container>
    </Section>
  )
}
