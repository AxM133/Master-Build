import { useState } from 'react'

export function useZones(items) {
  const [activeId, setActiveId] = useState(items[0].id)

  return { activeId, activeZone: items.find(({ id }) => id === activeId), select: setActiveId }
}
