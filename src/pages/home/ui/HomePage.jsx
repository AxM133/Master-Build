import { AboutSection } from '../sections/about'
import { AdvantagesSection } from '../sections/advantages'
import { CatalogSection } from '../sections/catalog'
import { HeroSection } from '../sections/hero'
import { ProductionSection } from '../sections/production'
import { TopProductsSection } from '../sections/top-products'
import { WorksSection } from '../sections/works'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CatalogSection />
      <AboutSection />
      <TopProductsSection />
      <ProductionSection />
      <WorksSection />
      <AdvantagesSection />
    </>
  )
}
