import { cn } from '@/shared/lib'

export function SegmentedControl({ options, value, onChange, label, className }) {
  return (
    <div className={cn('max-w-full overflow-x-auto', className)}>
      <div role="radiogroup" aria-label={label} className="inline-flex gap-1 rounded-full bg-neutral-100 p-1">
        {options.map((option) => {
          const isActive = option.value === value

          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onChange(option.value)}
              className={cn(
                'whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 sm:px-5',
                isActive ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-900',
              )}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
