import { Button, Container } from '@/shared/ui'
import { HeroHighlights } from './HeroHighlights'

// Блоки появляются по очереди при загрузке страницы
const stagger = (step) => ({ animationDelay: `${step * 120}ms` })

export function HeroContent({ title, description, actions, highlights }) {
  return (
    <Container className="flex min-h-[480px] flex-col items-center justify-center py-20 text-center text-white md:min-h-[560px]">
      <h1 className="max-w-[820px] animate-fade-up text-balance text-[28px] font-bold leading-tight sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
        {title}
      </h1>
      <p style={stagger(1)} className="mt-6 max-w-[560px] animate-fade-up text-xs leading-relaxed text-white/85 sm:text-[13px]">
        {description}
      </p>
      <div style={stagger(2)} className="mt-9 flex w-full animate-fade-up flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
        <Button href={actions.primary.href} className="w-full sm:w-auto sm:min-w-[220px]">
          {actions.primary.label}
        </Button>
        <Button href={actions.secondary.href} variant="glass" className="w-full sm:w-auto sm:min-w-[220px]">
          {actions.secondary.label}
        </Button>
      </div>
      <HeroHighlights items={highlights} style={stagger(3)} />
    </Container>
  )
}
