import { useDocumentTitle } from '@/shared/lib'
import { Button, Container } from '@/shared/ui'

export function NotFoundPage({ title = 'Страница не найдена', text = 'Возможно, раздел ещё в разработке или ссылка устарела.' }) {
  useDocumentTitle(title)

  return (
    <section className="py-24 lg:py-32">
      <Container className="flex flex-col items-center text-center">
        <p className="animate-fade-up bg-gradient-to-b from-primary to-primary-hover bg-clip-text text-8xl font-extrabold text-transparent lg:text-9xl">404</p>
        <h1 style={{ animationDelay: '120ms' }} className="mt-4 animate-fade-up text-2xl font-bold lg:text-3xl">
          {title}
        </h1>
        <p style={{ animationDelay: '200ms' }} className="mt-3 max-w-md animate-fade-up text-sm text-neutral-500">
          {text}
        </p>
        <div style={{ animationDelay: '280ms' }} className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row">
          <Button to="/">На главную</Button>
          <Button to="/#top-products" variant="outline">
            Смотреть товары
          </Button>
        </div>
      </Container>
    </section>
  )
}
