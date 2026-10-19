import { cn } from '@/shared/lib'

const SIZES = {
  xs: 'text-xs leading-[15px]',
  sm: 'text-sm leading-relaxed',
}

const TONES = {
  muted: 'text-neutral-600',
  default: 'text-neutral-900',
}

// Размер и цвет — через пропсы, а не className: конфликтующие tailwind-классы не перебивают друг друга
export function SectionDescription({ size = 'xs', tone = 'muted', className, children }) {
  return <p className={cn('mx-auto text-center', SIZES[size], TONES[tone], className)}>{children}</p>
}
