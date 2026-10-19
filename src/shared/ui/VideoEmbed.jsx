import { useState } from 'react'
import { cn, getYouTubeEmbedUrl, getYouTubePoster } from '@/shared/lib'
import { PlayIcon } from './icons'
import { Picture } from './Picture'

// «Ленивый» YouTube: до клика показываем обложку, iframe грузится только по Play
export function VideoEmbed({ youtubeId, poster, title, className }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className={cn('group relative aspect-video overflow-hidden bg-black', className)}>
      {isPlaying ? (
        <iframe
          src={getYouTubeEmbedUrl(youtubeId, { autoplay: true })}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setIsPlaying(true)} aria-label={`Смотреть видео «${title}»`} className="absolute inset-0">
          <Picture
            src={poster ?? getYouTubePoster(youtubeId)}
            alt=""
            className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />
          <span className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2">
            <span className="absolute inset-0 rounded-full bg-primary/50 motion-safe:animate-pulse-ring" />
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
              <PlayIcon className="ml-1 h-8 w-8" />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
