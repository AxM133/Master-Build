const formatter = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 2 })

export const formatNumber = (value) => formatter.format(value)
