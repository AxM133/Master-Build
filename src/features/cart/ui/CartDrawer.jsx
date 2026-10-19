import { ArrowLeftIcon, Drawer } from '@/shared/ui'
import { useCartFlow } from '../model/useCartFlow'
import { CartEmpty } from './CartEmpty'
import { CartItemCard } from './CartItemCard'
import { CartSummary } from './CartSummary'
import { CheckoutForm, CheckoutSubmit } from './CheckoutForm'
import { CheckoutSuccess } from './CheckoutSuccess'

const CHECKOUT_FORM_ID = 'checkout-form'

function CheckoutHeader({ onBack }) {
  return (
    <button type="button" onClick={onBack} className="-ml-2 flex items-center gap-2 rounded-full px-2 py-1 text-lg font-bold transition hover:text-primary">
      <ArrowLeftIcon className="h-5 w-5" />
      Оформление
    </button>
  )
}

export function CartDrawer() {
  const flow = useCartFlow()
  const { items, count, summary } = flow.cart
  const isEmpty = count === 0

  const footer = {
    items: !isEmpty && <CartSummary summary={summary} onCheckout={flow.goToCheckout} />,
    checkout: <CheckoutSubmit formId={CHECKOUT_FORM_ID} isSubmitting={flow.isSubmitting} />,
    success: null,
  }[flow.step]

  return (
    <Drawer
      isOpen={flow.isOpen}
      onClose={flow.close}
      title="Заявка"
      header={flow.step === 'checkout' ? <CheckoutHeader onBack={flow.goBack} /> : undefined}
      footer={footer}
    >
      {flow.step === 'success' && <CheckoutSuccess onClose={flow.close} />}

      {flow.step === 'checkout' && (
        <CheckoutForm
          id={CHECKOUT_FORM_ID}
          form={flow.form}
          summary={summary}
          count={count}
          onSubmit={flow.submit}
          isError={flow.isError}
        />
      )}

      {flow.step === 'items' &&
        (isEmpty ? (
          <CartEmpty onBrowse={flow.close} />
        ) : (
          <ul className="-my-4 divide-y divide-neutral-100">
            {items.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onAreaChange={(area) => flow.updateArea(item.id, area)}
                onRemove={() => flow.remove(item)}
              />
            ))}
          </ul>
        ))}
    </Drawer>
  )
}
