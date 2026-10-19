import { GridIcon, ShieldCheckIcon, TruckIcon } from '@/shared/ui'
import pavingTile from '@/shared/assets/patterns/paving-tile.svg'

export const HERO = {
  title: 'Тротуарная плитка в Волоколамске напрямую от производителя',
  description:
    'Вам нужна качественная и недорогая тротуарная плитка в Волоколамске? Мы готовы предложить отличную возможность приобрести стройматериалы у проверенного производителя. Широкий ассортимент изделий, цены без наценок посредников и доставка по району — всё это «Мастер Строй».',
  background: {
    pattern: pavingTile,
    tileSize: 480,
    duration: 16,
  },
  actions: {
    primary: { label: 'Каталог', href: '#catalog' },
    secondary: { label: 'Рассчитать стоимость', href: '#top-products' },
  },
  highlights: [
    { id: 'factory', icon: GridIcon, text: 'Собственное производство' },
    { id: 'delivery', icon: TruckIcon, text: 'Доставка манипулятором' },
    { id: 'quality', icon: ShieldCheckIcon, text: 'Качество по ГОСТ' },
  ],
  scrollTarget: '#catalog',
}
