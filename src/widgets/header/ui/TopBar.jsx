import { SITE } from '@/shared/config'
import { Button, ClockIcon, Container, LocationIcon, PhoneIcon, PhoneLink } from '@/shared/ui'

export function TopBar({ onCallbackClick }) {
  return (
    <div className="bg-dark text-white">
      <Container className="flex items-center justify-between gap-6 py-3 text-xs">
        <p className="hidden items-center gap-2 lg:flex">
          <LocationIcon className="h-4 w-4 text-primary" />
          {SITE.address}
        </p>
        <p className="hidden items-center gap-2 md:flex">
          <ClockIcon className="h-4 w-4 text-primary" />
          Режим работы: {SITE.workHours}
        </p>
        <div className="flex items-center gap-2">
          <PhoneIcon className="h-4 w-4 text-primary" />
          <ul className="flex flex-col">
            {SITE.phones.slice(0, 2).map((phone) => (
              <li key={phone}>
                <PhoneLink phone={phone} />
              </li>
            ))}
          </ul>
        </div>
        <Button variant="light" size="sm" onClick={onCallbackClick}>
          Заказать звонок
        </Button>
      </Container>
    </div>
  )
}
