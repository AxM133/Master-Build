import { cn } from '@/shared/lib'

export function Skeleton({ className }) {
  return <div className={cn('animate-pulse rounded-2xl bg-neutral-200', className)} />
}
