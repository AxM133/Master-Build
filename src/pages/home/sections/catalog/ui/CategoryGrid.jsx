import { CategoryCard } from '@/entities/category'
import { Reveal, Skeleton } from '@/shared/ui'

const COLUMNS = 4

export function CategoryGrid({ categories, isLoading, skeletonCount }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 lg:mt-[60px] lg:grid-cols-[repeat(4,240px)] lg:justify-center lg:gap-x-[30px] lg:gap-y-[62px]">
      {isLoading
        ? Array.from({ length: skeletonCount }, (_, index) => (
            <Skeleton key={index} className="h-[210px] rounded-[28px] md:h-[230px] lg:h-[263px]" />
          ))
        : categories.map((category, index) => (
            <Reveal key={category.id} delay={(index % COLUMNS) * 80}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
    </div>
  )
}
