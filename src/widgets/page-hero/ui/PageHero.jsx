import pavingTile from '@/shared/assets/patterns/paving-tile.svg'
import { Breadcrumbs, Container, InfinitePattern } from '@/shared/ui'

const stagger = (step) => ({ animationDelay: `${step * 120}ms` })

export function PageHero({ breadcrumbs, title, description, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-dark-900 text-white">
      <InfinitePattern src={pavingTile} tileSize={420} duration={40} className="-z-10 opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/50" />
      <Container className="py-12 lg:py-20">
        <Breadcrumbs items={breadcrumbs} className="animate-fade-in" />
        <h1 className="mt-6 max-w-3xl animate-fade-up text-balance text-3xl font-bold leading-tight lg:text-5xl lg:leading-[1.15]">{title}</h1>
        {description && (
          <p style={stagger(1)} className="mt-5 max-w-2xl animate-fade-up text-sm leading-relaxed text-white/80 lg:text-base">
            {description}
          </p>
        )}
        {children && (
          <div style={stagger(2)} className="mt-8 animate-fade-up">
            {children}
          </div>
        )}
      </Container>
    </section>
  )
}
