export function AdvantageCard({ icon: Icon, title, text }) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] bg-white px-7 pb-9 pt-4 text-neutral-900 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-card-hover lg:min-h-[323px]">
      <Icon className="mx-auto h-[90px] w-[90px] text-primary transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110" strokeWidth={2} />
      <h3 className="mt-7 text-sm font-bold leading-[17px]">{title}</h3>
      <p className="mt-[22px] text-sm leading-[17px]">{text}</p>
    </article>
  )
}
