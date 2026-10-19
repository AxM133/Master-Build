import { useState } from 'react'
import { ARTICLE_CATEGORIES, useArticles } from '@/entities/article'
import { ALL_CATEGORIES, filterArticles } from './filterArticles'

const CATEGORY_OPTIONS = [{ value: ALL_CATEGORIES, label: 'Все' }, ...ARTICLE_CATEGORIES.map(({ id, label }) => ({ value: id, label }))]

export function useArticlesList() {
  const { data, isPending } = useArticles()
  const [category, setCategory] = useState(ALL_CATEGORIES)
  const [query, setQuery] = useState('')

  return {
    articles: filterArticles(data ?? [], { category, query }),
    isLoading: isPending,
    categoryOptions: CATEGORY_OPTIONS,
    category,
    setCategory,
    query,
    setQuery,
    reset: () => {
      setCategory(ALL_CATEGORIES)
      setQuery('')
    },
  }
}
