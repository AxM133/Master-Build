import { useEffect } from 'react'

// Счётчик блокировок: модалка и панель могут быть открыты одновременно (одна закрывается, другая открывается).
// Исходные стили сохраняет первая блокировка и восстанавливает только последняя.
let locks = 0
let saved = null

function lock() {
  if (locks === 0) {
    const { body, documentElement } = document
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth

    saved = { overflow: body.style.overflow, paddingRight: body.style.paddingRight }
    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`
  }
  locks += 1
}

function unlock() {
  locks = Math.max(0, locks - 1)
  if (locks === 0 && saved) {
    document.body.style.overflow = saved.overflow
    document.body.style.paddingRight = saved.paddingRight
    saved = null
  }
}

export function useLockBodyScroll(active) {
  useEffect(() => {
    if (!active) return

    lock()
    return unlock
  }, [active])
}
