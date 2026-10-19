import { MAIN_NAV } from '@/shared/config'
import { cn } from '@/shared/lib'
import { AppLink } from '@/shared/ui'

const VARIANTS = {
  desktop: {
    list: 'flex gap-6 text-xs font-semibold xl:gap-8',
    link: "relative py-2 after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100",
    active: 'text-primary after:scale-x-100',
  },
  mobile: {
    list: 'flex flex-col text-lg font-bold',
    link: 'flex items-center justify-between border-b border-neutral-100 py-4',
    active: 'text-primary',
  },
}

export function NavLinks({ variant = 'desktop', isActive, onLinkClick }) {
  const styles = VARIANTS[variant]

  return (
    <ul className={styles.list}>
      {MAIN_NAV.map(({ label, href }) => {
        const active = isActive(href)

        return (
          <li key={href}>
            <AppLink
              href={href}
              onClick={onLinkClick}
              aria-current={active ? 'page' : undefined}
              className={cn('block transition-colors hover:text-primary', styles.link, active && styles.active)}
            >
              {label}
            </AppLink>
          </li>
        )
      })}
    </ul>
  )
}
