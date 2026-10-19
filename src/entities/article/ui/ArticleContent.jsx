import { CheckIcon, InfoIcon } from '@/shared/ui'

const BLOCKS = {
  p: ({ text }) => <p className="text-[15px] leading-[1.75] text-neutral-700">{text}</p>,
  h2: ({ text }) => <h2 className="pt-4 text-xl font-bold leading-tight lg:text-2xl">{text}</h2>,
  list: ({ items }) => (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-neutral-700">
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckIcon className="h-3 w-3" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  ),
  tip: ({ text }) => (
    <aside className="flex gap-4 rounded-2xl border-l-4 border-primary bg-primary/5 p-5">
      <InfoIcon className="h-6 w-6 shrink-0 text-primary" />
      <p className="text-sm font-medium leading-relaxed text-neutral-800">{text}</p>
    </aside>
  ),
}

export function ArticleContent({ blocks }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        const Block = BLOCKS[block.type]
        return Block ? <Block key={index} {...block} /> : null
      })}
    </div>
  )
}
