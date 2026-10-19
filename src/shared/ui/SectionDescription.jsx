import { cn } from '@/shared/lib'

export function SectionDescription({ className, children }) {
  return <p className={cn('mx-auto max-w-4xl text-center text-xs leading-relaxed text-neutral-600', className)}>{children}</p>
}
