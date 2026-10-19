import { ProductConfigurator } from '@/features/configure-product'
import { Modal } from '@/shared/ui'

export function ProductQuickView({ product, initialColor, isOpen, onClose, onSubmit, onOpenCart }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} label={product?.name} className="sm:max-w-[920px]">
      {product && (
        <ProductConfigurator
          key={product.id}
          product={product}
          initialColor={initialColor}
          onSubmit={onSubmit}
          onClose={onClose}
          onOpenCart={onOpenCart}
        />
      )}
    </Modal>
  )
}
