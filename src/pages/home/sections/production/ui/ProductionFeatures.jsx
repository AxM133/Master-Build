import { Logo } from '@/shared/ui'

export function ProductionFeatures({ features }) {
  return (
    <div>
      <div className="inline-flex rounded-2xl bg-white px-6 py-4">
        <Logo />
      </div>
      <ul className="mt-8 space-y-6">
        {features.map(({ id, icon: Icon, text }) => (
          <li key={id} className="flex items-center gap-4 text-xs leading-relaxed">
            <Icon className="h-8 w-8 text-white" />
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}
