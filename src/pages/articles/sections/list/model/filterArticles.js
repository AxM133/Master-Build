export const ALL_CATEGORIES = 'all'

export function filterArticles(articles, { category, query }) {
  const normalizedQuery = query.trim().toLowerCase()

  return articles.filter((article) => {
    const matchesCategory = category === ALL_CATEGORIES || article.category === category
    const matchesQuery =
      !normalizedQuery || article.title.toLowerCase().includes(normalizedQuery) || article.excerpt.toLowerCase().includes(normalizedQuery)

    return matchesCategory && matchesQuery
  })
}
