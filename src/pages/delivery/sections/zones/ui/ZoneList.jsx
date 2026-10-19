import { cn } from '@/shared/lib'
import { ChevronRightIcon, LocationIcon } from '@/shared/ui'

export function ZoneList({ items, activeId, onSelect }) {
  return (
    <div role="radiogroup" aria-label="Населённый пункт" className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
      {items.map(({ id, name, price }) => {
        const isActive = id === activeId

        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onSelect(id)}
            className={cn(
              'group flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition duration-200',
              isActive ? 'border-primary bg-primary text-white shadow-lg shadow-primary/25' : 'border-neutral-200 bg-white hover:border-primary/50',
            )}
          >
            <LocationIcon className={cn('h-5 w-5 shrink-0', isActive ? 'text-white' : 'text-primary')} />
            <span className="flex-1 text-sm font-bold">{name}</span>
            <span className={cn('text-xs font-semibold', isActive ? 'text-white/85' : 'text-neutral-500')}>{price}</span>
            <ChevronRightIcon className={cn('h-4 w-4 shrink-0 transition-transform', isActive ? 'translate-x-0.5' : 'opacity-30 group-hover:translate-x-0.5')} />
          </button>
        )
      })}
    </div>
  )
}
