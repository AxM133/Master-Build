import { WorkCard } from './WorkCard'

export function WorksGallery({ items, onOpen }) {
  return (
    <ul className="mx-auto mt-10 flex max-w-[1052px] flex-wrap justify-center gap-4 sm:gap-6 lg:mt-[79px] lg:gap-x-[31px] lg:gap-y-10">
      {items.map(({ id, image, alt }, index) => (
        <li key={id} className="w-full sm:w-[calc(50%-12px)] lg:w-[330px]">
          <WorkCard image={image} alt={alt} onOpen={() => onOpen(index)} />
        </li>
      ))}
    </ul>
  )
}
