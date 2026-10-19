import { useParams } from 'react-router-dom'
import { useArticles } from '@/entities/article'

const LIMIT = 3

// Сначала статьи той же рубрики, затем остальные
export function useRelatedArticles() {
  const { slug } = useParams()
  const { data = [] } = useArticles()

  const current = data.find((article) => article.slug === slug)
  const others = data.filter((article) => article.slug !== slug)
  const sameCategory = others.filter((article) => article.category === current?.category)
  const rest = others.filter((article) => article.category !== current?.category)

  return { articles: [...sameCategory, ...rest].slice(0, LIMIT), isVisible: Boolean(current) }
}
