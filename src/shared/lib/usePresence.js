import { useEffect, useState } from 'react'

// Держит компонент смонтированным, пока проигрывается анимация закрытия
export function usePresence(isOpen, duration = 220) {
  const [isMounted, setIsMounted] = useState(isOpen)

  if (isOpen && !isMounted) setIsMounted(true)

  useEffect(() => {
    if (isOpen) return

    const timer = setTimeout(() => setIsMounted(false), duration)
    return () => clearTimeout(timer)
  }, [isOpen, duration])

  return { isMounted, isClosing: isMounted && !isOpen }
}
