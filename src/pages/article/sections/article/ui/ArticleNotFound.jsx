import { Button, Container } from '@/shared/ui'

export function ArticleNotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <p className="text-7xl font-extrabold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold">Статья не найдена</h1>
      <p className="mt-2 text-sm text-neutral-500">Возможно, она была перемещена или удалена.</p>
      <Button to="/articles" className="mt-8">
        Все статьи
      </Button>
    </Container>
  )
}
