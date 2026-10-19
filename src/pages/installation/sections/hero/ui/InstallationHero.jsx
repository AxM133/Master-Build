import { openCallbackModal } from '@/features/request-callback'
import { Button } from '@/shared/ui'
import { PageHero } from '@/widgets/page-hero'
import { INSTALLATION_HERO } from '../model'
import { HeroStats } from './HeroStats'

export function InstallationHero() {
  const { breadcrumbs, title, description, actions, stats } = INSTALLATION_HERO

  return (
    <PageHero breadcrumbs={breadcrumbs} title={title} description={description}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href={actions.estimate.href} className="sm:min-w-[220px]">
          {actions.estimate.label}
        </Button>
        <Button variant="glass" onClick={openCallbackModal} className="sm:min-w-[220px]">
          {actions.callback.label}
        </Button>
      </div>
      <HeroStats stats={stats} />
    </PageHero>
  )
}
