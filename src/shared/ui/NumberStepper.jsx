import { clamp } from '@/shared/lib'
import { MinusIcon, PlusIcon } from './icons'

const STEP_BUTTON =
  'flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-neutral-700 transition hover:bg-neutral-100 hover:text-primary disabled:pointer-events-none disabled:opacity-30'

export function NumberStepper({ value, onChange, min = 0, max = Infinity, step = 1, suffix, label }) {
  return (
    <div className="flex h-12 items-center rounded-full border border-neutral-200 bg-white transition-colors focus-within:border-primary">
      <button type="button" onClick={() => onChange(clamp(value - step, min, max))} disabled={value <= min} aria-label="Уменьшить" className={STEP_BUTTON}>
        <MinusIcon className="h-5 w-5" />
      </button>
      <label className="flex flex-1 items-baseline justify-center gap-1">
        <span className="sr-only">{label}</span>
        <input
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number.isNaN(event.target.valueAsNumber) ? 0 : clamp(event.target.valueAsNumber, 0, max))}
          onBlur={() => value < min && onChange(min)}
          className="w-20 bg-transparent text-center text-lg font-bold outline-none [appearance:textfield] focus-visible:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        {suffix && <span className="text-sm font-semibold text-neutral-500">{suffix}</span>}
      </label>
      <button type="button" onClick={() => onChange(clamp(value + step, min, max))} disabled={value >= max} aria-label="Увеличить" className={STEP_BUTTON}>
        <PlusIcon className="h-5 w-5" />
      </button>
    </div>
  )
}
