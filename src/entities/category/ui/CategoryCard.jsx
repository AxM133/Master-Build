import { Link } from 'react-router-dom'
import { Picture } from '@/shared/ui'

export function CategoryCard({ category }) {
  const { title, image, href } = category

  return (
    <Link
      to={href}
      className="group flex h-[210px] flex-col rounded-[28px] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover md:h-[230px] lg:h-[263px]"
    >
      <div className="flex flex-1 items-center justify-center px-4 pt-4">
        <Picture
          src={image}
          alt={title}
          fit="contain"
          className="max-h-[90px] max-w-full transition-transform duration-300 group-hover:scale-105 md:max-h-[100px] lg:max-h-[120px]"
        />
      </div>
      <span className="px-3 pb-5 text-center text-xs font-bold leading-snug text-neutral-900 transition-colors group-hover:text-primary lg:pb-[26px] lg:text-sm">
        {title}
      </span>
    </Link>
  )
}
