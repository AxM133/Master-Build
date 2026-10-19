function SpecChip({ label, value }) {
  return (
    <li className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs">
      <span className="text-neutral-500">{label}:</span> <span className="font-semibold text-neutral-900">{value}</span>
    </li>
  )
}

export function ConfiguratorSpecs({ size, perSquareMeter, colorsCount }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      <SpecChip label="Размер" value={size} />
      <SpecChip label="Расход" value={`${perSquareMeter} шт/м²`} />
      <SpecChip label="Цветов" value={colorsCount} />
    </ul>
  )
}
