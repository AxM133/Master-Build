import { useTopProducts } from '@/entities/product'

export function useTopProductsSection() {
  const { data, isPending } = useTopProducts()

  return { products: data ?? [], isLoading: isPending }
}
