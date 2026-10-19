import { useCategories } from '@/entities/category'
import { useTopProducts } from '@/entities/product'
import { ABOUT, ADVANTAGES, HERO, PRODUCTION, WORKS } from '../model'
import { AboutSection } from './AboutSection'
import { AdvantagesSection } from './AdvantagesSection'
import { CatalogSection } from './CatalogSection'
import { HeroSection } from './HeroSection'
import { ProductionSection } from './ProductionSection'
import { TopProductsSection } from './TopProductsSection'
import { WorksSection } from './WorksSection'

export function HomePage() {
  const categories = useCategories()
  const topProducts = useTopProducts()

  return (
    <>
      <HeroSection {...HERO} />
      <CatalogSection categories={categories.data ?? []} isLoading={categories.isPending} />
      <AboutSection {...ABOUT} />
      <TopProductsSection products={topProducts.data ?? []} isLoading={topProducts.isPending} />
      <ProductionSection {...PRODUCTION} />
      <WorksSection {...WORKS} />
      <AdvantagesSection {...ADVANTAGES} />
    </>
  )
}
