import { Container, Skeleton } from '@/shared/ui'

export function ArticleSkeleton() {
  return (
    <Container className="py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
        <Skeleton className="h-4 w-48 rounded-full" />
        <Skeleton className="h-12 w-full rounded-xl" />
        <Skeleton className="h-6 w-2/3 rounded-xl" />
      </div>
      <Skeleton className="mx-auto mt-12 aspect-[21/9] max-w-[1050px] rounded-[32px]" />
    </Container>
  )
}
