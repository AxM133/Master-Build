import { createPortal } from 'react-dom'
import { dismissToast, useToasts } from '@/shared/lib'
import { CheckIcon, CloseIcon } from './icons'

export function Toaster() {
  const toasts = useToasts()

  return createPortal(
    <div aria-live="polite" className="pointer-events-none fixed inset-x-4 bottom-4 z-[60] flex flex-col items-center gap-2 sm:bottom-6">
      {toasts.map(({ id, title, description, action }) => (
        <div
          key={id}
          role="status"
          className="pointer-events-auto flex w-full max-w-sm animate-toast-in items-center gap-3 rounded-2xl bg-neutral-900/95 px-4 py-3 text-white shadow-2xl backdrop-blur"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
            <CheckIcon className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">{title}</p>
            {description && <p className="truncate text-xs text-white/60">{description}</p>}
          </div>
          {action && (
            <button
              type="button"
              onClick={() => {
                action.onClick()
                dismissToast(id)
              }}
              className="shrink-0 rounded-full px-2 py-1 text-xs font-bold text-primary-light transition hover:bg-white/10"
            >
              {action.label}
            </button>
          )}
          <button type="button" onClick={() => dismissToast(id)} aria-label="Скрыть уведомление" className="shrink-0 text-white/40 transition hover:text-white">
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>,
    document.body,
  )
}
