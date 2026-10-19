import { AwardIcon, GridIcon, TruckIcon } from '@/shared/ui'

export const PRODUCTION = {
  id: 'production',
  title: 'О производстве',
  features: [
    { id: 'delivery', icon: TruckIcon, text: 'Доставка и разгрузка плитки кранами-манипуляторами' },
    { id: 'variety', icon: GridIcon, text: 'Множество видов тротуарной плитки различных форм и фактур' },
    { id: 'certified', icon: AwardIcon, text: 'Весь товар сертифицирован! Официальная гарантия!' },
  ],
  video: {
    src: null,
    poster: null,
    title: 'История одного успеха',
  },
}
