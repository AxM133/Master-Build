import { useParams } from 'react-router-dom'
import { getCategoryLabel, useArticle } from '@/entities/article'
import { useDocumentTitle } from '@/shared/lib'

export function useArticlePage() {
  const { slug } = useParams()
  const { data: article, isPending } = useArticle(slug)

  useDocumentTitle(article?.title)

  return {
    article,
    isLoading: isPending,
    isNotFound: !isPending && !article,
    breadcrumbs: [
      { label: 'Главная', to: '/' },
      { label: 'Полезно знать', to: '/articles' },
      { label: article ? getCategoryLabel(article.category) : '…' },
    ],
  }
}
