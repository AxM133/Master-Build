import { Container, Section, SectionDescription, SectionTitle, SegmentedControl } from '@/shared/ui'
import { TOP_PRODUCTS, useProductSelection, useTopProductsSection } from '../model'
import { ProductGrid } from './ProductGrid'
import { ProductQuickView } from './ProductQuickView'

export function TopProductsSection() {
  const { products, isLoading, sort, setSort } = useTopProductsSection()
  const selection = useProductSelection()

  return (
    <Section id={TOP_PRODUCTS.id} className="lg:pb-[120px] lg:pt-28">
      <Container>
        <SectionTitle>{TOP_PRODUCTS.title}</SectionTitle>
        <SectionDescription className="mt-4 max-w-xl text-sm">{TOP_PRODUCTS.subtitle}</SectionDescription>
        <div className="mt-8 flex justify-center">
          <SegmentedControl options={TOP_PRODUCTS.sortOptions} value={sort} onChange={setSort} label={TOP_PRODUCTS.sortLabel} />
        </div>

        <ProductGrid
          key={sort}
          products={products}
          isLoading={isLoading}
          skeletonCount={TOP_PRODUCTS.skeletonCount}
          getColor={selection.getColor}
          onColorSelect={selection.selectColor}
          onOpen={selection.open}
        />
      </Container>

      <ProductQuickView
        product={selection.activeProduct}
        initialColor={selection.activeColor}
        onClose={selection.close}
        onSubmit={selection.submit}
      />
    </Section>
  )
}
