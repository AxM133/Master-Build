export function HeroStats({ stats }) {
  return (
    <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/15 pt-8">
      {stats.map(({ id, value, label }) => (
        <div key={id}>
          <dt className="text-2xl font-extrabold text-primary-light lg:text-3xl">{value}</dt>
          <dd className="mt-1 text-xs text-white/70">{label}</dd>
        </div>
      ))}
    </dl>
  )
}
