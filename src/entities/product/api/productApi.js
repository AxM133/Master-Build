import { apiClient, USE_MOCKS } from '@/shared/api'
import { TOP_PRODUCTS_MOCK } from '../model/mocks'

export async function getTopProducts() {
  if (USE_MOCKS) return TOP_PRODUCTS_MOCK

  const { data } = await apiClient.get('/products/top')
  return data
}
