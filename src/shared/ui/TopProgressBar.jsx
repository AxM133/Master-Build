import { cn } from '@/shared/lib'

// Тонкая полоса сверху, пока грузится следующая страница
export function TopProgressBar({ active }) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5 transition-opacity duration-300', active ? 'opacity-100' : 'opacity-0')}
    >
      <div className={cn('h-full bg-primary transition-[width] ease-out', active ? 'w-4/5 duration-[2000ms]' : 'w-full duration-300')} />
    </div>
  )
}
