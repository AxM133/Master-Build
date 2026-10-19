import { useEffect } from 'react'

// Переводит фокус на элемент при открытии и возвращает его назад при закрытии
export function useRestoreFocus(active, targetRef) {
  useEffect(() => {
    if (!active) return

    const previous = document.activeElement
    targetRef.current?.focus()

    return () => previous?.focus?.()
  }, [active, targetRef])
}
