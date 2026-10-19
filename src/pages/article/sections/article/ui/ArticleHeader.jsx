import { ArticleMeta, getCategoryLabel } from '@/entities/article'
import { Breadcrumbs } from '@/shared/ui'

export function ArticleHeader({ article, breadcrumbs }) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <Breadcrumbs items={breadcrumbs} className="flex animate-fade-in justify-center text-neutral-900 [&_ol]:justify-center" />
      <span className="mt-8 inline-block animate-fade-up rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
        {getCategoryLabel(article.category)}
      </span>
      <h1 style={{ animationDelay: '80ms' }} className="mt-4 animate-fade-up text-balance text-3xl font-bold leading-tight lg:text-[44px] lg:leading-[1.15]">
        {article.title}
      </h1>
      <p style={{ animationDelay: '160ms' }} className="mx-auto mt-5 max-w-2xl animate-fade-up text-base leading-relaxed text-neutral-600">
        {article.excerpt}
      </p>
      <ArticleMeta
        publishedAt={article.publishedAt}
        readTime={article.readTime}
        className="mt-6 animate-fade-up justify-center text-neutral-500 [animation-delay:240ms]"
      />
    </header>
  )
}
