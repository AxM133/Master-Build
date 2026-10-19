import { useCallback, useState } from 'react'
import { useArrowKeys } from '@/shared/lib'

export function useWorksLightbox(count) {
  const [index, setIndex] = useState(null)
  const isOpen = index !== null

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(() => setIndex((current) => (current - 1 + count) % count), [count])
  const next = useCallback(() => setIndex((current) => (current + 1) % count), [count])

  useArrowKeys(isOpen, { onLeft: prev, onRight: next })

  return { index, isOpen, open: setIndex, close, prev, next }
}
