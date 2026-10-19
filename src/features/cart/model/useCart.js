import { useSyncExternalStore } from 'react'
import { cartStore } from './cartStore'

export function useCart() {
  const items = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot)

  return { items, count: items.length }
}
