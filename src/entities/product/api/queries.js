import { useQuery } from '@tanstack/react-query'
import { getTopProducts } from './productApi'

export const productKeys = {
  all: ['products'],
  top: () => [...productKeys.all, 'top'],
}

export const useTopProducts = () =>
  useQuery({
    queryKey: productKeys.top(),
    queryFn: getTopProducts,
  })
