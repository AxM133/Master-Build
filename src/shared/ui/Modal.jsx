import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn, useEscapeKey, useLockBodyScroll, useRestoreFocus } from '@/shared/lib'
import { CloseIcon } from './icons'

const VARIANTS = {
  card: {
    backdrop: 'bg-black/60 backdrop-blur-sm',
    dialog: 'max-h-[92vh] overflow-y-auto rounded-t-[28px] bg-white shadow-2xl sm:rounded-[28px]',
    close: 'right-4 top-4 bg-white/90 text-neutral-700 shadow-sm hover:bg-neutral-100 hover:text-neutral-900',
  },
  // Прозрачный контейнер на тёмном фоне — для галерей и медиа
  bare: {
    backdrop: 'bg-black/85 backdrop-blur-md',
    dialog: 'self-center px-4 sm:px-0',
    close: 'fixed right-4 top-4 bg-white/10 text-white hover:bg-white/20',
  },
}

export function Modal({ isOpen, onClose, label, variant = 'card', className, children }) {
  const dialogRef = useRef(null)
  const styles = VARIANTS[variant]

  useLockBodyScroll(isOpen)
  useEscapeKey(isOpen, onClose)
  useRestoreFocus(isOpen, dialogRef)

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <div aria-hidden="true" onClick={onClose} className={cn('absolute inset-0 animate-fade-in', styles.backdrop)} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        className={cn('relative w-full animate-modal-in outline-none', styles.dialog, className)}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className={cn('absolute z-10 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur transition', styles.close)}
        >
          <CloseIcon className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
