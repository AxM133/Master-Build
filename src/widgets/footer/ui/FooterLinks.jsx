export function FooterLinks({ links }) {
  return (
    <ul className="space-y-2 text-xs text-neutral-600">
      {links.map(({ label, href }) => (
        <li key={label}>
          <a href={href} className="transition-colors hover:text-primary">
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}
