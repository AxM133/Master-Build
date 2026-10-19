import { Modal } from '@/shared/ui'
import { LightboxArrow } from './LightboxArrow'

export function WorksLightbox({ items, index, isOpen, onClose, onPrev, onNext }) {
  const item = items[index]

  return (
    <Modal isOpen={isOpen} onClose={onClose} label="Просмотр фото работ" variant="bare" className="max-w-[960px]">
      {item && (
        <figure>
          <div className="relative">
            <img
              key={item.id}
              src={item.image}
              alt={item.alt}
              className="aspect-[330/274] max-h-[78vh] w-full animate-fade-in rounded-2xl object-contain"
            />
            <LightboxArrow direction="prev" onClick={onPrev} />
            <LightboxArrow direction="next" onClick={onNext} />
          </div>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-sm text-white">
            <span>{item.alt}</span>
            <span className="shrink-0 tabular-nums text-white/60">
              {index + 1} / {items.length}
            </span>
          </figcaption>
        </figure>
      )}
    </Modal>
  )
}
