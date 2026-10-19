import { Button, CheckIcon } from '@/shared/ui'

export function CallbackSuccess({ onClose }) {
  return (
    <div className="flex flex-col items-center px-6 py-12 text-center sm:px-10">
      <span className="flex h-20 w-20 animate-pop items-center justify-center rounded-full bg-primary/10 text-primary">
        <CheckIcon className="h-10 w-10" strokeWidth={2.5} />
      </span>
      <h2 className="mt-6 text-2xl font-bold">Спасибо!</h2>
      <p className="mt-2 max-w-xs text-sm text-neutral-500">Мы получили вашу заявку и скоро перезвоним.</p>
      <Button onClick={onClose} className="mt-8 min-w-[200px]">
        Хорошо
      </Button>
    </div>
  )
}
