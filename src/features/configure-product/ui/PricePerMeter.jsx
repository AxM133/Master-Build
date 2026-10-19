import { formatNumber } from '@/shared/lib'

export function PricePerMeter({ price }) {
  if (price == null) {
    return <p className="mt-4 text-sm font-semibold text-neutral-600">Цена для этого цвета — по запросу</p>
  }

  return (
    <p className="mt-4 flex items-baseline gap-1.5">
      <span key={price} className="inline-block animate-pop text-3xl font-extrabold text-neutral-900">
        {formatNumber(price)} ₽
      </span>
      <span className="text-sm text-neutral-500">за м²</span>
    </p>
  )
}
