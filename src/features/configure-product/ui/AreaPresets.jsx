import { cn } from '@/shared/lib'

export function AreaPresets({ presets, value, onSelect }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {presets.map((preset) => (
        <button
          key={preset}
          type="button"
          onClick={() => onSelect(preset)}
          aria-pressed={preset === value}
          className={cn(
            'rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors',
            preset === value
              ? 'border-primary bg-primary text-white'
              : 'border-neutral-200 text-neutral-700 hover:border-primary hover:text-primary',
          )}
        >
          {preset} м²
        </button>
      ))}
    </div>
  )
}
