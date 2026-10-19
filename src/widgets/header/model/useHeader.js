import { useLocation } from 'react-router-dom'
import { useActiveSection, useScrolled } from '@/shared/lib'
import { isNavLinkActive, NAV_SECTION_IDS } from './navigation'
import { useMobileMenu } from './useMobileMenu'

export function useHeader() {
  const { pathname } = useLocation()
  const menu = useMobileMenu()
  const isScrolled = useScrolled(48)
  const activeSectionId = useActiveSection(NAV_SECTION_IDS, pathname)

  return {
    menu,
    isScrolled,
    isActive: (href) => isNavLinkActive(href, { pathname, activeSectionId }),
  }
}
