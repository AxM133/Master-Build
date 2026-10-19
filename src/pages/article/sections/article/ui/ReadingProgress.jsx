export function ReadingProgress({ value }) {
  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[45] h-1 bg-transparent">
      <div className="h-full origin-left bg-primary transition-transform duration-150 ease-out" style={{ transform: `scaleX(${value})` }} />
    </div>
  )
}
