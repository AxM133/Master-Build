import { useState } from 'react'
import { useTopProducts } from '@/entities/product'
import { TOP_PRODUCTS } from './content'
import { sortProducts } from './sortProducts'

export function useTopProductsSection() {
  const { data, isPending } = useTopProducts()
  const [sort, setSort] = useState(TOP_PRODUCTS.sortOptions[0].value)

  return {
    products: sortProducts(data ?? [], sort),
    isLoading: isPending,
    sort,
    setSort,
  }
}
