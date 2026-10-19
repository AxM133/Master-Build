import { formatNumber } from '@/shared/lib'

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-4 text-sm">
      <dt className="text-white/70">{label}</dt>
      <dd key={value} className="animate-fade-in font-semibold">
        {value}
      </dd>
    </div>
  )
}

export function ConfiguratorSummary({ totalArea, pieces, total }) {
  return (
    <div className="mt-6 rounded-2xl bg-dark p-5 text-white">
      <dl className="space-y-2">
        <SummaryRow label="Площадь к заказу" value={`${formatNumber(totalArea)} м²`} />
        <SummaryRow label="Понадобится" value={`≈ ${formatNumber(pieces)} шт`} />
      </dl>
      <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-white/15 pt-4">
        <span className="text-sm font-semibold">Итого</span>
        <span key={total} className="animate-pop text-2xl font-extrabold text-primary-light">
          {total == null ? 'по запросу' : `${formatNumber(total)} ₽`}
        </span>
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-white/50">
        Предварительный расчёт. Точную стоимость и доставку подтвердит менеджер.
      </p>
    </div>
  )
}
