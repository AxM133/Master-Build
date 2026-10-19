import { Button } from '@/shared/ui'
import { PageHero } from '@/widgets/page-hero'
import { DELIVERY_HERO } from '../model'

export function DeliveryHero() {
  const { breadcrumbs, title, description, action } = DELIVERY_HERO

  return (
    <PageHero breadcrumbs={breadcrumbs} title={title} description={description}>
      <Button href={action.href} className="sm:min-w-[240px]">
        {action.label}
      </Button>
    </PageHero>
  )
}
