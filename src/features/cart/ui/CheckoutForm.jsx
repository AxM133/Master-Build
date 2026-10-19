import { formatNumber } from '@/shared/lib'
import { Button, ContactFormFields, Spinner } from '@/shared/ui'

export function CheckoutForm({ id, form, summary, count, onSubmit, isError }) {
  return (
    <form id={id} onSubmit={onSubmit} noValidate className="animate-fade-up">
      <div className="mb-6 rounded-2xl bg-neutral-100 p-4 text-sm">
        <p className="font-semibold">
          В заявке позиций: {count} · {formatNumber(summary.area)} м²
        </p>
        <p className="mt-1 text-neutral-500">
          Предварительно {formatNumber(summary.total)} ₽{summary.hasPriceOnRequest && ' + позиции по запросу'}
        </p>
      </div>
      <ContactFormFields form={form} withComment />
      {isError && <p className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700">Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.</p>}
    </form>
  )
}

export function CheckoutSubmit({ formId, isSubmitting }) {
  return (
    <Button type="submit" form={formId} size="lg" disabled={isSubmitting} className="w-full lg:px-8">
      {isSubmitting && <Spinner />}
      {isSubmitting ? 'Отправляем…' : 'Отправить заявку'}
    </Button>
  )
}
