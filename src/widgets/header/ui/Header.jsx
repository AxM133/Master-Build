import { openCallbackModal } from '@/features/request-callback'
import { cn } from '@/shared/lib'
import { Container, Logo } from '@/shared/ui'
import { useHeader } from '../model/useHeader'
import { HeaderActions } from './HeaderActions'
import { MobileMenu } from './MobileMenu'
import { NavLinks } from './NavLinks'
import { TopBar } from './TopBar'

// TopBar и строка навигации — соседи, чтобы sticky держался на всю высоту страницы
export function Header() {
  const { menu, isScrolled, isActive } = useHeader()

  return (
    <>
      <TopBar onCallbackClick={openCallbackModal} />
      <header
        className={cn(
          'sticky top-0 z-40 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300',
          isScrolled ? 'border-neutral-200/70 shadow-header' : 'border-transparent',
        )}
      >
        <Container className={cn('flex items-center justify-between gap-6 transition-[padding] duration-300', isScrolled ? 'py-2' : 'py-3 lg:py-4')}>
          <Logo />
          <nav aria-label="Основная навигация" className="hidden lg:block">
            <NavLinks isActive={isActive} />
          </nav>
          <HeaderActions isScrolled={isScrolled} onMenuOpen={menu.open} />
        </Container>
      </header>
      <MobileMenu isOpen={menu.isOpen} onClose={menu.close} isActive={isActive} onCallbackClick={openCallbackModal} />
    </>
  )
}
