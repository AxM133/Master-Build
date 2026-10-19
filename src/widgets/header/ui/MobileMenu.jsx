import { SITE } from '@/shared/config'
import { Button, ClockIcon, Drawer, Logo, PhoneLink } from '@/shared/ui'
import { NavLinks } from './NavLinks'

export function MobileMenu({ isOpen, onClose, isActive, onCallbackClick }) {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title="Меню"
      header={<Logo />}
      footer={
        <Button
          onClick={() => {
            onClose()
            onCallbackClick()
          }}
          className="w-full"
        >
          Заказать звонок
        </Button>
      }
    >
      <nav aria-label="Мобильная навигация">
        <NavLinks variant="mobile" isActive={isActive} onLinkClick={onClose} />
      </nav>
      <div className="mt-8 space-y-2">
        {SITE.phones.map((phone) => (
          <PhoneLink key={phone} phone={phone} className="block text-base font-bold" />
        ))}
        <p className="flex items-center gap-2 pt-2 text-xs text-neutral-500">
          <ClockIcon className="h-4 w-4" />
          {SITE.workHours}
        </p>
      </div>
    </Drawer>
  )
}
