import { useSyncExternalStore } from 'react'

const MAX_TOASTS = 3
let toasts = []
let nextId = 1
const listeners = new Set()

const emit = () => listeners.forEach((listener) => listener())

const subscribe = (listener) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function dismissToast(id) {
  toasts = toasts.filter((item) => item.id !== id)
  emit()
}

export function toast({ title, description, action, duration = 4500 }) {
  const id = nextId++
  toasts = [...toasts, { id, title, description, action }].slice(-MAX_TOASTS)
  emit()
  setTimeout(() => dismissToast(id), duration)
  return id
}

export const useToasts = () => useSyncExternalStore(subscribe, () => toasts)
