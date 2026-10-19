import { Button, PhoneLink, SectionTitle } from '@/shared/ui'

export function AboutContent({ title, subtitle, paragraphs, phone, action }) {
  return (
    <div className="px-4 py-14 sm:px-10 lg:max-w-[585px] lg:px-16 lg:py-20">
      <SectionTitle align="left">{title}</SectionTitle>
      <p className="mt-6 text-sm font-semibold leading-relaxed">{subtitle}</p>
      {paragraphs.map((text) => (
        <p key={text} className="mt-4 text-xs leading-relaxed text-neutral-300">
          {text}
        </p>
      ))}
      <PhoneLink phone={phone} className="mt-4 inline-block text-xs text-neutral-300" />
      <div className="mt-8">
        <Button href={action.href}>{action.label}</Button>
      </div>
    </div>
  )
}
