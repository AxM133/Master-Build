import { AppLink } from '@/shared/ui'

export function FooterLinks({ links }) {
  return (
    <ul className="space-y-2.5 text-xs text-neutral-600">
      {links.map(({ label, href }) => (
        <li key={label}>
          <AppLink href={href} className="inline-block transition duration-200 hover:translate-x-1 hover:text-primary">
            {label}
          </AppLink>
        </li>
      ))}
    </ul>
  )
}
