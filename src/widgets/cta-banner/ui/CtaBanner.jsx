import { openCallbackModal } from '@/features/request-callback'
import { SITE } from '@/shared/config'
import { toTelHref } from '@/shared/lib'
import { Button, Container, PhoneIcon, Reveal } from '@/shared/ui'

export function CtaBanner({ title, text, actionLabel = 'Заказать звонок' }) {
  const phone = SITE.phones[0]

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[32px] bg-primary px-6 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-16 lg:py-14">
          <span aria-hidden="true" className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/10" />
          <span aria-hidden="true" className="absolute -bottom-28 right-40 h-56 w-56 rounded-full bg-white/5" />
          <div className="relative">
            <h2 className="text-balance text-2xl font-bold leading-tight lg:text-3xl">{title}</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85">{text}</p>
          </div>
          <div className="relative mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
            <Button variant="light" size="lg" onClick={openCallbackModal} className="lg:px-10">
              {actionLabel}
            </Button>
            <Button href={toTelHref(phone)} variant="glass" size="lg" className="lg:px-8">
              <PhoneIcon className="h-5 w-5" />
              {phone}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
