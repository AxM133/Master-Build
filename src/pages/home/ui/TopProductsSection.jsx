import { ProductCard } from '@/entities/product'
import { Container, Section, SectionTitle, Skeleton } from '@/shared/ui'

export function TopProductsSection({ products, isLoading, onAddProduct }) {
  return (
    <Section id="top-products">
      <Container>
        <SectionTitle>Топ товаров</SectionTitle>
        <div className="mx-auto mt-10 grid max-w-[870px] gap-6 md:grid-cols-2">
          {isLoading
            ? Array.from({ length: 6 }, (_, index) => <Skeleton key={index} className="h-72" />)
            : products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAddProduct} />)}
        </div>
      </Container>
    </Section>
  )
}
