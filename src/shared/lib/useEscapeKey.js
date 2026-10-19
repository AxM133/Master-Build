import { useEffect } from 'react'

export function useEscapeKey(active, handler) {
  useEffect(() => {
    if (!active) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') handler()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [active, handler])
}
