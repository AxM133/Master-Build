export function ProductionFeatureList({ features }) {
  return (
    <ul className="mt-10 space-y-[30px] lg:mt-[52px]">
      {features.map(({ id, icon: Icon, text }) => (
        <li key={id} className="flex items-center gap-6 lg:gap-[30px]">
          <Icon className="h-12 w-[60px] text-white" />
          <p className="max-w-[230px] whitespace-pre-line text-sm leading-[17px] text-white">{text}</p>
        </li>
      ))}
    </ul>
  )
}
