import { getMinPrice } from '@/entities/product'

const byMinPrice = (direction) => (a, b) =>
  direction * ((getMinPrice(a.prices) ?? Infinity) - (getMinPrice(b.prices) ?? Infinity))

const COMPARATORS = {
  'price-asc': byMinPrice(1),
  'price-desc': byMinPrice(-1),
}

// «popular» — порядок с бэкенда
export function sortProducts(products, sort) {
  const comparator = COMPARATORS[sort]

  return comparator ? [...products].sort(comparator) : products
}
