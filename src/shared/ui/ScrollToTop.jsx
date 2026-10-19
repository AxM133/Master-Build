import { cn, useScrolled } from '@/shared/lib'
import { ChevronUpIcon } from './icons'

export function ScrollToTop() {
  const isVisible = useScrolled(700)

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Наверх"
      tabIndex={isVisible ? 0 : -1}
      className={cn(
        'fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-primary-hover sm:bottom-6 sm:right-6',
        isVisible ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ChevronUpIcon className="h-6 w-6" />
    </button>
  )
}
