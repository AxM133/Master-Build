import { Container, Section, SegmentedControl } from '@/shared/ui'
import { useArticlesList } from '../model'
import { ArticlesEmpty } from './ArticlesEmpty'
import { ArticlesGrid } from './ArticlesGrid'
import { ArticleSearch } from './ArticleSearch'

export function ArticlesListSection() {
  const list = useArticlesList()
  const isEmpty = !list.isLoading && list.articles.length === 0

  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <SegmentedControl options={list.categoryOptions} value={list.category} onChange={list.setCategory} label="Рубрики" />
          <ArticleSearch value={list.query} onChange={list.setQuery} />
        </div>
        {isEmpty ? <ArticlesEmpty onReset={list.reset} /> : <ArticlesGrid key={list.category} articles={list.articles} isLoading={list.isLoading} />}
      </Container>
    </Section>
  )
}
