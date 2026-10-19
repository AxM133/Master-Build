import { cn } from '@/shared/lib'

export function Icon({ className, children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn('h-6 w-6 shrink-0', className)}
      {...props}
    >
      {children}
    </svg>
  )
}
