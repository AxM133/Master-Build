import { Button, Container } from '@/shared/ui'

export function HeroContent({ title, description, action }) {
  return (
    <Container className="flex min-h-[440px] flex-col items-center justify-center py-20 text-center text-white md:min-h-[530px]">
      <h1 className="max-w-[820px] text-[28px] font-bold leading-tight sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
        {title}
      </h1>
      <p className="mt-6 max-w-[560px] text-xs leading-relaxed text-white/85 sm:text-[13px]">{description}</p>
      <Button href={action.href} className="mt-9 min-w-[200px] sm:min-w-[240px]">
        {action.label}
      </Button>
    </Container>
  )
}
