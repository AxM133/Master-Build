import { cn } from '@/shared/lib'
import { PlayIcon } from './icons'
import { Picture } from './Picture'

export function VideoEmbed({ src, poster, title, className }) {
  return (
    <div className={cn('relative aspect-video overflow-hidden rounded-2xl bg-black', className)}>
      {src ? (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <Picture src={poster} alt={title} className="absolute inset-0 h-full w-full" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
              <PlayIcon className="ml-1 h-7 w-7" />
            </span>
          </span>
        </>
      )}
    </div>
  )
}
