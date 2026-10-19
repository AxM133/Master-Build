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

const isSamePosition = (a, b) => a.productId === b.productId && a.color === b.color

// Одинаковый товар того же цвета не дублируется — площадь, штуки и сумма складываются
export function addToCart(item) {
  const existing = items.find((current) => isSamePosition(current, item))

  if (!existing) {
    setItems([...items, { ...item, id: `${item.productId}-${item.color}` }])
    return
  }

  setItems(
    items.map((current) =>
      current === existing
        ? {
            ...current,
            area: current.area + item.area,
            pieces: current.pieces + item.pieces,
            total: current.total == null || item.total == null ? null : current.total + item.total,
          }
        : current,
    ),
  )
}

export function removeFromCart(id) {
  setItems(items.filter((item) => item.id !== id))
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
