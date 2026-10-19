import { useArticlePage } from '../model'
import { ArticleNotFound } from './ArticleNotFound'
import { ArticleSkeleton } from './ArticleSkeleton'
import { ArticleView } from './ArticleView'

export function ArticleSection() {
  const { article, isLoading, isNotFound, breadcrumbs } = useArticlePage()

  if (isLoading) return <ArticleSkeleton />
  if (isNotFound) return <ArticleNotFound />

  return <ArticleView key={article.slug} article={article} breadcrumbs={breadcrumbs} />
}
