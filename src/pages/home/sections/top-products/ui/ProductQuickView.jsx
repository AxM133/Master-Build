import { ProductConfigurator } from '@/features/configure-product'
import { Modal } from '@/shared/ui'

export function ProductQuickView({ product, initialColor, onClose, onSubmit }) {
  return (
    <Modal isOpen={Boolean(product)} onClose={onClose} label={product?.name} className="sm:max-w-[920px]">
      {product && (
        <ProductConfigurator key={product.id} product={product} initialColor={initialColor} onSubmit={onSubmit} onClose={onClose} />
      )}
    </Modal>
  )
}
