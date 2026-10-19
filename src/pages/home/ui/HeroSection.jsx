import { Button, Container } from '@/shared/ui'

export function HeroSection({ title, description, image, actionLabel, actionHref }) {
  return (
    <section className="relative overflow-hidden bg-dark-900">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
      <div className="absolute inset-0 bg-black/50" />
      <Container className="relative flex min-h-[420px] flex-col items-center justify-center py-20 text-center text-white md:min-h-[520px]">
        <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-200">{description}</p>
        <Button href={actionHref} className="mt-8">
          {actionLabel}
        </Button>
      </Container>
    </section>
  )
}
