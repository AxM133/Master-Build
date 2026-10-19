import { openCallbackModal } from '@/features/request-callback'
import { shareLink } from '@/shared/lib'
import { Button, ShareIcon } from '@/shared/ui'

export function ArticleAside({ title }) {
  return (
    <aside className="space-y-4 lg:sticky lg:top-24">
      <div className="rounded-[24px] bg-dark p-6 text-white">
        <h2 className="text-lg font-bold">Нужна консультация?</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/70">Поможем подобрать плитку и рассчитаем материал под ваш участок.</p>
        <Button onClick={openCallbackModal} className="mt-5 w-full">
          Заказать звонок
        </Button>
        <Button to="/#top-products" variant="glass" className="mt-3 w-full">
          Рассчитать стоимость
        </Button>
      </div>
      <Button variant="outline" onClick={() => shareLink({ title })} className="w-full">
        <ShareIcon className="h-4 w-4" />
        Поделиться статьёй
      </Button>
    </aside>
  )
}
