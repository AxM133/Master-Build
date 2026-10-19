import { SITE } from '@/shared/config'
import { Button, ContactFormFields, PhoneLink, Spinner } from '@/shared/ui'

export function CallbackForm({ form, onSubmit, isSubmitting, isError }) {
  return (
    <form onSubmit={onSubmit} noValidate className="p-6 sm:p-8">
      <h2 className="pr-10 text-2xl font-bold">Заказать звонок</h2>
      <p className="mt-2 text-sm text-neutral-500">Оставьте номер — перезвоним в течение 15 минут в рабочее время ({SITE.workHours}).</p>
      <div className="mt-6">
        <ContactFormFields form={form} />
      </div>
      {isError && <p className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700">Не удалось отправить. Попробуйте ещё раз или позвоните нам.</p>}
      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-6 w-full lg:px-8">
        {isSubmitting && <Spinner />}
        {isSubmitting ? 'Отправляем…' : 'Жду звонка'}
      </Button>
      <p className="mt-4 text-center text-xs text-neutral-500">
        Или позвоните сами: <PhoneLink phone={SITE.phones[0]} className="font-semibold text-neutral-900" />
      </p>
    </form>
  )
}
