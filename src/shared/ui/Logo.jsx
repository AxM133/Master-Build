import { cn } from '@/shared/lib'

export function Logo({ href = '/', className }) {
  return (
    <a href={href} className={cn('inline-flex items-center gap-2', className)} aria-label="Мастер Строй — на главную">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-extrabold text-white">
        МС
      </span>
      <span className="text-sm font-extrabold uppercase leading-none tracking-wide">
        <span className="block text-neutral-900">Мастер</span>
        <span className="block text-primary">Строй</span>
      </span>
    </a>
  )
}
