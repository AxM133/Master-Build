import { Button, Container, InfinitePattern } from '@/shared/ui'

export function HeroSection({ title, description, pattern, actionLabel, actionHref }) {
  return (
    <section className="relative isolate overflow-hidden bg-dark-900">
      {pattern && <InfinitePattern src={pattern} tileSize={480} duration={16} className="-z-10" />}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35),rgba(0,0,0,0.65))]" />

      <Container className="flex min-h-[440px] flex-col items-center justify-center py-20 text-center text-white md:min-h-[530px]">
        <h1 className="max-w-[820px] text-[28px] font-bold leading-tight sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
          {title}
        </h1>
        <p className="mt-6 max-w-[560px] text-xs leading-relaxed text-white/85 sm:text-[13px]">{description}</p>
        <Button href={actionHref} className="mt-9 min-w-[200px] sm:min-w-[240px]">
          {actionLabel}
        </Button>
      </Container>
    </section>
  )
}
