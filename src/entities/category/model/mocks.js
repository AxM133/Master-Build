// TODO: временные картинки вырезаны из макета — заменить на реальные фото
import blocks from '../assets/blocks.png'
import drains from '../assets/drains.png'
import facade from '../assets/facade.png'
import gardenCurb from '../assets/garden-curb.png'
import pillarCaps from '../assets/pillar-caps.png'
import pressed from '../assets/pressed.png'
import roadCurb from '../assets/road-curb.png'
import vibrocast from '../assets/vibrocast.png'

export const CATEGORIES_MOCK = [
  { id: 1, title: 'Прессованная плитка', image: pressed, href: '/catalog/pressed' },
  { id: 2, title: 'Вибролитая плитка', image: vibrocast, href: '/catalog/vibrocast' },
  { id: 3, title: 'Садовый бордюр', image: gardenCurb, href: '/catalog/garden-curb' },
  { id: 4, title: 'Дорожный бордюр', image: roadCurb, href: '/catalog/road-curb' },
  { id: 5, title: 'Строительные блоки', image: blocks, href: '/catalog/blocks' },
  { id: 6, title: 'Фасадная плитка', image: facade, href: '/catalog/facade' },
  { id: 7, title: 'Водостоки тротуарные', image: drains, href: '/catalog/drains' },
  { id: 8, title: 'Крышки на столбы', image: pillarCaps, href: '/catalog/pillar-caps' },
]
