import { Container, Section, SectionTitle } from '@/shared/ui'
import { TOP_PRODUCTS, useTopProductsSection } from '../model'
import { ProductGrid } from './ProductGrid'

export function TopProductsSection() {
  const { products, isLoading } = useTopProductsSection()

  return (
    <Section id={TOP_PRODUCTS.id}>
      <Container>
        <SectionTitle>{TOP_PRODUCTS.title}</SectionTitle>
        <ProductGrid products={products} isLoading={isLoading} skeletonCount={TOP_PRODUCTS.skeletonCount} />
      </Container>
    </Section>
  )
}
