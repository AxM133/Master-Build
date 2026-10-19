import { useState } from 'react'
import { cn } from '@/shared/lib'
import { ImageIcon } from './icons'

// Без src рисует плейсхолдер. Картинка проявляется после загрузки (через animation — не конфликтует с transition у родителя)
export function Picture({ src, alt = '', fit = 'cover', className }) {
  const [isLoaded, setIsLoaded] = useState(false)

  if (!src) {
    return (
      <div role="img" aria-label={alt} className={cn('flex items-center justify-center bg-neutral-200 text-neutral-400', className)}>
        <ImageIcon className="h-8 w-8" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      className={cn(fit === 'contain' ? 'object-contain' : 'object-cover', isLoaded ? 'animate-fade-in' : 'opacity-0', className)}
    />
  )
}
