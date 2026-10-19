import { cn } from '@/shared/lib'

export function Icon({ viewBox = '0 0 24 24', className, children, ...props }) {
  return (
    <svg
      viewBox={viewBox}
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
