// TODO: заменить контакты на реальные
export const SITE = {
  name: 'Мастер Строй',
  legalName: 'ООО «МАСТЕР СТРОЙ»',
  address: 'Волоколамский район, пос. Теряево',
  workHours: 'ежедневно с 8:00 до 20:00',
  phones: ['+7 (900) 000-00-01', '+7 (900) 000-00-02', '+7 (900) 000-00-03'],
  foundedYear: 2022,
}

// /#id — секции главной (работают с любой страницы), #id — якорь на текущей странице
export const MAIN_NAV = [
  { label: 'О компании', href: '/#about' },
  { label: 'Укладка тротуарной плитки', href: '/installation' },
  { label: 'Портфолио', href: '/#works' },
  { label: 'Полезно знать', href: '/articles' },
  { label: 'Доставка и оплата', href: '/delivery' },
  { label: 'Контакты', href: '#contacts' },
]

export const FOOTER_NAV = [
  {
    title: 'Каталог',
    links: [
      { label: 'Тротуарная плитка', href: '/#catalog' },
      { label: 'Топ товаров', href: '/#top-products' },
      { label: 'Наши работы', href: '/#works' },
    ],
  },
  {
    title: 'Сервисы',
    links: [
      { label: 'Укладка плитки', href: '/installation' },
      { label: 'Доставка и оплата', href: '/delivery' },
      { label: 'Полезно знать', href: '/articles' },
    ],
  },
  {
    title: 'О компании',
    links: [
      { label: 'О нас', href: '/#about' },
      { label: 'Производство', href: '/#production' },
      { label: 'Контакты', href: '#contacts' },
    ],
  },
]
