import { apiClient, USE_MOCKS } from '@/shared/api'
import { delay } from '@/shared/lib'

export async function requestCallback(payload) {
  if (USE_MOCKS) {
    await delay(800)
    return { ok: true }
  }

  const { data } = await apiClient.post('/callback', payload)
  return data
}
