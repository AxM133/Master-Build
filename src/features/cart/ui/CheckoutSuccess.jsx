import { Button, CheckIcon } from '@/shared/ui'

export function CheckoutSuccess({ onClose }) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-10 text-center">
      <span className="flex h-20 w-20 animate-pop items-center justify-center rounded-full bg-primary/10 text-primary">
        <CheckIcon className="h-10 w-10" strokeWidth={2.5} />
      </span>
      <h3 className="mt-6 text-xl font-bold">Заявка отправлена!</h3>
      <p className="mt-2 max-w-xs text-sm text-neutral-500">Менеджер перезвонит в течение 15 минут в рабочее время, уточнит детали и стоимость доставки.</p>
      <Button onClick={onClose} className="mt-8 min-w-[200px]">
        Отлично
      </Button>
    </div>
  )
}
