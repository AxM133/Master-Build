import { ArticleCard } from '@/entities/article'
import { Button, Container, Reveal, Section, SectionTitle } from '@/shared/ui'
import { useRelatedArticles } from '../model'

export function RelatedSection() {
  const { articles, isVisible } = useRelatedArticles()
  if (!isVisible || articles.length === 0) return null

  return (
    <Section className="bg-neutral-50">
      <Container>
        <SectionTitle>Читайте также</SectionTitle>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal as="li" key={article.slug} delay={index * 80}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Button to="/articles" variant="outline">
            Все статьи
          </Button>
        </div>
      </Container>
    </Section>
  )
}
