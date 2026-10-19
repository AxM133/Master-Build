import pavingTile from '@/shared/assets/patterns/paving-tile.svg'
import { cn } from '@/shared/lib'
import { BrickWallIcon, GridIcon, LayersIcon, RubleIcon, ShieldCheckIcon } from '@/shared/ui'

// Пока у статей нет фото — обложка собирается из фирменного узора, цвета и иконки рубрики
const COVERS = {
  choice: { gradient: 'from-[#E05100] to-[#8F3300]', icon: GridIcon },
  calc: { gradient: 'from-[#4B4B4B] to-[#1F1F1F]', icon: RubleIcon },
  install: { gradient: 'from-[#8C5A3C] to-[#3F2618]', icon: LayersIcon },
  care: { gradient: 'from-[#5E6F55] to-[#2C3628]', icon: ShieldCheckIcon },
  design: { gradient: 'from-[#9C3B2A] to-[#4A1A12]', icon: BrickWallIcon },
}

export function ArticleCover({ category, className }) {
  const { gradient, icon: Icon } = COVERS[category] ?? COVERS.choice

  return (
    <div className={cn('relative isolate overflow-hidden bg-gradient-to-br', gradient, className)}>
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-20 mix-blend-overlay" style={{ backgroundImage: `url(${pavingTile})`, backgroundSize: '260px' }} />
      <Icon className="absolute bottom-5 right-5 h-16 w-16 text-white/80 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" strokeWidth={1.25} />
    </div>
  )
}
