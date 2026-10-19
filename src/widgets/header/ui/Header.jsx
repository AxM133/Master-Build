import { useState } from 'react'
import { MAIN_NAV, SITE } from '@/shared/config'
import { toTelHref } from '@/shared/lib'
import { Button, ClockIcon, CloseIcon, Container, LocationIcon, Logo, MenuIcon, PhoneIcon } from '@/shared/ui'

export function Header({ onCallbackClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <div className="bg-dark text-white">
        <Container className="flex items-center justify-between gap-6 py-3 text-xs">
          <p className="hidden items-center gap-2 lg:flex">
            <LocationIcon className="h-4 w-4 text-primary" />
            {SITE.address}
          </p>
          <p className="hidden items-center gap-2 md:flex">
            <ClockIcon className="h-4 w-4 text-primary" />
            Режим работы: {SITE.workHours}
          </p>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-4 w-4 text-primary" />
            <ul className="flex flex-col">
              {SITE.phones.slice(0, 2).map((phone) => (
                <li key={phone}>
                  <a href={toTelHref(phone)} className="hover:text-primary">
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Button variant="light" size="sm" onClick={onCallbackClick}>
            Заказать звонок
          </Button>
        </Container>
      </div>

      <Container className="flex items-center justify-between py-4">
        <Logo />
        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex gap-8 text-xs font-semibold text-neutral-900">
            {MAIN_NAV.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          className="text-neutral-900 lg:hidden"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {isMenuOpen && (
        <nav aria-label="Мобильная навигация" className="border-t border-neutral-200 lg:hidden">
          <Container>
            <ul className="flex flex-col py-2 text-sm font-semibold text-neutral-900">
              {MAIN_NAV.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="block py-2 hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  )
}
