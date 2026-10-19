import { CalendarIcon, CardIcon, CashIcon, DocumentIcon } from '@/shared/ui'

export const PAYMENT = {
  id: 'payment',
  title: 'Способы оплаты',
  items: [
    { id: 'cash', icon: CashIcon, title: 'Наличными', text: 'При получении товара или в офисе продаж.' },
    { id: 'card', icon: CardIcon, title: 'Картой или по СБП', text: 'В офисе продаж или по ссылке на оплату.' },
    { id: 'invoice', icon: DocumentIcon, title: 'По счёту', text: 'Безналичный расчёт для юрлиц и ИП, полный пакет закрывающих документов.' },
    { id: 'prepay', icon: CalendarIcon, title: 'Предоплата', text: 'Для изготовления под заказ: нестандартные цвета и большие объёмы.' },
  ],
}
