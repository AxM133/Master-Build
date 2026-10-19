import { CartIndicator } from '@/features/cart'
import { SITE } from '@/shared/config'
import { cn, toTelHref } from '@/shared/lib'
import { MenuIcon, PhoneIcon, PhoneLink } from '@/shared/ui'

const ICON_BUTTON = 'flex h-10 w-10 items-center justify-center rounded-full text-neutral-900 transition hover:bg-neutral-100 hover:text-primary'

export function HeaderActions({ isScrolled, onMenuOpen }) {
  const phone = SITE.phones[0]

  return (
    <div className="flex items-center gap-1">
      <PhoneLink
        phone={phone}
        className={cn('mr-3 hidden whitespace-nowrap text-sm font-bold transition duration-300 xl:block', isScrolled ? 'opacity-100' : 'pointer-events-none translate-y-1 opacity-0')}
      />
      <a href={toTelHref(phone)} aria-label={`Позвонить: ${phone}`} className={cn(ICON_BUTTON, 'lg:hidden')}>
        <PhoneIcon className="h-5 w-5" />
      </a>
      <CartIndicator />
      <button type="button" onClick={onMenuOpen} aria-label="Открыть меню" className={cn(ICON_BUTTON, 'lg:hidden')}>
        <MenuIcon />
      </button>
    </div>
  )
}
