import { FOOTER_NAV, SITE } from '@/shared/config'
import { toTelHref } from '@/shared/lib'
import { ClockIcon, Container, LocationIcon, PhoneIcon } from '@/shared/ui'

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-primary">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-white text-neutral-900">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <FooterColumn title="Магазин">
          <ul className="space-y-3 text-xs text-neutral-600">
            <li className="flex gap-2">
              <LocationIcon className="h-4 w-4 text-primary" />
              {SITE.address}
            </li>
            <li className="flex gap-2">
              <ClockIcon className="h-4 w-4 text-primary" />
              Режим работы: {SITE.workHours}
            </li>
            <li className="flex gap-2">
              <PhoneIcon className="h-4 w-4 text-primary" />
              <span className="flex flex-col gap-1">
                {SITE.phones.map((phone) => (
                  <a key={phone} href={toTelHref(phone)} className="hover:text-primary">
                    {phone}
                  </a>
                ))}
              </span>
            </li>
          </ul>
        </FooterColumn>

        {FOOTER_NAV.map(({ title, links }) => (
          <FooterColumn key={title} title={title}>
            <ul className="space-y-2 text-xs text-neutral-600">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>
        ))}
      </Container>

      <div className="border-t border-neutral-200 py-4 text-center text-[11px] text-neutral-500">
        © {SITE.foundedYear}–{new Date().getFullYear()} «{SITE.name}»
      </div>
    </footer>
  )
}
