import { CloseIcon, SearchIcon } from '@/shared/ui'

export function ArticleSearch({ value, onChange }) {
  return (
    <div className="relative w-full sm:w-72">
      <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Поиск по статьям"
        aria-label="Поиск по статьям"
        className="h-11 w-full rounded-full border border-neutral-200 bg-white pl-11 pr-10 text-sm outline-none transition placeholder:text-neutral-400 focus:border-primary focus:ring-4 focus:ring-primary/10 focus-visible:outline-none [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Очистить поиск"
          className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-900"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
