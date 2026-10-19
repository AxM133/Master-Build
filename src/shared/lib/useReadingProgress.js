import { useEffect, useRef, useState } from 'react'

// Доля прочитанного элемента (0…1) — для полосы прогресса статьи
export function useReadingProgress() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const node = ref.current
      if (!node) return

      const { top, height } = node.getBoundingClientRect()
      const scrollable = height - window.innerHeight
      const value = scrollable > 0 ? -top / scrollable : top <= 0 ? 1 : 0
      setProgress(Math.min(1, Math.max(0, value)))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return [ref, progress]
}
