import { apiClient, USE_MOCKS } from '@/shared/api'
import { CATEGORIES_MOCK } from '../model/mocks'

export async function getCategories() {
  if (USE_MOCKS) return CATEGORIES_MOCK

  const { data } = await apiClient.get('/categories')
  return data
}
