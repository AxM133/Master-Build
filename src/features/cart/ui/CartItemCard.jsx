import { formatNumber } from '@/shared/lib'
import { NumberStepper, Picture, TrashIcon } from '@/shared/ui'

export function CartItemCard({ item, onAreaChange, onRemove }) {
  return (
    <li className="flex animate-fade-up gap-4 py-4">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-neutral-100 p-2">
        <Picture src={item.image} alt={item.name} fit="contain" className="max-h-full max-w-full mix-blend-multiply" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold">{item.name}</h3>
            <p className="mt-0.5 text-xs text-neutral-500">
              {item.color} · ≈ {formatNumber(item.pieces)} шт
            </p>
          </div>
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Удалить «${item.name}» из заявки`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-400 transition hover:bg-red-50 hover:text-red-600"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="w-40 [&>div]:h-10 [&_button]:h-10 [&_button]:w-10 [&_input]:text-sm">
            <NumberStepper value={item.area} onChange={onAreaChange} min={1} max={10_000} suffix="м²" label="Площадь, м²" />
          </div>
          <p className="text-right text-sm font-bold">{item.total == null ? 'по запросу' : `${formatNumber(item.total)} ₽`}</p>
        </div>
      </div>
    </li>
  )
}
