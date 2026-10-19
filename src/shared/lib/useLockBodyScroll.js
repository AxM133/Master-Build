import { useEffect } from 'react'

// Блокирует прокрутку страницы и компенсирует ширину скроллбара, чтобы контент не прыгал
export function useLockBodyScroll(active) {
  useEffect(() => {
    if (!active) return

    const { body, documentElement } = document
    const { overflow, paddingRight } = body.style
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth

    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`

    return () => {
      body.style.overflow = overflow
      body.style.paddingRight = paddingRight
    }
  }, [active])
}
