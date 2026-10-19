// Эпсилон гасит погрешность float: 20 * 1.05 = 21.000000000000004 не должно стать 21.01
const roundUp = (value, digits = 2) => Math.ceil(value * 10 ** digits - 1e-9) / 10 ** digits

export function calculateOrder({ area, piecesPerSquareMeter, price, reserveRate = 0 }) {
  const totalArea = roundUp(area * (1 + reserveRate))

  return {
    totalArea,
    pieces: Math.ceil(totalArea * piecesPerSquareMeter),
    total: price == null ? null : Math.round(totalArea * price),
  }
}
