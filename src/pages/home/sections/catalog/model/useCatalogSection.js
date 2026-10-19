import { useCategories } from '@/entities/category'

export function useCatalogSection() {
  const { data, isPending } = useCategories()

  return { categories: data ?? [], isLoading: isPending }
}
