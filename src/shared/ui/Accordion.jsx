import { useId, useState } from 'react'
import { cn } from '@/shared/lib'
import { PlusIcon } from './icons'

function AccordionItem({ question, answer, isOpen, onToggle }) {
  const id = useId()

  return (
    <div>
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-bold transition-colors hover:text-primary lg:px-8 lg:text-base"
        >
          {question}
          <span
            className={cn(
              'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300',
              isOpen ? 'rotate-45 bg-primary text-white' : 'bg-neutral-100 text-neutral-700',
            )}
          >
            <PlusIcon className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div
        id={id}
        role="region"
        className={cn('grid transition-[grid-template-rows] duration-300 ease-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-neutral-600 lg:px-8">{answer}</p>
        </div>
      </div>
    </div>
  )
}

// Одновременно раскрыт один вопрос; первый открыт по умолчанию
export function Accordion({ items, className }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null)

  return (
    <div className={cn('divide-y divide-neutral-100 overflow-hidden rounded-[28px] bg-white text-neutral-900 shadow-card', className)}>
      {items.map(({ id, question, answer }) => (
        <AccordionItem
          key={id}
          question={question}
          answer={answer}
          isOpen={openId === id}
          onToggle={() => setOpenId((current) => (current === id ? null : id))}
        />
      ))}
    </div>
  )
}
