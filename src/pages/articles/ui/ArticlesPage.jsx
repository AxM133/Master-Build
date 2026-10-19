import { useDocumentTitle } from '@/shared/lib'
import { CtaBanner } from '@/widgets/cta-banner'
import { ArticlesHero } from '../sections/hero'
import { ArticlesListSection } from '../sections/list'

export function ArticlesPage() {
  useDocumentTitle('Полезно знать')

  return (
    <>
      <ArticlesHero />
      <ArticlesListSection />
      <CtaBanner title="Остались вопросы?" text="Наши специалисты помогут подобрать плитку под ваш участок и рассчитают количество." />
    </>
  )
}
