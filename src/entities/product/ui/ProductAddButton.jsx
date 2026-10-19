import { PlusIcon } from '@/shared/ui'

export function ProductAddButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="group/add absolute bottom-0 right-0 flex h-14 w-[69px] items-center justify-center rounded-tl-[30px] bg-primary text-white transition-colors hover:bg-primary-hover"
    >
      <PlusIcon className="h-6 w-6 transition-transform duration-300 group-hover/add:rotate-90" />
    </button>
  )
}
