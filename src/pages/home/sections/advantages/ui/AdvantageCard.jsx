export function AdvantageCard({ icon: Icon, title, text }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-6 text-neutral-900 shadow-card">
      <Icon className="h-12 w-12 text-primary" />
      <h3 className="mt-5 text-sm font-bold leading-snug">{title}</h3>
      <p className="mt-3 text-xs leading-relaxed text-neutral-600">{text}</p>
    </article>
  )
}
