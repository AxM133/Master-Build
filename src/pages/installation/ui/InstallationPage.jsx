import { useDocumentTitle } from '@/shared/lib'
import { CtaBanner } from '@/widgets/cta-banner'
import { EstimateSection } from '../sections/estimate'
import { FaqSection } from '../sections/faq'
import { InstallationHero } from '../sections/hero'
import { LayersSection } from '../sections/layers'
import { ProcessSection } from '../sections/process'
import { ServicesSection } from '../sections/services'

export function InstallationPage() {
  useDocumentTitle('Укладка тротуарной плитки')

  return (
    <>
      <InstallationHero />
      <ServicesSection />
      <ProcessSection />
      <LayersSection />
      <EstimateSection />
      <FaqSection />
      <CtaBanner
        title="Бесплатный выезд замерщика"
        text="Приедем на участок, сделаем замеры и составим точную смету. Ни к чему не обязывает."
        actionLabel="Вызвать замерщика"
      />
    </>
  )
}
