// TODO: заменить контакты на реальные
export const SITE = {
  name: 'Мастер Строй',
  address: 'Волоколамский район, пос. Теряево',
  workHours: 'ежедневно с 8:00 до 20:00',
  phones: ['+7 (900) 000-00-01', '+7 (900) 000-00-02', '+7 (900) 000-00-03'],
  foundedYear: 2022,
}

export const MAIN_NAV = [
  { label: 'О компании', href: '/about' },
  { label: 'Укладка тротуарной плитки', href: '/installation' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Полезно знать', href: '/articles' },
  { label: 'Доставка и оплата', href: '/delivery' },
  { label: 'Контакты', href: '/contacts' },
]

export const FOOTER_NAV = [
  {
    title: 'Каталог',
    links: [
      { label: 'Акции', href: '/sales' },
      { label: 'Тротуарная плитка', href: '/catalog/paving' },
      { label: 'Бордюры', href: '/catalog/curbs' },
    ],
  },
  {
    title: 'Сервисы',
    links: [
      { label: 'Дизайн-проект', href: '/design' },
      { label: 'Укладка брусчатки', href: '/installation' },
      { label: 'Доставка', href: '/delivery' },
    ],
  },
  {
    title: 'О компании',
    links: [
      { label: 'Контакты', href: '/contacts' },
      { label: 'Производство', href: '/production' },
      { label: 'Портфолио', href: '/portfolio' },
    ],
  },
]
