export function EstimateField({ label, children }) {
  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-500">{label}</p>
      {children}
    </div>
  )
}
