import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn, useEscapeKey, useLockBodyScroll, usePresence, useRestoreFocus } from '@/shared/lib'
import { CloseIcon } from './icons'

// Боковая панель справа: корзина, мобильное меню
export function Drawer({ isOpen, onClose, title, header, footer, className, children }) {
  const panelRef = useRef(null)
  const { isMounted, isClosing } = usePresence(isOpen)

  useLockBodyScroll(isMounted)
  useEscapeKey(isOpen, onClose)
  useRestoreFocus(isOpen, panelRef)

  if (!isMounted) return null

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn('absolute inset-0 bg-black/50 backdrop-blur-sm', isClosing ? 'animate-fade-out' : 'animate-fade-in')}
      />
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className={cn(
          'absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl outline-none',
          isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right',
          className,
        )}
      >
        <div className="flex items-center justify-between gap-4 border-b border-neutral-100 px-6 py-5">
          {header ?? <h2 className="text-lg font-bold">{title}</h2>}
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-5">{children}</div>
        {footer && <div className="border-t border-neutral-100 px-6 py-5">{footer}</div>}
      </aside>
    </div>,
    document.body,
  )
}
