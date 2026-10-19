import { cn, formatNumber } from '@/shared/lib'

export function BaseTypePicker({ options, value, onChange }) {
  return (
    <div role="radiogroup" aria-label="Тип покрытия" className="grid gap-3 sm:grid-cols-3">
      {options.map(({ id, label, hint, price }) => {
        const isActive = id === value

        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(id)}
            className={cn(
              'rounded-2xl border-2 p-4 text-left transition duration-200',
              isActive ? 'border-primary bg-primary/5' : 'border-neutral-200 hover:border-neutral-300',
            )}
          >
            <span className="block text-sm font-bold">{label}</span>
            <span className="mt-1 block text-xs text-neutral-500">{hint}</span>
            <span className={cn('mt-3 block text-sm font-extrabold', isActive ? 'text-primary' : 'text-neutral-900')}>{formatNumber(price)} ₽/м²</span>
          </button>
        )
      })}
    </div>
  )
}
