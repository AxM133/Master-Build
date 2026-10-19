// TODO: цены-заглушки — синхронизировать с прайсом в sections/services
export const ESTIMATE = {
  id: 'estimate',
  title: 'Рассчитайте стоимость укладки',
  description: 'Предварительный расчёт за минуту. Плитка в стоимость не входит — её можно рассчитать в каталоге.',
  baseTypes: [
    { id: 'walkway', label: 'Пешеходная дорожка', hint: 'щебень 15–20 см', price: 650 },
    { id: 'driveway', label: 'Заезд легкового авто', hint: 'щебень 25–30 см', price: 850 },
    { id: 'parking', label: 'Парковка, грузовой транспорт', hint: 'бетонное основание', price: 1300 },
  ],
  curbPrice: 450,
  demolitionPrice: 250,
  defaults: { area: 30, curbLength: 20 },
}
