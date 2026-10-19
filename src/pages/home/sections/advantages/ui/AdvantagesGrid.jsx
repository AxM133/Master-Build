import { AdvantageCard } from './AdvantageCard'

export function AdvantagesGrid({ items }) {
  return (
    <ul className="mx-auto mt-10 grid max-w-[870px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ id, ...advantage }) => (
        <li key={id}>
          <AdvantageCard {...advantage} />
        </li>
      ))}
    </ul>
  )
}
