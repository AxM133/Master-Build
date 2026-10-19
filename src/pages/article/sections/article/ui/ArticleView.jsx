import { ArticleContent, ArticleCover } from '@/entities/article'
import { useReadingProgress } from '@/shared/lib'
import { Container } from '@/shared/ui'
import { ArticleAside } from './ArticleAside'
import { ArticleHeader } from './ArticleHeader'
import { ReadingProgress } from './ReadingProgress'

export function ArticleView({ article, breadcrumbs }) {
  const [bodyRef, progress] = useReadingProgress()

  return (
    <article className="pb-16 pt-10 lg:pb-24 lg:pt-14">
      <ReadingProgress value={progress} />
      <Container>
        <ArticleHeader article={article} breadcrumbs={breadcrumbs} />
        <ArticleCover category={article.category} className="mx-auto mt-10 aspect-[21/9] max-w-[1050px] animate-fade-up rounded-[32px] [animation-delay:300ms]" />
        <div className="mx-auto mt-12 grid max-w-[1050px] gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
          <div ref={bodyRef}>
            <ArticleContent blocks={article.content} />
          </div>
          <ArticleAside title={article.title} />
        </div>
      </Container>
    </article>
  )
}
