export function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-primary">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}
