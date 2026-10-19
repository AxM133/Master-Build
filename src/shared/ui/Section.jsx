import { cn } from '@/shared/lib'

export function Section({ id, dark = false, className, children }) {
  return (
    <section id={id} className={cn('py-16 md:py-20', dark ? 'bg-dark text-white' : 'bg-white text-neutral-900', className)}>
      {children}
    </section>
  )
}
