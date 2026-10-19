import { Container, Picture, Section, SectionTitle } from '@/shared/ui'

export function WorksSection({ title, description, items }) {
  return (
    <Section id="works">
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-relaxed text-neutral-600">{description}</p>
        <ul className="mx-auto mt-10 flex max-w-[870px] flex-wrap justify-center gap-6">
          {items.map(({ id, image, alt }) => (
            <li key={id} className="w-full overflow-hidden rounded-2xl sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]">
              <Picture src={image} alt={alt} className="aspect-[4/3] w-full transition-transform duration-300 hover:scale-105" />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
