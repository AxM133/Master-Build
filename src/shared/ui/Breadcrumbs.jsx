import { Link } from 'react-router-dom'
import { cn } from '@/shared/lib'
import { ChevronRightIcon } from './icons'

export function Breadcrumbs({ items, className }) {
  return (
    <nav aria-label="Хлебные крошки" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs">
        {items.map(({ label, to }, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={label} className="flex items-center gap-1.5">
              {isLast || !to ? (
                <span aria-current={isLast ? 'page' : undefined} className="text-current opacity-100">
                  {label}
                </span>
              ) : (
                <>
                  <Link to={to} className={cn('opacity-60 transition hover:text-primary-light hover:opacity-100')}>
                    {label}
                  </Link>
                  <ChevronRightIcon className="h-3.5 w-3.5 opacity-40" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
