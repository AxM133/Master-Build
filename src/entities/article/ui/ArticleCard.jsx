import { Link } from 'react-router-dom'
import { getCategoryLabel } from '../lib/getCategoryLabel'
import { ArticleCover } from './ArticleCover'
import { ArticleMeta } from './ArticleMeta'

export function ArticleCard({ article }) {
  const { slug, category, title, excerpt, publishedAt, readTime } = article

  return (
    <Link
      to={`/articles/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative">
        <ArticleCover category={category} className="aspect-[16/9]" />
        <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-neutral-900 backdrop-blur">
          {getCategoryLabel(category)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <ArticleMeta publishedAt={publishedAt} readTime={readTime} className="text-neutral-500" />
        <h3 className="mt-3 text-balance text-lg font-bold leading-snug transition-colors group-hover:text-primary">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">{excerpt}</p>
        <span className="mt-auto pt-5 text-sm font-bold text-primary">
          Читать <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  )
}
