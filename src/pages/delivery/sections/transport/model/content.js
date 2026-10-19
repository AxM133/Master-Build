import { BoxIcon, CraneTruckIcon, TruckIcon } from '@/shared/ui'

export const TRANSPORT = {
  id: 'transport',
  title: 'Чем доставляем',
  items: [
    { id: 'manipulator', icon: CraneTruckIcon, title: 'Манипулятор', text: 'До 10 т — около 5–6 поддонов. Сами выгрузим поддоны туда, куда удобно на участке.' },
    { id: 'long', icon: TruckIcon, title: 'Длинномер', text: 'До 20 т для крупных объектов. Разгрузка вашим погрузчиком или нашим манипулятором.' },
    { id: 'pickup', icon: BoxIcon, title: 'Самовывоз', text: 'Бесплатно со склада производства. Погрузим поддоны в ваш транспорт погрузчиком.' },
  ],
}
