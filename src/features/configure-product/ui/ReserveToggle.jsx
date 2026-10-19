import { cn } from '@/shared/lib'

export function ReserveToggle({ checked, onToggle, percent }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onToggle}
      className="mt-4 flex items-center gap-3 text-left text-sm text-neutral-700"
    >
      <span className={cn('relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200', checked ? 'bg-primary' : 'bg-neutral-300')}>
        <span
          className={cn(
            'absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200',
            checked && 'translate-x-5',
          )}
        />
      </span>
      Запас {percent}% на подрезку и бой
    </button>
  )
}
