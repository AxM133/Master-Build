import { useEffect, useState } from 'react'

export function useScrolled(threshold = 10) {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > threshold)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return isScrolled
}
