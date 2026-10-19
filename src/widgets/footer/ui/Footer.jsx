import { FOOTER_NAV, SITE } from '@/shared/config'
import { Container } from '@/shared/ui'
import { FooterColumn } from './FooterColumn'
import { FooterContacts } from './FooterContacts'
import { FooterLinks } from './FooterLinks'

export function Footer() {
  return (
    <footer className="bg-white text-neutral-900">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <FooterColumn title="Магазин">
          <FooterContacts />
        </FooterColumn>
        {FOOTER_NAV.map(({ title, links }) => (
          <FooterColumn key={title} title={title}>
            <FooterLinks links={links} />
          </FooterColumn>
        ))}
      </Container>

      <div className="border-t border-neutral-200 py-4 text-center text-[11px] text-neutral-500">
        © {SITE.foundedYear}–{new Date().getFullYear()} «{SITE.name}»
      </div>
    </footer>
  )
}
