import { cn } from '@/shared/lib'

export function LayersDiagram({ items, activeId, onSelect }) {
  return (
    <div role="radiogroup" aria-label="Слои основания" className="flex flex-col overflow-hidden rounded-[28px] shadow-card">
      {items.map(({ id, name, thickness, color, height }) => {
        const isActive = id === activeId

        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onMouseEnter={() => onSelect(id)}
            onFocus={() => onSelect(id)}
            onClick={() => onSelect(id)}
            style={{ backgroundColor: color, minHeight: `${height * 1.6}px` }}
            className={cn(
              'group relative flex items-center justify-between gap-4 px-6 text-left transition-[filter,transform] duration-300',
              isActive ? 'z-10 scale-x-[1.03] brightness-110' : 'brightness-90 hover:brightness-100',
            )}
          >
            <span className={cn('rounded-full bg-black/45 px-3 py-1 text-xs font-bold text-white backdrop-blur transition-opacity', isActive ? 'opacity-100' : 'opacity-70')}>
              {name}
            </span>
            <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[11px] font-semibold text-neutral-800">{thickness}</span>
          </button>
        )
      })}
    </div>
  )
}
