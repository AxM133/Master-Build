import { useState } from 'react'

export function useLayers(items) {
  const [activeId, setActiveId] = useState(items[0].id)

  return {
    activeId,
    activeLayer: items.find((item) => item.id === activeId),
    activeIndex: items.findIndex((item) => item.id === activeId),
    select: setActiveId,
  }
}
