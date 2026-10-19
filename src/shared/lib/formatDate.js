const formatter = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

export const formatDate = (value) => formatter.format(new Date(value))
