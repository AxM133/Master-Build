import { Modal } from '@/shared/ui'
import { useCallbackRequest } from '../model/useCallbackRequest'
import { CallbackForm } from './CallbackForm'
import { CallbackSuccess } from './CallbackSuccess'

export function CallbackModal() {
  const callback = useCallbackRequest()

  return (
    <Modal isOpen={callback.isOpen} onClose={callback.close} label="Заказать звонок" className="sm:max-w-md">
      {callback.isSuccess ? (
        <CallbackSuccess onClose={callback.close} />
      ) : (
        <CallbackForm form={callback.form} onSubmit={callback.submit} isSubmitting={callback.isSubmitting} isError={callback.isError} />
      )}
    </Modal>
  )
}
