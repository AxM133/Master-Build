import { ARTICLE_CATEGORIES } from '../model/categories'

export const getCategoryLabel = (id) => ARTICLE_CATEGORIES.find((category) => category.id === id)?.label ?? id
