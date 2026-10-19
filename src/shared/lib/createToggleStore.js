import { useSyncExternalStore } from 'react'

// Глобальный флаг «открыто/закрыто» — чтобы открыть панель или модалку из любого места
export function createToggleStore(initial = false) {
  let isOpen = initial
  const listeners = new Set()

  const set = (value) => {
    if (isOpen === value) return
    isOpen = value
    listeners.forEach((listener) => listener())
  }

  const subscribe = (listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  return {
    open: () => set(true),
    close: () => set(false),
    toggle: () => set(!isOpen),
    useIsOpen: () => useSyncExternalStore(subscribe, () => isOpen),
  }
}
