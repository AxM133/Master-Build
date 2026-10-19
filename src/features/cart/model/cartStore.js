import { calculateOrder } from '@/entities/product'

const STORAGE_KEY = 'masterbuild:cart'

function readItems() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

function writeItems(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // localStorage недоступен (приватный режим) — заявка живёт до перезагрузки
  }
}

let items = readItems()
const listeners = new Set()

function setItems(next) {
  items = next
  writeItems(items)
  listeners.forEach((listener) => listener())
}

const withArea = (item, area) => {
  // позиции, сохранённые до появления piecesPerSquareMeter, — восстанавливаем расход из штук и площади
  const piecesPerSquareMeter = item.piecesPerSquareMeter ?? item.pieces / item.area

  return {
    ...item,
    ...calculateOrder({ area, piecesPerSquareMeter, price: item.price }),
    piecesPerSquareMeter,
    area,
  }
}

// Тот же товар того же цвета не дублируется — площадь складывается и пересчитывается
export function addToCart(item) {
  const id = `${item.productId}-${item.color}`
  const existing = items.find((current) => current.id === id)

  if (!existing) {
    setItems([...items, { ...item, id }])
    return
  }

  setItems(items.map((current) => (current === existing ? withArea(current, current.area + item.area) : current)))
}

export function updateCartItemArea(id, area) {
  setItems(items.map((item) => (item.id === id ? withArea(item, area) : item)))
}

// Возвращает удалённую позицию и её место — чтобы можно было отменить удаление
export function removeFromCart(id) {
  const index = items.findIndex((item) => item.id === id)
  if (index === -1) return null

  const removed = items[index]
  setItems(items.filter((item) => item.id !== id))
  return { item: removed, index }
}

export function restoreCartItem({ item, index }) {
  if (items.some((current) => current.id === item.id)) return
  setItems([...items.slice(0, index), item, ...items.slice(index)])
}

export function clearCart() {
  setItems([])
}

export const cartStore = {
  subscribe(listener) {
    listeners.add(listener)
    return () => listeners.delete(listener)
  },
  getSnapshot: () => items,
}
