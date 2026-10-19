import { cn } from '@/shared/lib'
import { Reveal } from './Reveal'

export function SectionTitle({ align = 'center', className, children }) {
  return (
    <Reveal
      as="h2"
      className={cn(
        'text-balance text-[26px] font-bold leading-tight md:text-[32px] lg:text-4xl',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {children}
    </Reveal>
  )
}
