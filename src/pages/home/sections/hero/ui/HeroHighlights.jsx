export function HeroHighlights({ items, style }) {
  return (
    <ul style={style} className="mt-10 flex animate-fade-up flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-semibold text-white/85 sm:gap-x-8">
      {items.map(({ id, icon: Icon, text }) => (
        <li key={id} className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary-light" />
          {text}
        </li>
      ))}
    </ul>
  )
}
