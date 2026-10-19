import { useEffect } from 'react'

export function useArrowKeys(active, { onLeft, onRight }) {
  useEffect(() => {
    if (!active) return

    const onKeyDown = (event) => {
      if (event.key === 'ArrowLeft') onLeft?.()
      if (event.key === 'ArrowRight') onRight?.()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [active, onLeft, onRight])
}
