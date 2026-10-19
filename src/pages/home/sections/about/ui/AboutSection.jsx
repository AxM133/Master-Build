import { ABOUT } from '../model'
import { AboutContent } from './AboutContent'
import { AboutImage } from './AboutImage'

export function AboutSection() {
  return (
    <section id={ABOUT.id} className="grid bg-dark text-white lg:grid-cols-[minmax(0,748fr)_minmax(0,852fr)]">
      <AboutImage src={ABOUT.image} alt={ABOUT.subtitle} />
      <AboutContent
        title={ABOUT.title}
        subtitle={ABOUT.subtitle}
        paragraphs={ABOUT.paragraphs}
        company={ABOUT.company}
        action={ABOUT.action}
      />
    </section>
  )
}
