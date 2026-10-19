import { SITE } from '@/shared/config'
import { toTelHref } from '@/shared/lib'
import { Button, Picture, SectionTitle } from '@/shared/ui'

export function AboutSection({ title, subtitle, paragraphs, image, actionLabel, actionHref }) {
  const phone = SITE.phones[0]

  return (
    <section id="about" className="grid bg-dark text-white lg:grid-cols-2">
      <Picture src={image} alt={subtitle} className="h-72 w-full lg:h-full lg:min-h-[480px]" />
      <div className="px-4 py-14 sm:px-10 lg:max-w-[585px] lg:px-16 lg:py-20">
        <SectionTitle align="left">{title}</SectionTitle>
        <p className="mt-6 text-sm font-semibold leading-relaxed">{subtitle}</p>
        {paragraphs.map((text) => (
          <p key={text} className="mt-4 text-xs leading-relaxed text-neutral-300">
            {text}
          </p>
        ))}
        <a href={toTelHref(phone)} className="mt-4 inline-block text-xs text-neutral-300 hover:text-primary">
          {phone}
        </a>
        <div className="mt-8">
          <Button href={actionHref}>{actionLabel}</Button>
        </div>
      </div>
    </section>
  )
}
