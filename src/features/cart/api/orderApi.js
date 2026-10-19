import { apiClient, USE_MOCKS } from '@/shared/api'
import { delay } from '@/shared/lib'

export async function submitOrder(payload) {
  if (USE_MOCKS) {
    await delay(900)
    return { id: Date.now() }
  }

  const { data } = await apiClient.post('/orders', payload)
  return data
}
