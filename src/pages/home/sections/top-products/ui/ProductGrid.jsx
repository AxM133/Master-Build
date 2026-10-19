import { ProductCard } from '@/entities/product'
import { Skeleton } from '@/shared/ui'

export function ProductGrid({ products, isLoading, skeletonCount, onAddProduct }) {
  return (
    <div className="mx-auto mt-10 grid max-w-[870px] gap-6 md:grid-cols-2">
      {isLoading
        ? Array.from({ length: skeletonCount }, (_, index) => <Skeleton key={index} className="h-72" />)
        : products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAddProduct} />)}
    </div>
  )
}
