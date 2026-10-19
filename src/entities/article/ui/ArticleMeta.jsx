import { cn, formatDate } from '@/shared/lib'
import { CalendarIcon, ClockIcon } from '@/shared/ui'

export function ArticleMeta({ publishedAt, readTime, className }) {
  return (
    <p className={cn('flex flex-wrap items-center gap-x-4 gap-y-1 text-xs', className)}>
      <span className="flex items-center gap-1.5">
        <CalendarIcon className="h-3.5 w-3.5" />
        {formatDate(publishedAt)}
      </span>
      <span className="flex items-center gap-1.5">
        <ClockIcon className="h-3.5 w-3.5" />
        {readTime} мин чтения
      </span>
    </p>
  )
}
