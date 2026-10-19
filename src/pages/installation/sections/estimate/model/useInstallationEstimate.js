import { useState } from 'react'
import { calculateInstallation } from './calculateInstallation'
import { ESTIMATE } from './content'

export function useInstallationEstimate() {
  const [baseTypeId, setBaseTypeId] = useState(ESTIMATE.baseTypes[0].id)
  const [area, setArea] = useState(ESTIMATE.defaults.area)
  const [curbLength, setCurbLength] = useState(ESTIMATE.defaults.curbLength)
  const [withDemolition, setWithDemolition] = useState(false)

  const baseType = ESTIMATE.baseTypes.find(({ id }) => id === baseTypeId)
  const result = calculateInstallation({
    area,
    baseType,
    curbLength,
    withDemolition,
    curbPrice: ESTIMATE.curbPrice,
    demolitionPrice: ESTIMATE.demolitionPrice,
  })

  return {
    baseTypeId,
    setBaseTypeId,
    area,
    setArea,
    curbLength,
    setCurbLength,
    withDemolition,
    setWithDemolition,
    result,
  }
}
