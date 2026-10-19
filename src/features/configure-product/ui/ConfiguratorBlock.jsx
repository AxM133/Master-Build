export function ConfiguratorBlock({ title, aside, children }) {
  return (
    <section className="mt-6">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">{title}</h3>
        {aside && <span className="text-sm font-semibold text-neutral-900">{aside}</span>}
      </div>
      {children}
    </section>
  )
}
