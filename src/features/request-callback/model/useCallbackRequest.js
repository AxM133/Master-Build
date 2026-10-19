import { useMutation } from '@tanstack/react-query'
import { useContactForm } from '@/shared/lib'
import { requestCallback } from '../api/callbackApi'
import { callbackModal } from './callbackModal'

const RESET_DELAY = 250

export function useCallbackRequest() {
  const isOpen = callbackModal.useIsOpen()
  const form = useContactForm()
  const mutation = useMutation({ mutationFn: requestCallback })

  const close = () => {
    callbackModal.close()
    if (mutation.isSuccess) {
      // сбрасываем после анимации закрытия, чтобы при следующем открытии была чистая форма
      setTimeout(() => {
        mutation.reset()
        form.reset()
      }, RESET_DELAY)
    }
  }

  const submit = form.handleSubmit(({ name, phone, consent }) => mutation.mutate({ name, phone, consent }))

  return {
    isOpen,
    close,
    form,
    submit,
    isSubmitting: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  }
}
