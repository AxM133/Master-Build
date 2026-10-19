import { cn } from '@/shared/lib'

export function SectionTitle({ align = 'center', className, children }) {
  return (
    <h2 className={cn('text-2xl font-bold md:text-[32px]', align === 'center' ? 'text-center' : 'text-left', className)}>
      {children}
    </h2>
  )
}
