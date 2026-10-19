import { formatNumber } from '@/shared/lib'
import { Button } from '@/shared/ui'

export function CartSummary({ summary, onCheckout }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm text-neutral-500">
        <span>Общая площадь</span>
        <span>{formatNumber(summary.area)} м²</span>
      </div>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="font-semibold">Итого</span>
        <span key={summary.total} className="animate-fade-in text-2xl font-extrabold">
          {formatNumber(summary.total)} ₽
        </span>
      </div>
      {summary.hasPriceOnRequest && <p className="mt-1 text-xs text-neutral-500">+ позиции с ценой по запросу</p>}
      <Button onClick={onCheckout} size="lg" className="mt-5 w-full lg:px-8">
        Оформить заявку
      </Button>
    </div>
  )
}
