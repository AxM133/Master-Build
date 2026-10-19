import { openCallbackModal } from '@/features/request-callback'
import { FOOTER_NAV, SITE } from '@/shared/config'
import { Container, Logo } from '@/shared/ui'
import { FooterColumn } from './FooterColumn'
import { FooterContacts } from './FooterContacts'
import { FooterLinks } from './FooterLinks'

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-neutral-100 bg-white text-neutral-900">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:py-16">
        <div>
          <Logo />
          <div className="mt-6">
            <FooterColumn title="Магазин">
              <FooterContacts onCallbackClick={openCallbackModal} />
            </FooterColumn>
          </div>
        </div>
        {FOOTER_NAV.map(({ title, links }) => (
          <FooterColumn key={title} title={title}>
            <FooterLinks links={links} />
          </FooterColumn>
        ))}
      </Container>

      <div className="border-t border-neutral-100 py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-[11px] text-neutral-500 sm:flex-row">
          <span>
            © {SITE.foundedYear}–{new Date().getFullYear()} «{SITE.name}»
          </span>
          <span>{SITE.legalName}</span>
        </Container>
      </div>
    </footer>
  )
}
