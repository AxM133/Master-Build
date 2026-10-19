import { Picture } from '@/shared/ui'
import { ABOUT } from '../model'
import { AboutContent } from './AboutContent'

export function AboutSection() {
  return (
    <section id={ABOUT.id} className="grid bg-dark text-white lg:grid-cols-2">
      <Picture src={ABOUT.image} alt={ABOUT.subtitle} className="h-72 w-full lg:h-full lg:min-h-[480px]" />
      <AboutContent
        title={ABOUT.title}
        subtitle={ABOUT.subtitle}
        paragraphs={ABOUT.paragraphs}
        phone={ABOUT.phone}
        action={ABOUT.action}
      />
    </section>
  )
}
