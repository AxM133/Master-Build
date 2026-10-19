import { cn } from '@/shared/lib'

// Бесконечно прокручивает бесшовный тайл вверх.
// Слой выше контейнера ровно на один тайл и сдвигается на его высоту — стык незаметен.
export function InfinitePattern({ src, tileSize = 480, duration = 14, className }) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div
        className="absolute inset-x-0 top-0 h-[calc(100%+var(--tile-size))] will-change-transform motion-safe:animate-pattern-rise"
        style={{
          '--tile-size': `${tileSize}px`,
          backgroundImage: `url(${src})`,
          backgroundSize: `${tileSize}px ${tileSize}px`,
          animationDuration: `${duration}s`,
        }}
      />
    </div>
  )
}
