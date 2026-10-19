import { cn } from '@/shared/lib'

const SIZES = {
  sm: 'h-3.5 w-3.5 rounded-[3px] ring-offset-2',
  lg: 'h-9 w-9 rounded-full ring-offset-[3px]',
}

const GAPS = {
  sm: 'mt-2.5 gap-2.5 sm:gap-[11px]',
  lg: 'gap-3',
}

export function ProductColors({ colors, selected, onSelect, size = 'sm', className }) {
  return (
    <div role="radiogroup" aria-label="Цвет" className={cn('flex flex-wrap', GAPS[size], className)}>
      {colors.map(({ name, hex }) => {
        const isActive = name === selected

        return (
          <button
            key={hex}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={name}
            title={name}
            onClick={() => onSelect?.(name)}
            style={{ backgroundColor: hex }}
            className={cn(
              "relative shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] transition duration-200 before:absolute before:-inset-[5px] before:content-[''] hover:scale-125",
              SIZES[size],
              isActive && 'scale-110 ring-2 ring-primary',
            )}
          />
        )
      })}
    </div>
  )
}
