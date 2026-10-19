import { InfinitePattern } from '@/shared/ui'

export function HeroBackground({ pattern, tileSize, duration }) {
  return (
    <>
      {pattern && <InfinitePattern src={pattern} tileSize={tileSize} duration={duration} className="-z-10" />}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35),rgba(0,0,0,0.65))]" />
    </>
  )
}
