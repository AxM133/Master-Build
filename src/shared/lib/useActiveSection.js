import { useEffect, useState } from 'react'

// Какая из секций сейчас в середине экрана — для подсветки пункта меню
// resetKey — например pathname: при переходе между страницами секции появляются заново
export function useActiveSection(ids, resetKey) {
  const [state, setState] = useState({ resetKey, activeId: null })
  const key = ids.join(',')

  // при смене страницы старый активный id больше не актуален
  if (state.resetKey !== resetKey) setState({ resetKey, activeId: null })

  useEffect(() => {
    const elements = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setState((current) => ({ ...current, activeId: entry.target.id }))
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [key, resetKey])

  return state.activeId
}
