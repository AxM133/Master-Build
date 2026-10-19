import { cn } from '@/shared/lib'

const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  light: 'bg-white text-neutral-900 hover:bg-neutral-100',
}

const SIZES = {
  sm: 'h-9 px-5 text-xs',
  md: 'h-11 px-8 text-sm',
  lg: 'h-12 px-10 text-sm lg:h-[60px] lg:px-16 lg:text-[15px]',
}

export function Button({ variant = 'primary', size = 'md', href, type = 'button', className, children, ...props }) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-bold transition-colors',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    VARIANTS[variant],
    SIZES[size],
    className,
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
