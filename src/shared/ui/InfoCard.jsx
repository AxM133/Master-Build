import { cn } from '@/shared/lib'

// Карточка «иконка + заголовок + текст» для списков преимуществ, способов оплаты и т.п.
export function InfoCard({ icon: Icon, title, text, className }) {
  return (
    <article className={cn('group h-full rounded-[24px] bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover lg:p-7', className)}>
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="mt-5 text-base font-bold leading-snug text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
    </article>
  )
}
