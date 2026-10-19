import { CartIcon } from '@/shared/ui'
import { openCart } from '../model/cartDrawer'
import { useCart } from '../model/useCart'

export function CartIndicator() {
  const { count } = useCart()

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={count ? `Открыть заявку, позиций: ${count}` : 'Открыть заявку'}
      className="relative flex h-10 w-10 items-center justify-center rounded-full text-neutral-900 transition hover:bg-neutral-100 hover:text-primary"
    >
      <CartIcon className="h-6 w-6" />
      {count > 0 && (
        <span
          key={count}
          className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 animate-pop items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white"
        >
          {count}
        </span>
      )}
    </button>
  )
}
