import { SITE } from '@/shared/config'
import { Button, ClockIcon, LocationIcon, PhoneIcon, PhoneLink } from '@/shared/ui'

export function FooterContacts({ onCallbackClick }) {
  return (
    <>
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
              <PhoneLink key={phone} phone={phone} className="font-semibold text-neutral-900" />
            ))}
          </span>
        </li>
      </ul>
      <Button variant="outline" size="sm" onClick={onCallbackClick} className="mt-5">
        Заказать звонок
      </Button>
    </>
  )
}
