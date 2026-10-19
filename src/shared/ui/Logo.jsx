import { Link } from 'react-router-dom'
import { cn } from '@/shared/lib'
import { LogoMark } from './LogoMark'

const SIZES = {
  md: { mark: 'h-9 w-10', text: 'text-[15px]' },
  lg: { mark: 'h-[52px] w-[58px]', text: 'text-[21px]' },
}

export function Logo({ to = '/', size = 'md', className }) {
  const { mark, text } = SIZES[size]

  return (
    <Link to={to} className={cn('inline-flex items-end gap-0.5', className)} aria-label="Мастер Строй — на главную">
      <LogoMark className={cn('shrink-0 text-[#3D3D3D]', mark)} />
      <span className={cn('pb-px font-extrabold uppercase leading-[0.95] tracking-tight', text)}>
        <span className="block text-[#3D3D3D]">Мастер</span>
        <span className="block text-primary">Строй</span>
      </span>
    </Link>
  )
}
