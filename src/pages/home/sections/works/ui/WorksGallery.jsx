import { Picture } from '@/shared/ui'

export function WorksGallery({ items }) {
  return (
    <ul className="mx-auto mt-10 flex max-w-[870px] flex-wrap justify-center gap-6">
      {items.map(({ id, image, alt }) => (
        <li key={id} className="w-full overflow-hidden rounded-2xl sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]">
          <Picture src={image} alt={alt} className="aspect-[4/3] w-full transition-transform duration-300 hover:scale-105" />
        </li>
      ))}
    </ul>
  )
}
