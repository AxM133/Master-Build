export function AboutText({ paragraphs, company }) {
  return (
    <div className="mt-6 space-y-[15px] text-xs leading-[15px] lg:mt-8">
      {paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}
      <p>{company}</p>
    </div>
  )
}
