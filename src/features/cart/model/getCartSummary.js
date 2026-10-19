export function getCartSummary(items) {
  return items.reduce(
    (summary, item) => ({
      total: summary.total + (item.total ?? 0),
      area: summary.area + item.area,
      hasPriceOnRequest: summary.hasPriceOnRequest || item.total == null,
    }),
    { total: 0, area: 0, hasPriceOnRequest: false },
  )
}
