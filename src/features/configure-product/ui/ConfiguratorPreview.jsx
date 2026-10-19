import { Badge, Picture } from '@/shared/ui'

export function ConfiguratorPreview({ image, name, badge }) {
  return (
    <div className="relative flex items-center justify-center bg-neutral-100 px-6 pb-8 pt-16 md:px-10 md:py-12">
      {badge && <Badge className="absolute left-6 top-6">{badge}</Badge>}
      <Picture
        src={image}
        alt={name}
        fit="contain"
        className="max-h-[180px] w-auto max-w-full animate-fade-up mix-blend-multiply md:max-h-[300px]"
      />
    </div>
  )
}
