import { cn, toTelHref } from '@/shared/lib'

export function PhoneLink({ phone, className }) {
  return (
    <a href={toTelHref(phone)} className={cn('transition-colors hover:text-primary', className)}>
      {phone}
    </a>
  )
}
