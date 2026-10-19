import { cn } from '@/shared/lib'
import { formatPrice } from '../lib/formatPrice'

export function ProductPrices({ prices, activeColor }) {
  return (
    <dl className="space-y-[18px] text-xs leading-[18px]">
      {prices.map(({ color, price }) => {
        const isActive = color === activeColor

        return (
          <div key={color} className={cn('relative transition-opacity duration-300', activeColor && !isActive && 'opacity-55')}>
            <span
              aria-hidden="true"
              className={cn(
                'absolute -left-4 top-0 h-full w-1 origin-center rounded-r-full bg-primary-light transition-transform duration-300 sm:-left-[23px]',
                isActive ? 'scale-y-100' : 'scale-y-0',
              )}
            />
            <dt className={cn('font-bold transition-colors duration-300', isActive && 'text-primary-light')}>{color}</dt>
            <dd className="text-white/95">{formatPrice(price)}</dd>
          </div>
        )
      })}
    </dl>
  )
}
