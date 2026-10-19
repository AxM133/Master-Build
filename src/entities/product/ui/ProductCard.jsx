import { Picture, PlusIcon } from '@/shared/ui'
import { formatPrice } from '../lib/formatPrice'

export function ProductCard({ product, onAdd }) {
  const { name, image, size, perSquareMeter, colors, prices } = product

  return (
    <article className="flex overflow-hidden rounded-2xl bg-white shadow-card">
      <div className="flex min-w-0 flex-1 flex-col p-5">
        <Picture src={image} alt={name} fit="contain" className="mb-4 h-36 w-full rounded-lg" />
        <h3 className="text-sm font-bold text-neutral-900">{name}</h3>
        <ul className="mt-2 space-y-0.5 text-xs text-neutral-600">
          <li>Размер: {size}</li>
          <li>Количество: {perSquareMeter} шт/м.кв</li>
          <li>Цвета в наличии: {colors.length}</li>
        </ul>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Доступные цвета">
          {colors.map((color) => (
            <li key={color} className="h-3.5 w-3.5 rounded-sm" style={{ backgroundColor: color }} />
          ))}
        </ul>
      </div>

      <div className="flex w-32 shrink-0 flex-col bg-dark p-4 text-white sm:w-36">
        <dl className="space-y-2">
          {prices.map(({ color, price }) => (
            <div key={color}>
              <dt className="text-[11px] font-semibold">{color}</dt>
              <dd className="text-[10px] text-neutral-300">{formatPrice(price)}</dd>
            </div>
          ))}
        </dl>
        <button
          type="button"
          onClick={() => onAdd?.(product)}
          aria-label={`Добавить «${name}»`}
          className="mt-auto flex h-8 w-8 items-center justify-center self-end rounded-full bg-primary transition-colors hover:bg-primary-hover"
        >
          <PlusIcon className="h-4 w-4" />
        </button>
      </div>
    </article>
  )
}
