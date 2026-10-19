import { openCallbackModal } from '@/features/request-callback'
import { Button, CheckIcon, CraneTruckIcon } from '@/shared/ui'

export function ZoneDetails({ zone, includes }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-dark p-6 text-white lg:p-10">
      <CraneTruckIcon aria-hidden="true" className="absolute -bottom-6 -right-6 h-48 w-60 text-white/5" />
      <div key={zone.id} className="relative animate-fade-up">
        <p className="text-xs font-bold uppercase tracking-wider text-white/50">Доставка в</p>
        <h3 className="mt-2 text-3xl font-bold">{zone.name}</h3>
        <p className="mt-6 text-4xl font-extrabold text-primary-light lg:text-5xl">{zone.price}</p>
        <p className="mt-2 text-sm text-white/70">Срок: {zone.time}</p>
      </div>
      <ul className="relative mt-8 space-y-3 border-t border-white/15 pt-6">
        {includes.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-white/85">
            <CheckIcon className="h-4 w-4 shrink-0 text-primary-light" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>
      <Button onClick={openCallbackModal} size="lg" className="relative mt-8 w-full sm:w-auto lg:mt-auto lg:self-start lg:px-10">
        Рассчитать точную стоимость
      </Button>
    </div>
  )
}
