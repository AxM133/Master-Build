import { cn } from '@/shared/lib'
import { ImageIcon } from './icons'

// Без src рисует плейсхолдер — удобно, пока нет реальных изображений
export function Picture({ src, alt = '', fit = 'cover', className }) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn('flex items-center justify-center bg-neutral-200 text-neutral-400', className)}
      >
        <ImageIcon className="h-8 w-8" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn(fit === 'contain' ? 'object-contain' : 'object-cover', className)}
    />
  )
}
