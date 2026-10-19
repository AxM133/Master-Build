import { useState } from 'react'
import { getColorPrice } from '@/entities/product'
import { DEFAULT_AREA } from '../config/constants'
import { calculateOrder } from './calculateOrder'

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
    withReserve,
  })

  const submit = () => {
    const item = {
      productId: product.id,
      name: product.name,
      image: product.image,
      color,
      price: pricePerMeter,
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
