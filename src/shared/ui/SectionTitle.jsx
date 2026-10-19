import { cn } from '@/shared/lib'

export function SectionTitle({ align = 'center', className, children }) {
  return (
    <h2 className={cn('text-[26px] font-bold leading-tight md:text-[32px] lg:text-4xl', align === 'center' ? 'text-center' : 'text-left', className)}>
      {children}
    </h2>
  )
}
