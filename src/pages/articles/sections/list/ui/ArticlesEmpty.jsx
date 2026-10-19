import { Button, SearchIcon } from '@/shared/ui'

export function ArticlesEmpty({ onReset }) {
  return (
    <div className="flex animate-fade-up flex-col items-center py-16 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
        <SearchIcon className="h-7 w-7" />
      </span>
      <h3 className="mt-5 text-lg font-bold">Ничего не нашлось</h3>
      <p className="mt-2 text-sm text-neutral-500">Попробуйте другой запрос или рубрику.</p>
      <Button variant="outline" onClick={onReset} className="mt-6">
        Сбросить фильтры
      </Button>
    </div>
  )
}
