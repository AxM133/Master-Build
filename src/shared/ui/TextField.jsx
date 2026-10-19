import { useId } from 'react'
import { cn } from '@/shared/lib'

export function TextField({ label, error, multiline = false, onChange, className, ...props }) {
  const id = useId()
  const Field = multiline ? 'textarea' : 'input'

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-neutral-700">
        {label}
      </label>
      <Field
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          'w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:ring-4 focus-visible:outline-none',
          error ? 'border-red-500 focus:ring-red-500/10' : 'border-neutral-200 focus:border-primary focus:ring-primary/10',
          multiline && 'min-h-[88px] resize-y',
        )}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 animate-fade-in text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
