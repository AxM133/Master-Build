export const OTHER_COLORS = 'Другие цвета'

// Цена для выбранного цвета; если отдельной строки нет — берём «Другие цвета»
export function getColorPrice(prices, colorName) {
  return prices.find(({ color }) => color === colorName) ?? prices.find(({ color }) => color === OTHER_COLORS) ?? null
}
