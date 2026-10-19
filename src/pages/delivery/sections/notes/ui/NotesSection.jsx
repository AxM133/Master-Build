import { Container, InfoIcon, Reveal, Section, SectionTitle } from '@/shared/ui'
import { NOTES } from '../model'

export function NotesSection() {
  return (
    <Section id={NOTES.id} className="bg-neutral-50">
      <Container>
        <SectionTitle>{NOTES.title}</SectionTitle>
        <ul className="mx-auto mt-10 grid max-w-[1050px] gap-4 md:grid-cols-3 lg:mt-14">
          {NOTES.items.map(({ id, title, text }, index) => (
            <Reveal as="li" key={id} delay={index * 100} className="flex gap-4 rounded-[24px] border-l-4 border-primary bg-white p-6 shadow-card">
              <InfoIcon className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
