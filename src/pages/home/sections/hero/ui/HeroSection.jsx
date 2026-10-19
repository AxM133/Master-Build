import { HERO } from '../model'
import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-dark-900">
      <HeroBackground {...HERO.background} />
      <HeroContent title={HERO.title} description={HERO.description} action={HERO.action} />
    </section>
  )
}
