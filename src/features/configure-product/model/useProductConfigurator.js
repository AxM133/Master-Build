import { useState } from 'react'
import { calculateOrder, getColorPrice } from '@/entities/product'
import { DEFAULT_AREA, RESERVE_RATE } from '../config/constants'

export function useProductConfigurator({ product, initialColor, onSubmit }) {
  const [color, setColor] = useState(initialColor ?? product.colors[0]?.name)
  const [area, setArea] = useState(DEFAULT_AREA)
  const [withReserve, setWithReserve] = useState(true)
  const [submitted, setSubmitted] = useState(null)

  const pricePerMeter = getColorPrice(product.prices, color)?.price ?? null
  const order = calculateOrder({
    area,
    piecesPerSquareMeter: product.piecesPerSquareMeter,
    price: pricePerMeter,
    reserveRate: withReserve ? RESERVE_RATE : 0,
  })

  const submit = () => {
    const item = {
      productId: product.id,
      name: product.name,
      image: product.image,
      color,
      price: pricePerMeter,
      piecesPerSquareMeter: product.piecesPerSquareMeter,
      area: order.totalArea,
      pieces: order.pieces,
      total: order.total,
    }

    onSubmit?.(item)
    setSubmitted(item)
  }

  return {
    color,
    setColor,
    area,
    setArea,
    withReserve,
    toggleReserve: () => setWithReserve((value) => !value),
    pricePerMeter,
    order,
    canSubmit: area > 0,
    submit,
    submitted,
  }
}
