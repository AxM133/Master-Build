import { ProductCard } from '@/entities/product'
import { Reveal, Skeleton } from '@/shared/ui'

export function ProductGrid({ products, isLoading, skeletonCount, getColor, onColorSelect, onOpen }) {
  return (
    <div className="mx-auto mt-10 grid max-w-[510px] gap-4 lg:mt-12 lg:max-w-none lg:grid-cols-[repeat(2,510px)] lg:justify-center lg:gap-x-[30px] lg:gap-y-[17px]">
      {isLoading
        ? Array.from({ length: skeletonCount }, (_, index) => <Skeleton key={index} className="h-[349px] rounded-[28px]" />)
        : products.map((product, index) => (
            <Reveal key={product.id} delay={(index % 2) * 100}>
              <ProductCard
                product={product}
                selectedColor={getColor(product)}
                onColorSelect={(color) => onColorSelect(product.id, color)}
                onOpen={() => onOpen(product)}
              />
            </Reveal>
          ))}
    </div>
  )
}
