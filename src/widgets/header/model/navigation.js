import { MAIN_NAV } from '@/shared/config'

const hashOf = (href) => href.split('#')[1]

// id секций, на которые ведёт меню, — для подсветки активного пункта
export const NAV_SECTION_IDS = MAIN_NAV.map(({ href }) => hashOf(href)).filter(Boolean)

// /#about активен на главной, когда видна секция; #contacts — на любой странице; /delivery — по пути
export function isNavLinkActive(href, { pathname, activeSectionId }) {
  const [path, hash] = href.split('#')

  if (hash !== undefined) return (path === '' || path === pathname) && activeSectionId === hash
  return pathname === href || pathname.startsWith(`${href}/`)
}
