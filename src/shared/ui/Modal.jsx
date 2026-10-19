import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn, useEscapeKey, useLockBodyScroll, useRestoreFocus } from '@/shared/lib'
import { CloseIcon } from './icons'

export function Modal({ isOpen, onClose, label, className, children }) {
  const dialogRef = useRef(null)

  useLockBodyScroll(isOpen)
  useEscapeKey(isOpen, onClose)
  useRestoreFocus(isOpen, dialogRef)

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <div aria-hidden="true" onClick={onClose} className="absolute inset-0 animate-fade-in bg-black/60 backdrop-blur-sm" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        className={cn(
          'relative max-h-[92vh] w-full animate-modal-in overflow-y-auto rounded-t-[28px] bg-white shadow-2xl outline-none sm:rounded-[28px]',
          className,
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-sm backdrop-blur transition hover:bg-neutral-100 hover:text-neutral-900"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
