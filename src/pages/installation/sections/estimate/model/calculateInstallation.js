export function calculateInstallation({ area, baseType, curbLength, withDemolition, curbPrice, demolitionPrice }) {
  const lines = [
    { id: 'paving', label: `Укладка, ${area} м² × ${baseType.price} ₽`, value: area * baseType.price },
    { id: 'curb', label: `Бордюр, ${curbLength} п.м. × ${curbPrice} ₽`, value: curbLength * curbPrice },
  ]

  if (withDemolition) {
    lines.push({ id: 'demolition', label: `Демонтаж, ${area} м² × ${demolitionPrice} ₽`, value: area * demolitionPrice })
  }

  const visibleLines = lines.filter(({ value }) => value > 0)

  return { lines: visibleLines, total: visibleLines.reduce((sum, { value }) => sum + value, 0) }
}
