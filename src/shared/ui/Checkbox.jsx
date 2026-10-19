import { cn } from '@/shared/lib'

export function Checkbox({ checked, onChange, error, children }) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-neutral-600">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className={cn('mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-primary', error && 'outline outline-1 outline-red-500')}
        />
        <span>{children}</span>
      </label>
      {error && <p className="mt-1 animate-fade-in text-xs text-red-600">{error}</p>}
    </div>
  )
}
