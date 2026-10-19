export function getMinPrice(prices) {
  const values = prices.map(({ price }) => price).filter((price) => price != null)

  return values.length ? Math.min(...values) : null
}
