import { cn } from '@/shared/lib'

export function Badge({ className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm',
        className,
      )}
    >
      {children}
    </span>
  )
}
