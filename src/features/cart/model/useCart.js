import { useSyncExternalStore } from 'react'
import { cartStore } from './cartStore'
import { getCartSummary } from './getCartSummary'

export function useCart() {
  const items = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot)

  return { items, count: items.length, summary: getCartSummary(items) }
}
