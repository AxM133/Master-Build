import { useCallback, useState } from 'react'
import { useArrowKeys } from '@/shared/lib'

// index не сбрасывается при закрытии — фото остаётся на экране, пока проигрывается анимация
export function useWorksLightbox(count) {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback((nextIndex) => {
    setIndex(nextIndex)
    setIsOpen(true)
  }, [])
  const close = useCallback(() => setIsOpen(false), [])
  const prev = useCallback(() => setIndex((current) => (current - 1 + count) % count), [count])
  const next = useCallback(() => setIndex((current) => (current + 1) % count), [count])

  useArrowKeys(isOpen, { onLeft: prev, onRight: next })

  return { index, isOpen, open, close, prev, next }
}
