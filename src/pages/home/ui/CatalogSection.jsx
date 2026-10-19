import { CategoryCard } from '@/entities/category'
import { Button, Container, Section, SectionTitle, Skeleton } from '@/shared/ui'

export function CatalogSection({ categories, isLoading, moreHref = '/catalog' }) {
  return (
    <Section id="catalog">
      <Container>
        <SectionTitle>Каталог продукции</SectionTitle>
        <div className="mx-auto mt-10 grid max-w-[870px] grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }, (_, index) => <Skeleton key={index} className="aspect-[4/5]" />)
            : categories.map((category) => <CategoryCard key={category.id} category={category} />)}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href={moreHref}>Больше товаров</Button>
        </div>
      </Container>
    </Section>
  )
}
