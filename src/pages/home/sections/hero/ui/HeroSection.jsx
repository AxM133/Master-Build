import { HERO } from '../model'
import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'
import { ScrollHint } from './ScrollHint'

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-dark-900">
      <HeroBackground {...HERO.background} />
      <HeroContent title={HERO.title} description={HERO.description} actions={HERO.actions} highlights={HERO.highlights} />
      <ScrollHint href={HERO.scrollTarget} />
    </section>
  )
}
