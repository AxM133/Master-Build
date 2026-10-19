import { Picture } from '@/shared/ui'

export function CategoryCard({ category }) {
  const { title, image, href } = category

  return (
    <a
      href={href}
      className="group flex flex-col items-center rounded-2xl bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
    >
      <Picture src={image} alt={title} fit="contain" className="aspect-square w-full rounded-lg" />
      <span className="mt-4 text-center text-xs font-semibold text-neutral-900 transition-colors group-hover:text-primary">
        {title}
      </span>
    </a>
  )
}
