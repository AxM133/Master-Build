import { openCallbackModal } from '@/features/request-callback'
import { formatNumber } from '@/shared/lib'
import { Button } from '@/shared/ui'

export function EstimateResult({ lines, total }) {
  return (
    <div className="flex h-full flex-col rounded-[28px] bg-dark p-6 text-white lg:p-8">
      <p className="text-xs font-bold uppercase tracking-wider text-white/50">Предварительно</p>
      <dl className="mt-5 space-y-3">
        {lines.map(({ id, label, value }) => (
          <div key={id} className="flex items-baseline justify-between gap-4 text-sm">
            <dt className="text-white/70">{label}</dt>
            <dd key={value} className="shrink-0 animate-fade-in font-semibold">
              {formatNumber(value)} ₽
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-white/15 pt-6">
        <span className="font-semibold">Итого</span>
        <span key={total} className="animate-pop text-3xl font-extrabold text-primary-light">
          {formatNumber(total)} ₽
        </span>
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-white/50">Без учёта плитки и материалов основания. Точную смету составим после бесплатного замера.</p>
      <Button onClick={openCallbackModal} size="lg" className="mt-auto w-full lg:px-8">
        Вызвать замерщика бесплатно
      </Button>
    </div>
  )
}
