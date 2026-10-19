import { cn } from '@/shared/lib'
import { ChevronLeftIcon, ChevronRightIcon } from '@/shared/ui'

export function LightboxArrow({ direction, onClick }) {
  const isPrev = direction === 'prev'
  const Icon = isPrev ? ChevronLeftIcon : ChevronRightIcon

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? 'Предыдущее фото' : 'Следующее фото'}
      className={cn(
        'absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg transition hover:scale-110 hover:bg-white',
        isPrev ? 'left-3 lg:-left-16' : 'right-3 lg:-right-16',
      )}
    >
      <Icon className="h-6 w-6" />
    </button>
  )
}
