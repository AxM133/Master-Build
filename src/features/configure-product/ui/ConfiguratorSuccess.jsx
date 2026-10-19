import { formatNumber } from '@/shared/lib'
import { Button, CartIcon, CheckIcon } from '@/shared/ui'

export function ConfiguratorSuccess({ item, onClose, onOpenCart }) {
  return (
    <div className="flex flex-col items-center px-6 py-14 text-center sm:px-12 sm:py-16">
      <span className="flex h-20 w-20 animate-pop items-center justify-center rounded-full bg-primary/10 text-primary">
        <CheckIcon className="h-10 w-10" strokeWidth={2.5} />
      </span>
      <h2 className="mt-6 text-2xl font-bold">Добавлено в заявку</h2>
      <p className="mt-2 text-sm text-neutral-600">
        {item.name} · {item.color} · {formatNumber(item.area)} м² · ≈ {formatNumber(item.pieces)} шт
      </p>
      <p className="mt-1 max-w-sm text-xs text-neutral-500">Добавьте ещё товары или оформите заявку — менеджер подтвердит наличие и доставку.</p>
      <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:flex-row">
        {onOpenCart && (
          <Button onClick={onOpenCart} className="sm:min-w-[200px]">
            <CartIcon className="h-5 w-5" />
            Оформить заявку
          </Button>
        )}
        <Button variant="outline" onClick={onClose} className="sm:min-w-[200px]">
          Продолжить выбор
        </Button>
      </div>
    </div>
  )
}
