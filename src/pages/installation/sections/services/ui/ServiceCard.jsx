export function ServiceCard({ title, note, price }) {
  return (
    <article className="group flex h-full flex-col justify-between gap-6 rounded-[24px] border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover lg:p-7">
      <div>
        <h3 className="text-base font-bold leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-neutral-500">{note}</p>
      </div>
      <p className="text-2xl font-extrabold text-neutral-900 transition-colors group-hover:text-primary">{price}</p>
    </article>
  )
}
