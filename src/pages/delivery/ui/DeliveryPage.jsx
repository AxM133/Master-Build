import { useDocumentTitle } from '@/shared/lib'
import { CtaBanner } from '@/widgets/cta-banner'
import { FaqSection } from '../sections/faq'
import { DeliveryHero } from '../sections/hero'
import { NotesSection } from '../sections/notes'
import { PaymentSection } from '../sections/payment'
import { StepsSection } from '../sections/steps'
import { TransportSection } from '../sections/transport'
import { ZonesSection } from '../sections/zones'

export function DeliveryPage() {
  useDocumentTitle('Доставка и оплата')

  return (
    <>
      <DeliveryHero />
      <ZonesSection />
      <TransportSection />
      <StepsSection />
      <PaymentSection />
      <NotesSection />
      <FaqSection />
      <CtaBanner title="Рассчитаем доставку по вашему адресу" text="Оставьте заявку — менеджер перезвонит, уточнит адрес и объём и назовёт точную стоимость." />
    </>
  )
}
