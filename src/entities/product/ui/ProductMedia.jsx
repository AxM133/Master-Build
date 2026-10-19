import { Badge, EyeIcon, Picture } from '@/shared/ui'

// Ожидает, что карточка-родитель помечена как group/card
export function ProductMedia({ image, name, badge, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Подробнее о товаре «${name}»`}
      className="relative flex h-[140px] w-full items-center justify-center rounded-xl sm:h-[172px]"
    >
      <Picture
        src={image}
        alt={name}
        fit="contain"
        className="max-h-full max-w-full transition-transform duration-500 ease-out group-hover/card:scale-[1.06]"
      />
      {badge && <Badge className="absolute left-0 top-0">{badge}</Badge>}
      <span className="pointer-events-none absolute bottom-1 left-1/2 flex -translate-x-1/2 translate-y-2 items-center gap-1.5 whitespace-nowrap rounded-full bg-neutral-900/80 px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 backdrop-blur transition duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100">
        <EyeIcon className="h-3.5 w-3.5" />
        Быстрый просмотр
      </span>
    </button>
  )
}
