import { ProductColors } from '@/entities/product'
import { SITE } from '@/shared/config'
import { Button, CartIcon, NumberStepper, PhoneLink } from '@/shared/ui'
import { AREA_PRESETS, MAX_AREA, MIN_AREA, RESERVE_RATE } from '../config/constants'
import { useProductConfigurator } from '../model/useProductConfigurator'
import { AreaPresets } from './AreaPresets'
import { ConfiguratorBlock } from './ConfiguratorBlock'
import { ConfiguratorPreview } from './ConfiguratorPreview'
import { ConfiguratorSpecs } from './ConfiguratorSpecs'
import { ConfiguratorSuccess } from './ConfiguratorSuccess'
import { ConfiguratorSummary } from './ConfiguratorSummary'
import { PricePerMeter } from './PricePerMeter'
import { ReserveToggle } from './ReserveToggle'

export function ProductConfigurator({ product, initialColor, onSubmit, onClose }) {
  const configurator = useProductConfigurator({ product, initialColor, onSubmit })

  if (configurator.submitted) {
    return <ConfiguratorSuccess item={configurator.submitted} onClose={onClose} />
  }

  return (
    <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <ConfiguratorPreview image={product.image} name={product.name} badge={product.badge} />

      <div className="p-6 sm:p-8">
        <h2 className="pr-12 text-xl font-bold leading-tight sm:text-2xl">{product.name}</h2>
        <ConfiguratorSpecs size={product.size} perSquareMeter={product.perSquareMeter} colorsCount={product.colors.length} />

        <ConfiguratorBlock title="Цвет" aside={configurator.color}>
          <ProductColors colors={product.colors} selected={configurator.color} onSelect={configurator.setColor} size="lg" />
          <PricePerMeter price={configurator.pricePerMeter} />
        </ConfiguratorBlock>

        <ConfiguratorBlock title="Площадь укладки">
          <NumberStepper
            value={configurator.area}
            onChange={configurator.setArea}
            min={MIN_AREA}
            max={MAX_AREA}
            suffix="м²"
            label="Площадь укладки в квадратных метрах"
          />
          <AreaPresets presets={AREA_PRESETS} value={configurator.area} onSelect={configurator.setArea} />
          <ReserveToggle checked={configurator.withReserve} onToggle={configurator.toggleReserve} percent={RESERVE_RATE * 100} />
        </ConfiguratorBlock>

        <ConfiguratorSummary {...configurator.order} />

        <Button onClick={configurator.submit} disabled={!configurator.canSubmit} size="lg" className="mt-6 w-full lg:px-8">
          <CartIcon className="h-5 w-5" />
          Добавить в заявку
        </Button>
        <p className="mt-3 text-center text-xs text-neutral-500">
          или закажите по телефону <PhoneLink phone={SITE.phones[0]} className="font-semibold text-neutral-900" />
        </p>
      </div>
    </div>
  )
}
