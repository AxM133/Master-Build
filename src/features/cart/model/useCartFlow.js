import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { toast, useContactForm } from '@/shared/lib'
import { submitOrder } from '../api/orderApi'
import { cartDrawer } from './cartDrawer'
import { clearCart, removeFromCart, restoreCartItem, updateCartItemArea } from './cartStore'
import { useCart } from './useCart'

const RESET_DELAY = 250

// Шаги панели: список → оформление → готово
export function useCartFlow() {
  const isOpen = cartDrawer.useIsOpen()
  const cart = useCart()
  const form = useContactForm()
  const [step, setStep] = useState('items')

  const mutation = useMutation({
    mutationFn: submitOrder,
    onSuccess: () => {
      clearCart()
      form.reset()
      setStep('success')
    },
  })

  const close = () => {
    cartDrawer.close()
    // сбрасываем шаг после анимации закрытия, чтобы содержимое не мигало
    if (step === 'success') setTimeout(() => setStep('items'), RESET_DELAY)
  }

  const remove = (item) => {
    const removed = removeFromCart(item.id)
    if (!removed) return

    toast({
      title: 'Удалено из заявки',
      description: `${item.name} · ${item.color}`,
      action: { label: 'Вернуть', onClick: () => restoreCartItem(removed) },
    })
  }

  const submit = form.handleSubmit((contact) => mutation.mutate({ contact, items: cart.items, summary: cart.summary }))

  return {
    isOpen,
    close,
    step,
    goToCheckout: () => setStep('checkout'),
    goBack: () => setStep('items'),
    cart,
    remove,
    updateArea: updateCartItemArea,
    form,
    submit,
    isSubmitting: mutation.isPending,
    isError: mutation.isError,
  }
}
