import { MAIN_NAV } from '@/shared/config'
import { cn } from '@/shared/lib'

export function NavLinks({ className, linkClassName, onLinkClick }) {
  return (
    <ul className={className}>
      {MAIN_NAV.map(({ label, href }) => (
        <li key={href}>
          <a href={href} onClick={onLinkClick} className={cn('transition-colors hover:text-primary', linkClassName)}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}
