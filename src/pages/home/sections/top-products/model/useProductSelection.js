import { useCallback, useState } from 'react'
import { addToCart } from '@/features/cart'

// Выбранные цвета карточек и товар, открытый в калькуляторе
export function useProductSelection() {
  const [colors, setColors] = useState({})
  const [activeProduct, setActiveProduct] = useState(null)

  const getColor = (product) => colors[product.id] ?? product.colors[0]?.name
  const selectColor = (productId, color) => setColors((current) => ({ ...current, [productId]: color }))
  const close = useCallback(() => setActiveProduct(null), [])

  return {
    getColor,
    selectColor,
    activeProduct,
    activeColor: activeProduct ? getColor(activeProduct) : null,
    open: setActiveProduct,
    close,
    submit: addToCart,
  }
}
