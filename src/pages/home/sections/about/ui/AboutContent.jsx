import { Button, SectionTitle } from '@/shared/ui'
import { AboutText } from './AboutText'

export function AboutContent({ title, subtitle, paragraphs, company, action }) {
  return (
    <div className="px-4 py-14 sm:px-10 lg:max-w-[785px] lg:pb-[98px] lg:pl-[68px] lg:pr-20 lg:pt-[120px]">
      <SectionTitle align="left">{title}</SectionTitle>
      <p className="mt-6 text-lg font-bold leading-6 lg:mt-[84px] lg:text-xl">{subtitle}</p>
      <AboutText paragraphs={paragraphs} company={company} />
      <Button href={action.href} size="lg" className="mt-10 min-w-[240px] lg:mt-[43px]">
        {action.label}
      </Button>
    </div>
  )
}
