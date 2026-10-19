import { useQuery } from '@tanstack/react-query'
import { getArticle, getArticles } from './articleApi'

export const articleKeys = {
  all: ['articles'],
  list: () => [...articleKeys.all, 'list'],
  detail: (slug) => [...articleKeys.all, 'detail', slug],
}

export const useArticles = () => useQuery({ queryKey: articleKeys.list(), queryFn: getArticles })

export const useArticle = (slug) => useQuery({ queryKey: articleKeys.detail(slug), queryFn: () => getArticle(slug) })
