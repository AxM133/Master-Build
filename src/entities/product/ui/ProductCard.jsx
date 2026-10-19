import { getColorPrice } from '../lib/getColorPrice'
import { ProductAddButton } from './ProductAddButton'
import { ProductColors } from './ProductColors'
import { ProductMedia } from './ProductMedia'
import { ProductPrices } from './ProductPrices'
import { ProductSpecs } from './ProductSpecs'

export function ProductCard({ product, selectedColor, onColorSelect, onOpen }) {
  const { name, image, badge, size, perSquareMeter, colors, prices } = product
  const activePrice = getColorPrice(prices, selectedColor)

  return (
    <article className="group/card relative flex overflow-hidden rounded-[28px] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex min-w-0 flex-1 flex-col px-4 pb-[22px] pt-5 sm:px-[23px]">
        <ProductMedia image={image} name={name} badge={badge} onOpen={onOpen} />
        <h3 className="mt-6 text-sm font-bold text-neutral-900">
          <button type="button" onClick={onOpen} className="text-left transition-colors hover:text-primary">
            {name}
          </button>
        </h3>
        <ProductSpecs size={size} perSquareMeter={perSquareMeter} colorsCount={colors.length} />
        <ProductColors colors={colors} selected={selectedColor} onSelect={onColorSelect} />
      </div>

      <div className="w-[130px] shrink-0 bg-dark px-4 pb-20 pt-[22px] text-white sm:w-[180px] sm:px-[23px]">
        <ProductPrices prices={prices} activeColor={activePrice?.color} />
      </div>

      <ProductAddButton label="Рассчитать и добавить в заявку" onClick={onOpen} />
    </article>
  )
}
