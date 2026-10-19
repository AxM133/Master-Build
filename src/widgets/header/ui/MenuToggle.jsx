import { CloseIcon, MenuIcon } from '@/shared/ui'

export function MenuToggle({ isOpen, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={isOpen}
      className="text-neutral-900 lg:hidden"
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  )
}
