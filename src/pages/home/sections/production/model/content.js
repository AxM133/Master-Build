import { AwardStarIcon, BrickWallIcon, CraneTruckIcon } from '@/shared/ui'
import videoPoster from '../assets/video-poster.jpg'

export const PRODUCTION = {
  id: 'production',
  title: 'О производстве',
  features: [
    { id: 'delivery', icon: CraneTruckIcon, text: 'Доставка и разгрузка плитки краном-манипулятором' },
    { id: 'variety', icon: BrickWallIcon, text: 'Множество видов тротуарной плитки различной формы и фактуры' },
    { id: 'certified', icon: AwardStarIcon, text: 'Весь товар сертифицирован!\nОфициальная гарантия!' },
  ],
  video: {
    // TODO: рикролл-заглушка 🕺 — перед релизом заменить на реальный ролик о производстве
    youtubeId: 'dQw4w9WgXcQ',
    poster: videoPoster,
    title: 'История одного успеха',
  },
}
