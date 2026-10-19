import { ArticleCard } from '@/entities/article'
import { Reveal, Skeleton } from '@/shared/ui'

export function ArticlesGrid({ articles, isLoading }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {isLoading
        ? Array.from({ length: 6 }, (_, index) => (
            <li key={index}>
              <Skeleton className="h-[400px] rounded-[28px]" />
            </li>
          ))
        : articles.map((article, index) => (
            <Reveal as="li" key={article.slug} delay={(index % 3) * 80}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
    </ul>
  )
}
