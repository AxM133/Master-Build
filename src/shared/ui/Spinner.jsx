import { cn } from '@/shared/lib'

export function Spinner({ className }) {
  return (
    <span
      aria-hidden="true"
      className={cn('inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent', className)}
    />
  )
}
