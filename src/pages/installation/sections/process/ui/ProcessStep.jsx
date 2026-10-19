export function ProcessStep({ number, title, text }) {
  return (
    <div className="relative flex gap-5 lg:flex-col lg:gap-0">
      <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-extrabold text-white ring-8 ring-dark">
        {String(number).padStart(2, '0')}
      </span>
      <div className="pb-8 lg:pb-0 lg:pt-6">
        <h3 className="text-base font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
      </div>
    </div>
  )
}
