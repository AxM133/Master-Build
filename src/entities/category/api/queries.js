import { useQuery } from '@tanstack/react-query'
import { getCategories } from './categoryApi'

export const categoryKeys = {
  all: ['categories'],
}

export const useCategories = () =>
  useQuery({
    queryKey: categoryKeys.all,
    queryFn: getCategories,
  })
