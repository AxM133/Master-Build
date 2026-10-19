import { useCallback, useState } from 'react'
import { addToCart, openCart } from '@/features/cart'

// Выбранные цвета карточек и товар в калькуляторе.
// activeProduct не сбрасывается при закрытии — контент виден, пока проигрывается анимация
export function useProductSelection() {
  const [colors, setColors] = useState({})
  const [activeProduct, setActiveProduct] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const getColor = (product) => colors[product.id] ?? product.colors[0]?.name
  const selectColor = (productId, color) => setColors((current) => ({ ...current, [productId]: color }))

  const open = (product) => {
    setActiveProduct(product)
    setIsOpen(true)
  }
  const close = useCallback(() => setIsOpen(false), [])

  const openCartFromModal = () => {
    close()
    openCart()
  }

  return {
    getColor,
    selectColor,
    activeProduct,
    activeColor: activeProduct ? getColor(activeProduct) : null,
    isOpen,
    open,
    close,
    submit: addToCart,
    openCart: openCartFromModal,
  }
}
