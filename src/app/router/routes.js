// Страницы грузятся лениво — каждая в своём чанке
const page = (load, name) => async () => ({ Component: (await load())[name] })

export const ROUTES = [
  { index: true, lazy: page(() => import('@/pages/home'), 'HomePage') },
  { path: 'installation', lazy: page(() => import('@/pages/installation'), 'InstallationPage') },
  { path: 'articles', lazy: page(() => import('@/pages/articles'), 'ArticlesPage') },
  { path: 'articles/:slug', lazy: page(() => import('@/pages/article'), 'ArticlePage') },
  { path: 'delivery', lazy: page(() => import('@/pages/delivery'), 'DeliveryPage') },
  { path: '*', lazy: page(() => import('@/pages/not-found'), 'NotFoundPage') },
]
