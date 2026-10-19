import { useEffect } from 'react'

const SITE_TITLE = 'Мастер Строй'

export function useDocumentTitle(title) {
  useEffect(() => {
    if (!title) return

    const previous = document.title
    document.title = `${title} — ${SITE_TITLE}`
    return () => {
      document.title = previous
    }
  }, [title])
}
