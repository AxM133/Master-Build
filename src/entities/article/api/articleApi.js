import { apiClient, USE_MOCKS } from '@/shared/api'
import { ARTICLES_MOCK } from '../model/mocks'

export async function getArticles() {
  if (USE_MOCKS) return ARTICLES_MOCK

  const { data } = await apiClient.get('/articles')
  return data
}

// null — статьи нет (на странице покажем 404)
export async function getArticle(slug) {
  if (USE_MOCKS) return ARTICLES_MOCK.find((article) => article.slug === slug) ?? null

  const { data } = await apiClient.get(`/articles/${slug}`)
  return data
}
