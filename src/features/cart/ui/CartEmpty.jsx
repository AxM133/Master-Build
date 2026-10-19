import { Button, CartIcon } from '@/shared/ui'

export function CartEmpty({ onBrowse }) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-10 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
        <CartIcon className="h-9 w-9" />
      </span>
      <h3 className="mt-5 text-lg font-bold">Заявка пока пуста</h3>
      <p className="mt-2 max-w-xs text-sm text-neutral-500">Выберите плитку, рассчитайте площадь — а мы подтвердим наличие и доставку.</p>
      <Button to="/#top-products" onClick={onBrowse} className="mt-6">
        Перейти к товарам
      </Button>
    </div>
  )
}
