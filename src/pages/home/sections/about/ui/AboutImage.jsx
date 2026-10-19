import { Picture, Reveal } from '@/shared/ui'

export function AboutImage({ src, alt }) {
  return (
    <Reveal className="relative h-72 overflow-hidden rounded-b-[24px] sm:h-96 lg:h-auto lg:rounded-b-none lg:rounded-r-[24px]">
      <Picture src={src} alt={alt} className="absolute inset-0 h-full w-full" />
    </Reveal>
  )
}
