import { Logo } from '@/shared/ui'
import { ProductionFeatureList } from './ProductionFeatureList'

export function ProductionFeatures({ features }) {
  return (
    <div>
      <div className="inline-flex h-[74px] items-center rounded-[37px] bg-white px-10">
        <Logo size="lg" />
      </div>
      <ProductionFeatureList features={features} />
    </div>
  )
}
