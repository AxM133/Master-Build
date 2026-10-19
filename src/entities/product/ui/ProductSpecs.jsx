export function ProductSpecs({ size, perSquareMeter, colorsCount }) {
  return (
    <ul className="mt-2 text-[13px] leading-[22px] text-neutral-900 sm:text-sm">
      <li>Размер: {size}</li>
      <li>Количество: {perSquareMeter} шт/кв.м</li>
      <li>Цвета в наличии: {colorsCount}</li>
    </ul>
  )
}
