const EMBED_ORIGIN = 'https://www.youtube-nocookie.com/embed'

export function getYouTubeEmbedUrl(id, { autoplay = false } = {}) {
  const params = new URLSearchParams({ rel: '0', modestbranding: '1' })
  if (autoplay) params.set('autoplay', '1')

  return `${EMBED_ORIGIN}/${id}?${params}`
}

export const getYouTubePoster = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
