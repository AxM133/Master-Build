import { Reveal } from '@/shared/ui'
import { AdvantageCard } from './AdvantageCard'

export function AdvantagesGrid({ items }) {
  return (
    <ul className="mx-auto mt-10 grid max-w-[1050px] gap-6 sm:grid-cols-2 lg:mt-[84px] lg:grid-cols-[repeat(3,330px)] lg:justify-center lg:gap-x-[29px] lg:gap-y-[50px]">
      {items.map(({ id, ...advantage }, index) => (
        <Reveal as="li" key={id} delay={(index % 3) * 100}>
          <AdvantageCard {...advantage} />
        </Reveal>
      ))}
    </ul>
  )
}
