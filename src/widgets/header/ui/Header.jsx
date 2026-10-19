import { Container, Logo } from '@/shared/ui'
import { useMobileMenu } from '../model/useMobileMenu'
import { MenuToggle } from './MenuToggle'
import { NavLinks } from './NavLinks'
import { TopBar } from './TopBar'

export function Header({ onCallbackClick }) {
  const menu = useMobileMenu()

  return (
    <header className="bg-white">
      <TopBar onCallbackClick={onCallbackClick} />

      <Container className="flex items-center justify-between py-4">
        <Logo />
        <nav aria-label="Основная навигация" className="hidden lg:block">
          <NavLinks className="flex gap-8 text-xs font-semibold text-neutral-900" />
        </nav>
        <MenuToggle isOpen={menu.isOpen} onToggle={menu.toggle} />
      </Container>

      {menu.isOpen && (
        <nav aria-label="Мобильная навигация" className="border-t border-neutral-200 lg:hidden">
          <Container>
            <NavLinks
              className="flex flex-col py-2 text-sm font-semibold text-neutral-900"
              linkClassName="block py-2"
              onLinkClick={menu.close}
            />
          </Container>
        </nav>
      )}
    </header>
  )
}
