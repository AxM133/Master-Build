import { cn, useInView } from '@/shared/lib'

// Плавно проявляет содержимое, когда оно впервые попадает в экран
export function Reveal({ as: Tag = 'div', delay = 0, className, children }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      style={inView && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        'transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
